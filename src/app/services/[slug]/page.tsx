import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Button, Card, Eyebrow, PageHero, Section } from "@/components/ui";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { PROCESS_STEPS, SERVICES } from "@/lib/data";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = SERVICES.find((s) => s.slug === slug);
  return { title: service?.name ?? "Service" };
}

export default async function ServiceDetailPage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PageHero eyebrow={service.kicker} title={service.name} lead={service.summary} />

      <Section className="pt-0">
        <div className="grid lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-7">
            <Eyebrow>What&apos;s Included</Eyebrow>
            <ul className="mt-5 flex flex-col gap-5">
              {service.points.map((p, i) => (
                <li key={i} className="flex gap-4 border-t border-line pt-5">
                  <span className="text-sm font-semibold text-ink-faint pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-ink-muted leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <Card className="p-8">
              <div className="font-display text-2xl font-semibold tracking-display">Ready to talk?</div>
              <p className="mt-3 text-ink-muted leading-relaxed">
                Tell us about your project and we&apos;ll scope the right combination of services.
              </p>
              <div className="mt-6">
                <Button href="/contact" className="w-full">
                  Speak with our team
                </Button>
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section dark>
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow dark>How It Fits</Eyebrow>
            <h2 className="font-display mt-3 text-[clamp(2rem,4.5vw,3.5rem)] font-semibold tracking-display-lg">
              One coordinated flow, start to finish
            </h2>
          </div>
        </Reveal>
        <RevealGroup className="mt-14 grid md:grid-cols-5 gap-6">
          {PROCESS_STEPS.map((step) => (
            <RevealItem key={step.step} className="text-center">
              <div className="text-sm font-semibold text-accent">{step.step}</div>
              <div className="font-display text-base font-semibold mt-2 leading-tight">{step.label}</div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>
    </>
  );
}
