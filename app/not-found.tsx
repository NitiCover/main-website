import { ButtonLink, Highlight, PageHero } from "@/components/brand";
import { DEMO_HREF } from "@/lib/site-links";

export default function NotFound() {
  return (
    <PageHero
      eyebrow="404"
      title={
        <>
          This page <Highlight>could not be found</Highlight>
        </>
      }
      description="The link may be out of date, or the page may have moved. Head back home or talk to us directly."
      actions={
        <>
          <ButtonLink href="/" variant="lime">
            Back to home
          </ButtonLink>
          <ButtonLink href={DEMO_HREF} variant="outline-light">
            Book a demo
          </ButtonLink>
        </>
      }
    />
  );
}
