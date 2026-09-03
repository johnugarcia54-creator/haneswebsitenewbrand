import Link from "next/link";
import type { Metadata } from "next";
import { Card, PageHero, Section } from "@/components/ui";
import { RevealGroup, RevealItem } from "@/components/reveal";
import { BRANDS } from "@/lib/data";

export const metadata: Metadata = { title: "Our Brands" };

export default function BrandsPage() {
  return (
    <>
      <PageHero
        eyebrow="Hanes Distribution Group"
        title="Five brands. One supply chain."
        lead="Under the Hanes Distribution umbrella, five specialist brands deliver the full spectrum of construction materials and home essentials — each purpose-built for its category, unified by one supply chain."
      />
      <Section className="pt-0">
        <RevealGroup className="grid md:grid-cols-2 gap-6">
          {BRANDS.map((brand) => (
            <RevealItem key={brand.slug}>
              <Link href={`/brands/${brand.slug}`}>
                <Card className="overflow-hidden group h-full">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={brand.image}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 opacity-25 mix-blend-color"
                      style={{ backgroundColor: brand.accent }}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="p-7">
                    <div className="text-sm font-medium text-ink-faint">
                      {brand.index} / 05 — {brand.category}
                    </div>
                    <div className="font-display text-2xl font-semibold tracking-display mt-2">{brand.name}</div>
                    <p className="mt-2 text-ink-muted leading-relaxed">{brand.description}</p>
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
