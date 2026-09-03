"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { BRANDS, type Brand } from "@/lib/data";

function StackCard({ brand, index }: { brand: Brand; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0.6, 1], [1, 0.6]);
  const isLast = index === BRANDS.length - 1;

  return (
    <div ref={ref} className={isLast ? "" : "sticky top-14"}>
      <motion.div
        style={{ scale, opacity, backgroundColor: "#0b0b0d" }}
        className="h-[calc(100vh-3.5rem)] rounded-[32px] overflow-hidden relative flex items-end mb-6 origin-top"
      >
        <img
          src={`https://picsum.photos/seed/hnb-brand-${brand.slug}/1600/1200`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" aria-hidden="true" />
        <div
          className="absolute inset-0 opacity-30 mix-blend-color"
          style={{ backgroundColor: brand.accent }}
          aria-hidden="true"
        />
        <div className="relative p-8 md:p-14 w-full text-white">
          <div className="flex items-center gap-3 text-sm font-medium text-white/70">
            <span>{brand.index} / 05</span>
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span>{brand.category}</span>
          </div>
          <h3 className="font-display mt-3 text-[clamp(2.2rem,6vw,4.5rem)] font-semibold leading-[1.02] tracking-display-lg">
            {brand.name}
          </h3>
          <p className="mt-4 max-w-xl text-white/75 text-base md:text-lg leading-relaxed">{brand.description}</p>
          <div className="mt-6 flex flex-wrap gap-4 items-center">
            <Link
              href={`/brands/${brand.slug}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-white text-black px-5 py-2.5 text-[15px] font-medium transition-transform active:scale-[0.97] hover:brightness-95"
            >
              Learn more
            </Link>
            {brand.tags.slice(0, 3).map((t) => (
              <span key={t} className="text-sm text-white/60">
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function BrandStack() {
  return (
    <div className="container-page pt-6">
      {BRANDS.map((brand, i) => (
        <StackCard key={brand.slug} brand={brand} index={i} />
      ))}
    </div>
  );
}
