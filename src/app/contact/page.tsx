import type { Metadata } from "next";
import { Eyebrow, PageHero, Section } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { OFFICES } from "@/lib/data";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Send us your project details"
        lead="Warehousing, project staging, tender support, compliance, or any part of your supply chain — tell us what you need."
      />
      <Section className="pt-0">
        <div className="grid lg:grid-cols-12 gap-14">
          <Reveal className="lg:col-span-6">
            <ContactForm />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6">
            <Eyebrow>Our Offices</Eyebrow>
            <div className="mt-5 flex flex-col">
              {OFFICES.map((o) => (
                <div key={o.key} className="border-t border-line py-5 last:border-b">
                  <div className="text-xs font-semibold text-accent uppercase tracking-wide">{o.kicker}</div>
                  <div className="font-display text-lg font-semibold mt-1.5">{o.city}</div>
                  <div className="text-sm text-ink-muted mt-0.5">{o.label}</div>
                  <p className="mt-1.5 text-sm text-ink-faint leading-relaxed">{o.address}</p>
                </div>
              ))}
            </div>
            <a
              href="mailto:Enquiry@hanesdistribution.co.nz"
              className="mt-6 inline-block text-accent font-medium hover:underline underline-offset-4"
            >
              Enquiry@hanesdistribution.co.nz
            </a>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
