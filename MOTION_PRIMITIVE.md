Text Effect

```
import { TextEffect } from '@/components/core/text-effect';

export function TextEffectWithPreset() {
  return (
    <TextEffect per='word' as='h3' preset='slide'>
      Animate your ideas with motion-primitives
    </TextEffect>
  );
}
```

`npx motion-primitives@latest add text-effect`

Text Roll

```
import { TextRoll } from '@/components/core/text-roll';

export function TextRollBasic() {
  return (
    <TextRoll className='text-4xl text-black dark:text-white'>
      motion-primitives
    </TextRoll>
  );
}
```

`npx motion-primitives@latest add text-roll`

Accordian 

```
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/core/accordion';
import { ChevronRight } from 'lucide-react';

export function AccordionVariant() {
  return (
    <Accordion
      className='flex w-full flex-col'
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      variants={{
        expanded: {
          opacity: 1,
          scale: 1,
        },
        collapsed: {
          opacity: 0,
          scale: 0.7,
        },
      }}
    >
      <AccordionItem value='getting-started' className='py-2'>
        <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50'>
          <div className='flex items-center'>
            <ChevronRight className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50' />
            <div className='ml-2 text-zinc-950 dark:text-zinc-50'>
              How do I start with Motion-Primitives?
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className='origin-left'>
          <p className='pl-6 pr-2 text-zinc-500 dark:text-zinc-400'>
            Kick off your experience by setting up Motion-Primitives. This
            section covers the basics of installation and how to add animations
            to your projects. You’ll get familiar with the initial setup and the
            core features quickly.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='animation-properties' className='py-2'>
        <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50'>
          <div className='flex items-center'>
            <ChevronRight className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50' />
            <div className='ml-2 text-zinc-950 dark:text-zinc-50'>
              What are the key animation properties?
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className='origin-left'>
          <p className='pl-6 pr-2 text-zinc-500 dark:text-zinc-400'>
            Discover a variety of properties to customize your animations. Learn
            to adjust timing, easing, and delays for smoother effects. This
            guide will help you tailor these settings to your app’s needs.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='advanced-features' className='py-2'>
        <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50'>
          <div className='flex items-center'>
            <ChevronRight className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50' />
            <div className='ml-2 text-zinc-950 dark:text-zinc-50'>
              How do I use advanced features?
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className='origin-left'>
          <p className='pl-6 pr-2 text-zinc-500 dark:text-zinc-400'>
            Advance your skills by using more complex functions of
            Motion-Primitives. Explore how to link animations together, create
            intricate sequences, and interact with motion sensors for dynamic
            effects.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='community-support' className='py-2'>
        <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50'>
          <div className='flex items-center'>
            <ChevronRight className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50' />
            <div className='ml-2 text-zinc-950 dark:text-zinc-50'>
              How do I engage with the community?
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className='origin-left'>
          <p className='pl-6 pr-2 text-zinc-500 dark:text-zinc-400'>
            Connect with the Motion-Primitives community for support and
            collaboration. Learn how to contribute, share knowledge, and access
            helpful resources. Stay updated on new updates and collective
            insights.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
```

Animated Tab Hover

```
import { AnimatedBackground } from '@/components/core/animated-background';

export function AnimatedTabsHover() {
  const TABS = ['Home', 'About', 'Services', 'Contact'];

  return (
    <div className='flex flex-row'>
      <AnimatedBackground
        defaultValue={TABS[0]}
        className='rounded-lg bg-zinc-100 dark:bg-zinc-800'
        transition={{
          type: 'spring',
          bounce: 0.2,
          duration: 0.3,
        }}
        enableHover
      >
        {TABS.map((tab, index) => (
          <button
            key={index}
            data-id={tab}
            type='button'
            className='px-2 py-0.5 text-zinc-600 transition-colors duration-300 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50'
          >
            {tab}
          </button>
        ))}
      </AnimatedBackground>
    </div>
  );
}

```

`npx motion-primitives@latest add animated-background`

Basic In View

```
import { InView } from '@/components/core/in-view';

export function InViewBasicMultiple() {
  return (
    <div className='h-[350px] w-full overflow-y-auto overflow-x-hidden'>
      <div className='mb-36 py-12 text-center text-sm'>Scroll down</div>
      <div className='flex h-[350px] items-end justify-center px-4 pb-24'>
        <InView
          variants={{
            hidden: {
              opacity: 0,
              y: 30,
              scale: 0.95,
              filter: 'blur(4px)',
            },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: 'blur(0px)',
            },
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          viewOptions={{ margin: '0px 0px -350px 0px' }}
        >
          <div className='max-w-96 bg-zinc-100 p-4'>
            <p className='text-zinc-600'>
              <strong className='font-medium text-zinc-900'>Athletics.</strong>{' '}
              Watch running, jumping, and throwing events. Athletes compete in
              many different activities.
            </p>
          </div>
        </InView>
      </div>
      <div className='flex h-[350px] items-end justify-center px-4 pb-24'>
        <InView
          variants={{
            hidden: {
              opacity: 0,
              x: 100,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          viewOptions={{ margin: '0px 0px -350px 0px' }}
        >
          <div className='max-w-96 bg-zinc-900 p-4'>
            <p className='text-zinc-400'>
              <strong className='font-medium text-zinc-50'>Swimming.</strong>{' '}
              See swimmers race in water. They use different styles to swim fast
              and win medals.
            </p>
          </div>
        </InView>
      </div>
      <div className='flex h-[350px] items-end justify-center overflow-x-hidden px-4 pb-24'>
        <InView
          variants={{
            hidden: {
              opacity: 0,
              scale: 1.5,
            },
            visible: {
              opacity: 1,
              scale: 1,
            },
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          viewOptions={{ margin: '0px 0px -350px 0px' }}
        >
          <div className='max-w-96 bg-zinc-100 p-4'>
            <p className='text-zinc-600'>
              <strong className='font-medium'>Gymnastics.</strong> Gymnasts
              perform amazing flips and jumps. They show strength and balance in
              their routines.
            </p>
          </div>
        </InView>
      </div>
    </div>
  );
}

```

In view with images and margin options

```
'use client';
import { InView } from '@/components/core/in-view';
import { motion } from 'motion/react';

export function InViewImagesGrid() {
  return (
    <div className='h-full w-full overflow-auto'>
      <div className='mb-20 py-12 text-center text-sm'>Scroll down</div>
      <div className='flex h-[1200px] items-end justify-center pb-12'>
        <InView
          viewOptions={{ once: true, margin: '0px 0px -250px 0px' }}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.09,
              },
            },
          }}
        >
          <div className='columns-2 gap-4 px-8 sm:columns-3'>
            {[
              'https://images.beta.cosmos.so/e5ebb6f8-8202-40ec-bc70-976f81153501?format=jpeg',
              'https://images.beta.cosmos.so/1b6f1bee-1b4c-4035-9e93-c93ef4d445e1?format=jpeg',
              'https://images.beta.cosmos.so/9968a6cf-d7f6-4ec9-a56d-ac4eef3f8689?format=jpeg',
              'https://images.beta.cosmos.so/4b88a39c-c657-4911-b843-b473237e83b5?format=jpeg',
              'https://images.beta.cosmos.so/86af92c0-064d-4801-b7ed-232535b03328?format=jpeg',
              'https://images.beta.cosmos.so/399e2a4a-e118-4aaf-9c7e-155ed18f6556?format=jpeg',
              'https://images.beta.cosmos.so/6ff16bc9-dc94-4549-a057-673a603ce203?format=jpeg',
              'https://images.beta.cosmos.so/d67c3185-4480-4408-8f9d-1cbf541e5d91?format=jpeg',
              'https://images.beta.cosmos.so/a7b19274-3370-4080-b734-e8ac268d8c8e.?format=jpeg',
              'https://images.beta.cosmos.so/551daf0d-77e8-472c-9324-468fed15a0ba?format=jpeg',
            ].map((imgSrc, index) => {
              return (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      filter: 'blur(0px)',
                    },
                  }}
                  key={index}
                  className='mb-4'
                >
                  <img
                    src={imgSrc}
                    alt={`Image placeholder from cosmos.so, index:${index}`}
                    className='size-full rounded-lg object-contain'
                  />
                </motion.div>
              );
            })}
          </div>
        </InView>
      </div>
    </div>
  );
}

```

`npx shadcn add "https://motion-primitives.com/c/in-view.json"`

Animated Number

```
'use client';
import { useEffect, useState } from 'react';
import { AnimatedNumber } from '@/components/core/animated-number';

export function AnimatedNumberBasic() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(2082);
  }, []);

  return (
    <div className='flex w-full items-center justify-center'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 16 16'
        width='16'
        height='16'
        className='mr-3 h-3 w-3 fill-transparent stroke-zinc-800 stroke-[1.3] dark:stroke-zinc-50'
      >
        <path d='M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z'></path>
      </svg>
      <AnimatedNumber
        className='inline-flex items-center font-mono text-2xl font-light text-zinc-800 dark:text-zinc-50'
        springOptions={{
          bounce: 0,
          duration: 2000,
        }}
        value={value}
      />
    </div>
  );
}

```

`npx motion-primitives@latest add animated-number`

Spotlight on cursor

```
import { Spotlight } from '@/components/core/spotlight';

export function SpotlightCustomColor() {
  return (
    <div className='relative aspect-video h-[200px] rounded-sm border border-zinc-100 bg-white dark:border-zinc-800 dark:bg-black'>
      <Spotlight
        className='from-blue-800 via-blue-600 to-blue-400 blur-xl dark:from-blue-900 dark:via-blue-500 dark:to-blue-900'
        size={64}
      />
      <div className='absolute inset-0'>
        <svg className='h-full w-full'>
          <defs>
            <pattern
              id='grid-pattern'
              width='8'
              height='8'
              patternUnits='userSpaceOnUse'
            >
              <path
                xmlns='http://www.w3.org/2000/svg'
                d='M0 4H4M4 4V0M4 4H8M4 4V8'
                stroke='currentColor'
                strokeOpacity='0.3'
                className='stroke-white dark:stroke-black'
              />
              <rect
                x='3'
                y='3'
                width='2'
                height='2'
                fill='currentColor'
                fillOpacity='0.25'
                className='fill-white dark:fill-black'
              />
            </pattern>
          </defs>
          <rect width='100%' height='100%' fill='url(#grid-pattern)' />
        </svg>
      </div>
    </div>
  );
}

```

`npx motion-primitives@latest add spotlight`

Tilt Card

```
import { Tilt } from '@/components/core/tilt';

export function TiltCard1() {
  return (
    <Tilt rotationFactor={8} isRevese>
      <div
        style={{
          borderRadius: '12px',
        }}
        className='flex max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
      >
        <img
          src='https://images.beta.cosmos.so/f7fcb95d-981b-4cb3-897f-e35f6c20e830?format=jpeg'
          alt='Ghost in the shell - Kôkaku kidôtai'
          className='h-48 w-full object-cover'
        />
        <div className='p-2'>
          <h1 className='font-mono leading-snug text-zinc-950 dark:text-zinc-50'>
            Ghost in the Shell
          </h1>
          <p className='text-zinc-700 dark:text-zinc-400'>Kôkaku kidôtai</p>
        </div>
      </div>
    </Tilt>
  );
}

```

`npx motion-primitives@latest add tilt`

Toolbar expand (vertically up can be changed to down for navbar)

```
'use client';

import React, { useEffect, useRef, useState } from 'react';
import useMeasure from 'react-use-measure';
import { AnimatePresence, motion, MotionConfig } from 'motion/react';
import { cn } from '@/lib/utils';
import useClickOutside from '@/hooks/useClickOutside';
import { Folder, MessageCircle, User, WalletCards } from 'lucide-react';

const transition = {
  type: 'spring',
  bounce: 0.1,
  duration: 0.25,
};

const ITEMS = [
  {
    id: 1,
    label: 'User',
    title: <User className='h-5 w-5' />,
    content: (
      <div className='flex flex-col space-y-4'>
        <div className='flex flex-col space-y-1 text-zinc-700'>
          <div className='h-8 w-8 rounded-full bg-linear-to-br from-blue-500 to-blue-400' />
          <span>Ibelick</span>
        </div>
        <button
          className='relative h-8 w-full scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 px-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98]'
          type='button'
        >
          Edit Profile
        </button>
      </div>
    ),
  },
  {
    id: 2,
    label: 'Messages',
    title: <MessageCircle className='h-5 w-5' />,
    content: (
      <div className='flex flex-col space-y-4'>
        <div className='text-zinc-700'>You have 3 new messages.</div>
        <button
          className='relative h-8 w-full scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 px-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98]'
          type='button'
        >
          View more
        </button>
      </div>
    ),
  },
  {
    id: 3,
    label: 'Documents',
    title: <Folder className='h-5 w-5' />,
    content: (
      <div className='flex flex-col space-y-4'>
        <div className='flex flex-col text-zinc-700'>
          <div className='space-y-1'>
            <div>Project_Proposal.pdf</div>
            <div>Meeting_Notes.docx</div>
            <div>Financial_Report.xls</div>
          </div>
        </div>
        <button
          className='relative h-8 w-full scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 px-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98]'
          type='button'
        >
          Manage documents
        </button>
      </div>
    ),
  },
  {
    id: 4,
    label: 'Wallet',
    title: <WalletCards className='h-5 w-5' />,
    content: (
      <div className='flex flex-col space-y-4'>
        <div className='flex flex-col text-zinc-700'>
          <span>Current Balance</span>
          <span>$1,250.32</span>
        </div>
        <button
          className='relative h-8 w-full scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 px-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98]'
          type='button'
        >
          View Transactions
        </button>
      </div>
    ),
  },
];

export default function ToolbarExpandable() {
  const [active, setActive] = useState<number | null>(null);
  const [contentRef, { height: heightContent }] = useMeasure();
  const [menuRef, { width: widthContainer }] = useMeasure();
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [maxWidth, setMaxWidth] = useState(0);

  useClickOutside(ref, () => {
    setIsOpen(false);
    setActive(null);
  });

  useEffect(() => {
    if (!widthContainer || maxWidth > 0) return;

    setMaxWidth(widthContainer);
  }, [widthContainer, maxWidth]);

  return (
    <MotionConfig transition={transition}>
      <div className='absolute bottom-8' ref={ref}>
        <div className='h-full w-full rounded-xl border border-zinc-950/10 bg-white'>
          <div className='overflow-hidden'>
            <AnimatePresence initial={false} mode='sync'>
              {isOpen ? (
                <motion.div
                  key='content'
                  initial={{ height: 0 }}
                  animate={{ height: heightContent || 0 }}
                  exit={{ height: 0 }}
                  style={{
                    width: maxWidth,
                  }}
                >
                  <div ref={contentRef} className='p-2'>
                    {ITEMS.map((item) => {
                      const isSelected = active === item.id;

                      return (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isSelected ? 1 : 0 }}
                          exit={{ opacity: 0 }}
                        >
                          <div
                            className={cn(
                              'px-2 pt-2 text-sm',
                              isSelected ? 'block' : 'hidden'
                            )}
                          >
                            {item.content}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
          <div className='flex space-x-2 p-2' ref={menuRef}>
            {ITEMS.map((item) => (
              <button
                key={item.id}
                aria-label={item.label}
                className={cn(
                  'relative flex h-9 w-9 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98]',
                  active === item.id ? 'bg-zinc-100 text-zinc-800' : ''
                )}
                type='button'
                onClick={() => {
                  if (!isOpen) setIsOpen(true);
                  if (active === item.id) {
                    setIsOpen(false);
                    setActive(null);
                    return;
                  }

                  setActive(item.id);
                }}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}

```

Progressive Blur Slider

```
import { InfiniteSlider } from '@/components/core/infinite-slider';
import { ProgressiveBlur } from '@/components/core/progressive-blur';

export function ProgressiveBlurSlider() {
  return (
    <div className='relative h-[350px] w-full overflow-hidden'>
      <InfiniteSlider className='flex h-full w-full items-center'>
        <div className='w-32 text-center text-4xl font-[450] text-black dark:text-white'>
          1
        </div>
        <div className='w-32 text-center text-4xl font-[450] text-black dark:text-white'>
          2
        </div>
        <div className='w-32 text-center text-4xl font-[450] text-black dark:text-white'>
          3
        </div>
        <div className='w-32 text-center text-4xl font-[450] text-black dark:text-white'>
          4
        </div>
        <div className='w-32 text-center text-4xl font-[450] text-black dark:text-white'>
          5
        </div>
        <div className='w-32 text-center text-4xl font-[450] text-black dark:text-white'>
          6
        </div>
        <div className='w-32 text-center text-4xl font-[450] text-black dark:text-white'>
          7
        </div>
        <div className='w-32 text-center text-4xl font-[450] text-black dark:text-white'>
          8
        </div>
        <div className='w-32 text-center text-4xl font-[450] text-black dark:text-white'>
          9
        </div>
      </InfiniteSlider>
      <ProgressiveBlur
        className='pointer-events-none absolute top-0 left-0 h-full w-[200px]'
        direction='left'
        blurIntensity={1}
      />
      <ProgressiveBlur
        className='pointer-events-none absolute top-0 right-0 h-full w-[200px]'
        direction='right'
        blurIntensity={1}
      />
    </div>
  );
}

```

`npx motion-primitives@latest add progressive-blur`

