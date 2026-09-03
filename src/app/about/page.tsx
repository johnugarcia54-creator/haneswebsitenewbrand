import type { Metadata } from "next";
import { Card, Eyebrow, PageHero, Section } from "@/components/ui";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { OFFICES } from "@/lib/data";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Hanes Distribution"
        title="The engine behind the brand"
        lead="We are a New Zealand 4PL and supply chain partner moving construction materials from manufacturing origin in China and Hong Kong to your final site."
      />

      <Section className="pt-0">
        <div className="grid lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-6">
            <Eyebrow>Positioning</Eyebrow>
            <p className="mt-5 text-ink-muted leading-relaxed">
              Most builders juggle a supplier, a freight forwarder, a customs broker, and a
              warehouse — four relationships, four sets of handoffs. We operate as a single 4PL
              partner across all of it: sourcing, freight, customs, warehousing, and last-mile
              delivery under one accountable relationship.
            </p>
            <p className="mt-4 text-ink-muted leading-relaxed">
              Every product we supply is manufactured through a structured quality process — from
              factory selection and design engineering through to independent testing and
              compliance documentation.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6">
            <Eyebrow>What This Means On Site</Eyebrow>
            <ul className="mt-5 flex flex-col gap-4">
              {[
                "Factory vetting and approval before a single order is placed",
                "NZ engineering design against NZBC clauses B1, E2, H1 and AS/NZS standards",
                "Independent testing and certification lodged with BRANZ, CodeMark or BenchMark",
                "Pre-shipment quality control on every container before it leaves the factory",
              ].map((item, i) => (
                <li key={i} className="flex gap-4 border-t border-line pt-4">
                  <span className="text-sm font-semibold text-ink-faint pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-ink-muted leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>Global Network</Eyebrow>
            <h2 className="font-display mt-3 text-[clamp(2rem,4.5vw,3.5rem)] font-semibold tracking-display-lg">
              One team, three time zones
            </h2>
          </div>
        </Reveal>
        <RevealGroup className="mt-14 grid md:grid-cols-3 gap-6">
          {OFFICES.map((office) => (
            <RevealItem key={office.key}>
              <Card className="overflow-hidden h-full">
                <div className="relative h-48">
                  <img
                    src={`https://picsum.photos/seed/${office.photo}/500/360`}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold text-accent uppercase tracking-wide">{office.kicker}</div>
                  <div className="font-display text-xl font-semibold mt-2">{office.city}</div>
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed">{office.address}</p>
                </div>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>
    </>
  );
}
