"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 1200;
const NAVY = new THREE.Color("#0e2c54");
const BLUE = new THREE.Color("#3087d0");
const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2;

// Deterministic pseudo-random in [0, 1) — avoids Math.random during render.
function hash(n: number) {
  const x = Math.sin(n * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

function ParticleSwarm() {
  const pointsRef = useRef<THREE.Points>(null);
  const target = useMemo(() => new THREE.Vector3(), []);
  const color = useMemo(() => new THREE.Color(), []);

  const { positions, colors, current } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const current: THREE.Vector3[] = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const r = 60 + hash(i) * 40;
      const theta = hash(i + 0.33) * Math.PI * 2;
      const phi = Math.acos(2 * hash(i + 0.66) - 1);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      current.push(new THREE.Vector3(x, y, z));

      colors[i * 3] = NAVY.r;
      colors[i * 3 + 1] = NAVY.g;
      colors[i * 3 + 2] = NAVY.b;
    }

    return { positions, colors, current };
  }, []);

  useFrame((state) => {
    const geometry = pointsRef.current?.geometry;
    if (!geometry) return;

    const time = state.clock.getElapsedTime();
    const posAttr = geometry.attributes.position as THREE.BufferAttribute;
    const colorAttr = geometry.attributes.color as THREE.BufferAttribute;

    const speed = 0.15;
    const chaos = 4;
    const coreSize = 6;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const norm = i / PARTICLE_COUNT;
      const progress = (norm + time * speed * 0.2) % 1;
      const easeProgress = Math.pow(progress, 1.5);

      const theta = (2 * Math.PI * i) / GOLDEN_RATIO;
      const phi = Math.acos(1 - 2 * norm);
      const currentRadius = coreSize + 55 * (1 - easeProgress);

      const instability = Math.pow(1 - progress, 2);
      const wobbleX = Math.sin(time * 2 + norm * 100) * chaos * instability;
      const wobbleY = Math.cos(time * 1.5 + norm * 200) * chaos * instability;
      const wobbleZ = Math.sin(time * 3 - norm * 300) * chaos * instability;

      const sinPhi = Math.sin(phi);
      target.set(
        currentRadius * sinPhi * Math.cos(theta) + wobbleX,
        currentRadius * sinPhi * Math.sin(theta) + wobbleY,
        currentRadius * Math.cos(phi) + wobbleZ,
      );

      current[i].lerp(target, 0.08);
      posAttr.setXYZ(i, current[i].x, current[i].y, current[i].z);

      color.lerpColors(BLUE, NAVY, progress);
      colorAttr.setXYZ(i, color.r, color.g, color.b);
    }

    posAttr.needsUpdate = true;
    colorAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.9}
        vertexColors
        transparent
        opacity={0.55}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}

export function ParticleField() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-40"
    >
      <Canvas camera={{ position: [0, 0, 80], fov: 50 }} gl={{ alpha: true, antialias: true }}>
        <ParticleSwarm />
      </Canvas>
    </div>
  );
}
