"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Pill } from "@/components/ui";

export function ShipHero() {
  return (
    <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-dark">
      <motion.img
        src="/images/journey-02-shenzhen.jpg"
        alt=""
        aria-hidden="true"
        initial={{ scale: 1.06, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-dark via-dark/55 to-dark/10"
        aria-hidden="true"
      />

      <div className="container-page relative pb-20 pt-48 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <Pill dark>Live across Christchurch · Hong Kong · Zhangzhou</Pill>
          <h1 className="font-display italic mt-6 text-[clamp(2.75rem,6.5vw,5.25rem)] font-normal leading-[1.05] tracking-display text-balance text-white">
            Supply chains,
            <br />
            refined.
          </h1>
          <p className="mt-6 max-w-md text-lg text-white/70 leading-relaxed">
            One partner from sourcing to site — coordinated warehousing and
            dependable delivery for New Zealand&apos;s builders.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-accent text-white px-6 py-3 text-[15px] font-medium hover:brightness-110 transition-all active:scale-[0.97]"
            >
              Talk to our team
            </Link>
            <Link
              href="/brands"
              className="text-[15px] font-medium text-white/80 hover:text-white transition-colors underline underline-offset-4 decoration-white/30"
            >
              Explore our brands
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
