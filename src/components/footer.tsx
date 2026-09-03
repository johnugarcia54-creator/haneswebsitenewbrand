import Link from "next/link";
import { NAV } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-canvas-dim">
      <div className="container-page py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5 pb-8 border-b border-line">
          {NAV.filter((item) => item.children).map((item) => (
            <div key={item.label}>
              <div className="text-[13px] font-semibold text-ink mb-3">{item.label}</div>
              <ul className="flex flex-col gap-2">
                {item.children!.map((child) => (
                  <li key={child.href}>
                    <Link href={child.href} className="text-[13px] text-ink-muted hover:text-ink hover:underline underline-offset-4">
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <div className="text-[13px] font-semibold text-ink mb-3">Contact</div>
            <a
              href="mailto:Enquiry@hanesdistribution.co.nz"
              className="text-[13px] text-ink-muted hover:text-ink hover:underline underline-offset-4"
            >
              Enquiry@hanesdistribution.co.nz
            </a>
          </div>
        </div>
        <div className="pt-6 flex flex-col md:flex-row gap-3 justify-between items-center">
          <p className="text-xs text-ink-faint">
            © {new Date().getFullYear()} Hanes Distribution Limited. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Facebook", "LinkedIn", "Instagram"].map((s) => (
              <span key={s} className="text-xs text-ink-faint">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
