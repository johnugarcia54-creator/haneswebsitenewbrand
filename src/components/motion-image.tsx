"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ParallaxImage({ src, className }: { src: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["-14%", "14%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.3, 1.18, 1.3]);

  return (
    <div ref={ref} className={className}>
      <motion.img
        src={src}
        alt=""
        aria-hidden="true"
        style={{ x, scale }}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}

export function ScanlineImage({ src, className }: { src: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const sweepX = useTransform(scrollYProgress, [0, 1], ["-120%", "220%"]);

  return (
    <div ref={ref} className={className}>
      <img src={src} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
      <motion.div
        aria-hidden="true"
        className="absolute inset-y-0 w-1/3 pointer-events-none"
        style={{
          x: sweepX,
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)",
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
}

export function LiveFeed({
  image,
  label,
  eta,
  mode,
}: {
  image: string;
  label: string;
  eta: string;
  mode: "parallax" | "scan";
}) {
  return (
    <div className="relative rounded-[24px] overflow-hidden bg-canvas-raised shadow-[0_1px_2px_rgba(0,0,0,0.04),0_16px_40px_-16px_rgba(0,0,0,0.14)]">
      <div className="relative h-40 md:h-48 overflow-hidden">
        {mode === "parallax" ? (
          <ParallaxImage src={image} className="absolute inset-0 overflow-hidden" />
        ) : (
          <ScanlineImage src={image} className="absolute inset-0 overflow-hidden" />
        )}
      </div>
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34c759] opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#34c759]" />
          </span>
          <span className="text-[13px] font-medium text-ink">{label}</span>
        </div>
        <span className="text-xs text-ink-faint">{eta}</span>
      </div>
    </div>
  );
}
