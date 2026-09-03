import Link from "next/link";
import { Button, Card, Eyebrow, Section } from "@/components/ui";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { Counter } from "@/components/counter";
import { BrandStack } from "@/components/brand-stack";
import { ShipHero } from "@/components/ship-hero";
import { CARRIERS, CERTIFICATIONS, OFFICES, PROCESS_STEPS, STATS } from "@/lib/data";

export default function Home() {
  return (
    <>
      <ShipHero />

      <div className="border-y border-line py-4 overflow-hidden bg-canvas">
        <div className="flex whitespace-nowrap animate-[marquee_28s_linear_infinite]">
          {[...CARRIERS, ...CERTIFICATIONS, ...CARRIERS, ...CERTIFICATIONS].map((item, i) => (
            <span key={i} className="mx-6 text-sm font-medium text-ink-faint">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* BRAND STACK */}
      <section className="pt-8 pb-16">
        <div className="container-page text-center mb-4">
          <Reveal>
            <Eyebrow>Hanes Distribution Group</Eyebrow>
            <h2 className="font-display mt-3 text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-display-lg">
              Five brands. One supply chain.
            </h2>
          </Reveal>
        </div>
        <BrandStack />
      </section>

      {/* STATS — dark */}
      <Section dark>
        <Reveal>
          <div className="text-center">
            <Eyebrow dark>By The Numbers</Eyebrow>
            <h2 className="font-display mt-3 text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-display-lg">
              Built for certainty
            </h2>
          </div>
        </Reveal>
        <RevealGroup className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map((s) => (
            <RevealItem key={s.label} className="text-center">
              <div className="font-display text-5xl md:text-6xl font-semibold tracking-display-lg text-white">
                <Counter value={s.value} />
              </div>
              <div className="mt-2 text-sm text-on-dark-muted">{s.label}</div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* PROCESS */}
      <Section>
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>Our Process</Eyebrow>
            <h2 className="font-display mt-3 text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-display-lg">
              From factory floor to your site
            </h2>
          </div>
        </Reveal>

        <RevealGroup className="mt-16 grid md:grid-cols-5 gap-6 md:gap-4">
          {PROCESS_STEPS.map((step) => (
            <RevealItem key={step.step}>
              <Card className="p-6 h-full">
                <div className="text-sm font-semibold text-accent">{step.step}</div>
                <div className="font-display text-lg font-semibold mt-3 leading-tight">{step.label}</div>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">{step.detail}</p>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* NETWORK */}
      <Section>
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>Global Network</Eyebrow>
            <h2 className="font-display mt-3 text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-display-lg">
              Three offices. One supply line.
            </h2>
            <p className="mt-4 text-ink-muted leading-relaxed">
              From the factory floor in Fujian to the build site in New Zealand — one coordinated
              network, not a chain of handoffs.
            </p>
          </div>
        </Reveal>

        <RevealGroup className="mt-16 grid md:grid-cols-3 gap-6">
          {OFFICES.map((office) => (
            <RevealItem key={office.key}>
              <Card className="overflow-hidden h-full">
                <div className="relative h-48">
                  <img
                    src={office.photo}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold text-accent uppercase tracking-wide">{office.kicker}</div>
                  <div className="font-display text-xl font-semibold mt-2">{office.city}</div>
                  <div className="text-sm text-ink-muted mt-1">{office.label}</div>
                </div>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* CTA */}
      <Section className="pb-32">
        <Reveal>
          <Card className="p-12 md:p-20 text-center">
            <Eyebrow>Get Started</Eyebrow>
            <h2 className="font-display mt-3 text-[clamp(2.2rem,6vw,4rem)] font-semibold tracking-display-lg">
              Ready to move smarter?
            </h2>
            <p className="mt-4 max-w-lg mx-auto text-ink-muted leading-relaxed">
              Talk to our team about warehousing, tender support, compliance, or any part of your
              supply chain.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Button href="/contact">Speak with our team</Button>
              <Link href="/services" className="inline-flex items-center text-accent font-medium hover:underline underline-offset-4">
                Explore services ›
              </Link>
            </div>
          </Card>
        </Reveal>
      </Section>
    </>
  );
}
