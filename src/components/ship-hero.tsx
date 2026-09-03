"use client";

import { useMemo, useRef } from "react";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { Pill } from "@/components/ui";

const STAGES = [
  {
    image: "/images/journey-01-manufacturing.jpg",
    kicker: "Origin — China",
    title: "Vetted at the source.",
    detail: "Every factory independently checked before a single order is placed.",
  },
  {
    image: "/images/journey-02-shenzhen.jpg",
    kicker: "Ocean Freight",
    title: "22–28 days at sea.",
    detail: "Containerised and tracked from the Port of Shenzhen to New Zealand.",
  },
  {
    image: "/images/warehouse-yard.jpg",
    kicker: "Port of Lyttelton",
    title: "Cleared and devanned.",
    detail: "Real Hornby yard — containers received, customs cleared, staged for transport.",
  },
  {
    image: "/images/warehouse-racking.jpg",
    kicker: "Hornby Warehouse",
    title: "Staged, not stacked.",
    detail: "Our actual Hornby facility — held and organised until your site is ready.",
  },
  {
    image: "/images/journey-05-site-delivery.jpg",
    kicker: "Site Delivery",
    title: "Straight to the build.",
    detail: "Coordinated nationwide delivery, timed to your project's programme.",
  },
] as const;

const STAGE_COUNT = STAGES.length;

export function ShipHero() {
  const ref = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const introOpacity = useTransform(scrollYProgress, [0, 0.04], [1, 0]);
  const introY = useTransform(scrollYProgress, [0, 0.06], [0, -40]);

  const bounds = useMemo(() => {
    // stage i owns roughly [i/N, (i+1)/N] of progress, with soft cross-fade edges
    const step = 1 / STAGE_COUNT;
    const fade = step * 0.35;
    return STAGES.map((_, i) => ({
      inStart: Math.max(0, i * step - fade),
      inEnd: i * step + fade,
      outStart: (i + 1) * step - fade,
      outEnd: Math.min(1, (i + 1) * step + fade),
    }));
  }, []);

  function opacityFor(i: number, v: number) {
    if (i === 0 && v <= bounds[0].inEnd) return 1;
    const b = bounds[i];
    if (v < b.inStart) return 0;
    if (v < b.inEnd) return (v - b.inStart) / (b.inEnd - b.inStart);
    if (v < b.outStart) return 1;
    if (v < b.outEnd) return 1 - (v - b.outStart) / (b.outEnd - b.outStart);
    return 0;
  }

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    STAGES.forEach((_, i) => {
      const o = opacityFor(i, v);
      const img = imageRefs.current[i];
      const text = textRefs.current[i];
      const dot = dotRefs.current[i];
      if (img) img.style.opacity = String(o);
      if (text) text.style.opacity = String(o);
      if (dot) dot.style.opacity = o > 0.4 ? "1" : "0.3";
      if (dot) dot.style.width = o > 0.4 ? "24px" : "6px";
    });
  });

  return (
    <div ref={ref} className="relative" style={{ height: `${STAGE_COUNT * 140}vh` }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        {STAGES.map((stage, i) => (
          <img
            key={stage.image}
            ref={(el) => {
              imageRefs.current[i] = el;
            }}
            src={stage.image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ opacity: i === 0 ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50" aria-hidden="true" />

        <motion.div
          style={{ opacity: introOpacity, y: introY }}
          className="relative h-full flex flex-col items-center justify-center text-center px-6"
        >
          <Pill dark>Live across Christchurch · Hong Kong · Zhangzhou</Pill>
          <h1 className="font-display mt-6 text-[clamp(3rem,9vw,7.5rem)] font-semibold leading-[0.98] tracking-display-lg text-balance text-white">
            Supply chains.
            <br />
            <span className="text-accent">Made effortless.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-white/75 leading-relaxed">
            One partner from sourcing to site — smarter procurement, coordinated warehousing,
            and dependable delivery for New Zealand&apos;s builders.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-accent text-white px-6 py-3 text-[15px] font-medium hover:brightness-110 transition-all active:scale-[0.97]"
            >
              Talk to our team
            </Link>
            <Link
              href="/brands"
              className="inline-flex items-center justify-center rounded-full border border-white/30 text-white px-6 py-3 text-[15px] font-medium hover:bg-white/10 transition-all active:scale-[0.97]"
            >
              Explore our brands
            </Link>
          </div>
        </motion.div>

        {STAGES.map((stage, i) => (
          <div
            key={stage.image}
            ref={(el) => {
              textRefs.current[i] = el;
            }}
            className="absolute inset-x-0 bottom-20 flex flex-col items-center text-center px-6 pointer-events-none"
            style={{ opacity: 0 }}
          >
            <div className="flex items-center gap-2 text-white/70 text-sm font-medium">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34c759] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#34c759]" />
              </span>
              {stage.kicker}
            </div>
            <div className="font-display mt-3 text-3xl md:text-5xl font-semibold text-white tracking-display-lg">
              {stage.title}
            </div>
            <p className="mt-3 max-w-md text-white/70">{stage.detail}</p>
          </div>
        ))}

        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2">
          {STAGES.map((stage, i) => (
            <span
              key={stage.image}
              ref={(el) => {
                dotRefs.current[i] = el;
              }}
              className="block h-1.5 rounded-full bg-white transition-[width] duration-300"
              style={{ width: i === 0 ? "24px" : "6px", opacity: i === 0 ? 1 : 0.3 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
