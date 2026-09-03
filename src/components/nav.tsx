"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV } from "@/lib/data";
import clsx from "clsx";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setOpen(null);
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 glass">
      <div className="container-page flex items-center justify-between h-14">
        <Link href="/" className="font-display font-semibold tracking-display text-[17px]">
          Hanes<span className="text-accent">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" onMouseLeave={() => setOpen(null)}>
          {NAV.map((item) => (
            <div key={item.label} className="relative" onMouseEnter={() => setOpen(item.label)}>
              <Link
                href={item.href}
                className={clsx(
                  "text-[13px] font-medium transition-colors",
                  pathname === item.href ? "text-ink" : "text-ink-muted hover:text-ink"
                )}
              >
                {item.label}
              </Link>
              <AnimatePresence>
                {open === item.label && item.children && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ type: "spring", bounce: 0, duration: 0.35 }}
                    style={{ transformOrigin: "top center" }}
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-64"
                  >
                    <div className="glass rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] border-b-0">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-3 hover:bg-black/[0.03] transition-colors"
                        >
                          <div className="text-[13px] font-medium">{child.label}</div>
                          <div className="text-xs text-ink-faint mt-0.5">{child.blurb}</div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden md:inline-flex text-[13px] font-medium text-accent hover:underline underline-offset-4">
            Talk to us
          </Link>
          <button aria-label="Toggle menu" className="md:hidden p-2 -mr-2" onClick={() => setMobileOpen((v) => !v)}>
            <div className="w-5 flex flex-col gap-[5px]">
              <motion.span
                animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 5.5 : 0 }}
                transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
                className="h-[1.5px] bg-ink origin-center"
              />
              <motion.span
                animate={{ opacity: mobileOpen ? 0 : 1 }}
                transition={{ duration: 0.2 }}
                className="h-[1.5px] bg-ink"
              />
              <motion.span
                animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -5.5 : 0 }}
                transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
                className="h-[1.5px] bg-ink origin-center"
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="md:hidden glass overflow-hidden"
          >
            <div className="container-page py-4">
              {NAV.map((item) => (
                <div key={item.label} className="py-3 border-b border-line last:border-b-0">
                  <Link href={item.href} className="text-[17px] font-medium">
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="mt-2 flex flex-col gap-2 pl-3">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} className="text-sm text-ink-muted">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
