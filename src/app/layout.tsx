import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "Hanes Distribution — Powering Projects",
    template: "%s — Hanes Distribution",
  },
  description:
    "Hanes Distribution moves construction materials from manufacturing origin in China and Hong Kong to your final site across New Zealand — 4PL, 3PL warehousing, ocean freight, devanning and nationwide delivery.",
  metadataBase: new URL("https://www.hanesdistribution.co.nz"),
  openGraph: {
    title: "Hanes Distribution — Powering Projects",
    description: "Sourcing, freight, warehousing and nationwide delivery for New Zealand construction projects.",
    siteName: "Hanes Distribution",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
