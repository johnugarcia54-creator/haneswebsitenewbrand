import Link from "next/link";
import type { ReactNode } from "react";
import clsx from "clsx";

export function Eyebrow({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={clsx(
        "text-sm font-semibold tracking-tight",
        dark ? "text-on-dark-muted" : "text-ink-muted"
      )}
    >
      {children}
    </span>
  );
}

export function Section({
  children,
  className,
  id,
  dark = false,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={clsx("py-24 md:py-36", dark ? "bg-dark text-on-dark" : "bg-canvas text-ink", className)}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

export function Button({
  href,
  children,
  variant = "solid",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost" | "link";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center justify-center gap-1.5 transition-all duration-200 active:scale-[0.97]",
        variant === "solid" &&
          "px-6 py-3 rounded-full bg-accent text-white text-[15px] font-medium hover:brightness-110",
        variant === "ghost" &&
          "px-6 py-3 rounded-full border border-ink/15 text-ink text-[15px] font-medium hover:bg-ink/5",
        variant === "link" && "text-accent text-[15px] font-medium hover:underline underline-offset-4 group",
        className
      )}
    >
      {children}
      {variant === "link" && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">›</span>
      )}
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  dark = false,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  dark?: boolean;
}) {
  return (
    <div className={clsx("pt-36 pb-20 md:pt-44 md:pb-28 text-center", dark ? "bg-dark text-on-dark" : "bg-canvas text-ink")}>
      <div className="container-page">
        <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
        <h1 className="font-display mt-3 text-[clamp(2.5rem,7vw,5rem)] font-semibold leading-[1.02] tracking-display-lg text-balance">
          {title}
        </h1>
        {lead && (
          <p
            className={clsx(
              "mt-6 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed",
              dark ? "text-on-dark-muted" : "text-ink-muted"
            )}
          >
            {lead}
          </p>
        )}
      </div>
    </div>
  );
}

export function Pill({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        dark ? "bg-white/10 text-on-dark" : "bg-ink/[0.06] text-ink"
      )}
    >
      {children}
    </span>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={clsx("rounded-[28px] bg-canvas-raised shadow-[0_1px_2px_rgba(0,0,0,0.04),0_16px_40px_-16px_rgba(0,0,0,0.12)]", className)}>
      {children}
    </div>
  );
}
