import Link from "next/link";
import type { Metadata } from "next";
import { Card, PageHero, Section } from "@/components/ui";
import { RevealGroup, RevealItem } from "@/components/reveal";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="One partner. Every stage."
        lead="From origin sourcing through to site delivery, each service is built to remove a handoff — not add one."
      />
      <Section className="pt-0">
        <RevealGroup className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((s) => (
            <RevealItem key={s.slug}>
              <Link href={`/services/${s.slug}`}>
                <Card className="p-8 h-full group hover:shadow-[0_1px_2px_rgba(0,0,0,0.04),0_24px_48px_-16px_rgba(0,0,0,0.18)] transition-shadow duration-300">
                  <div className="text-sm font-semibold text-accent">{s.kicker}</div>
                  <div className="font-display text-2xl font-semibold tracking-display mt-2">{s.name}</div>
                  <p className="mt-3 text-ink-muted leading-relaxed">{s.summary}</p>
                  <div className="mt-5 inline-flex items-center gap-1 text-[15px] font-medium text-accent">
                    Learn more
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">›</span>
                  </div>
                </Card>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>
    </>
  );
}
