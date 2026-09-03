"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { Pill } from "@/components/ui";

export function ShipHero() {
  const ref = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const imageScale = useTransform(scrollYProgress, [0, 0.6, 1], [1.45, 1.05, 1.15]);
  const imageX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 0.22], [0, -60]);
  const captionY = useTransform(scrollYProgress, [0.55, 0.75], [40, 0]);

  // Opacity + filter driven imperatively — this framer-motion build does not
  // reliably re-apply `opacity`/`filter` written via the declarative `style`
  // prop when sourced from a scroll-linked MotionValue (verified with
  // Playwright: transform updates on scroll, opacity never leaves its
  // initial value). Setting it directly on the node sidesteps that.
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const overlayOpacity = 0.72 - Math.min(v, 0.35) / 0.35 * 0.54;
    const gray = v >= 0.5 ? 0 : 1 - v / 0.5;
    const textOpacity = v >= 0.22 ? 0 : 1 - v / 0.22;
    let captionOpacity = 0;
    if (v >= 0.95) captionOpacity = 1;
    else if (v >= 0.75) captionOpacity = 1;
    else if (v >= 0.55) captionOpacity = (v - 0.55) / 0.2;

    if (imageRef.current) imageRef.current.style.filter = `grayscale(${gray})`;
    if (overlayRef.current) overlayRef.current.style.opacity = String(overlayOpacity);
    if (textRef.current) textRef.current.style.opacity = String(textOpacity);
    if (captionRef.current) captionRef.current.style.opacity = String(captionOpacity);
  });

  useEffect(() => {
    // Apply initial values on mount (v=0 case), matching the logic above.
    if (imageRef.current) imageRef.current.style.filter = "grayscale(1)";
    if (overlayRef.current) overlayRef.current.style.opacity = "0.72";
    if (textRef.current) textRef.current.style.opacity = "1";
    if (captionRef.current) captionRef.current.style.opacity = "0";
  }, []);

  return (
    <div ref={ref} className="relative h-[260vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.img
          ref={imageRef}
          src="/images/journey-02-shenzhen.jpg"
          alt=""
          aria-hidden="true"
          style={{ scale: imageScale, x: imageX }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div ref={overlayRef} className="absolute inset-0 bg-black" aria-hidden="true" />

        <motion.div
          ref={textRef}
          style={{ y: textY }}
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

        <motion.div
          ref={captionRef}
          style={{ y: captionY }}
          className="absolute inset-x-0 bottom-16 flex flex-col items-center text-center px-6"
        >
          <div className="flex items-center gap-2 text-white/70 text-sm font-medium">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34c759] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#34c759]" />
            </span>
            Ocean Freight — Shenzhen to Lyttelton
          </div>
          <div className="font-display mt-3 text-3xl md:text-5xl font-semibold text-white tracking-display-lg">
            22–28 days.
            <br />
            One coordinated crossing.
          </div>
        </motion.div>
      </div>
    </div>
  );
}
