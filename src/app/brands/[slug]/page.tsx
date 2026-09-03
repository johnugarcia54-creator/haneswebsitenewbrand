import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Button, Card, Eyebrow, Pill, Section } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { BRANDS } from "@/lib/data";

export function generateStaticParams() {
  return BRANDS.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata(props: PageProps<"/brands/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const brand = BRANDS.find((b) => b.slug === slug);
  return { title: brand?.name ?? "Brand" };
}

export default async function BrandDetailPage(props: PageProps<"/brands/[slug]">) {
  const { slug } = await props.params;
  const brand = BRANDS.find((b) => b.slug === slug);
  if (!brand) notFound();

  return (
    <>
      <div className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-dark text-white">
        <img
          src={brand.image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" aria-hidden="true" />
        <div
          className="absolute inset-0 opacity-30 mix-blend-color"
          style={{ backgroundColor: brand.accent }}
          aria-hidden="true"
        />
        <div className="container-page relative text-center">
          <Reveal>
            <Pill dark>
              {brand.index} / 05 — {brand.category}
            </Pill>
            <h1 className="font-display mt-5 text-[clamp(3rem,9vw,6.5rem)] font-semibold tracking-display-lg leading-[0.98]">
              {brand.name}
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-white/75 text-lg leading-relaxed">{brand.description}</p>
          </Reveal>
        </div>
      </div>

      <Section>
        <div className="grid lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-7">
            <Eyebrow>Category Coverage</Eyebrow>
            <div className="mt-5 flex flex-wrap gap-3">
              {brand.tags.map((t) => (
                <span key={t} className="rounded-full bg-ink/[0.06] px-4 py-1.5 text-sm font-medium">
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-8 text-ink-muted leading-relaxed max-w-lg">
              Every {brand.name} product moves through the same coordinated supply chain as the
              rest of the Hanes Distribution Group — vetted at origin, quality-checked before
              loading, and staged through our Hornby warehouse for phased site delivery.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <Card className="p-8">
              <div className="font-display text-2xl font-semibold tracking-display">Sourcing {brand.name}?</div>
              <p className="mt-3 text-ink-muted leading-relaxed">
                Get indicative pricing, lead times, and compliance documentation for your project.
              </p>
              <div className="mt-6">
                <Button href="/contact" className="w-full">
                  Request a quote
                </Button>
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
