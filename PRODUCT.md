# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router, TypeScript) + Tailwind CSS + Framer Motion, matching the sibling project `hansewebsite`. Delegated: user asked for an Apple-styled variant using the same animation-heavy skill packs.

## Users

Same audience as the sibling site: New Zealand builders, developers, and commercial buyers evaluating a construction-materials sourcing/logistics partner, plus procurement/tender teams and retail buyers of the Bargain Hub brand.

## Product Purpose

This is an alternate, Apple-inspired visual exploration of the Hanes Distribution brand (repo: haneswebsitenewbrand) — same company, same underlying facts (from the sibling project's research), presented with Apple's product-page design language: light, spacious, huge confident typography, physical spring-based motion, and a "reveal one idea per screen" pacing instead of the industrial/tactical-telemetry dark theme used in `hansewebsite`.

## Positioning

Same positioning as the sibling project: single 4PL point of contact (sourcing, freight, customs, warehousing, delivery) backed by five specialist brands under one supply chain. What differs here is purely the visual and motion language, not the business facts.

## Operating Context

Identical to the sibling project: Christchurch (Hornby warehouse, near Port of Lyttelton), Hong Kong (sourcing/freight), Zhangzhou (manufacturing liaison). Same five-stage process: manufacturing -> Shenzhen -> Lyttelton -> Hornby warehouse -> site delivery.

## Capabilities and Constraints

Same service and brand catalogue as `hansewebsite` (4PL/logistics, warehousing, ocean/airfreight, FAK, tender support, customer service; five brands: Hanesteel, Hanewood, Hanesulation, Hanestone, Bargain Hub). This build prioritizes a flagship, highly-polished set of core pages (Home, Brands, Services, About, Contact) over replicating every deep resource subpage (tracking/portal/finance/insights/etc.) from the sibling site — those can be added later if wanted.

## Brand Commitments

Name stays "Hanes Distribution" / "HANES." wordmark. Visual identity for this variant intentionally departs from the established dark/red industrial theme: light "Apple product page" palette (near-white `#f5f5f7` canvas, near-black text, a single accent color), system-font typography stack (`-apple-system, BlinkMacSystemFont` first) for authentic platform-native rendering, generous whitespace, and glass/translucent chrome. Red accent (`#e0173a`) carried over as the one brand accent color so both sites still read as the same company.

## Evidence on Hand

Reuses the same real company facts gathered for the sibling project (offices, process, certifications, carriers, brand roster) — no new content was fabricated. See the sibling `hansewebsite` for the original site-content research.

## Product Principles

1. One idea, one screen — Apple's product-page pacing: scroll reveals a single message at a time, not a dashboard of everything at once.
2. Motion must feel physical — spring-based (critically damped by default, slight bounce only on momentum-driven interactions), never linear/fixed-duration for anything interactive.
3. Typography carries the hierarchy — huge, tightly-tracked display headlines; normal-tracked, roomy body text; weight and size do the work color would otherwise have to.
4. Translucent chrome over opaque bars — nav and floating surfaces use backdrop-blur, content scrolls underneath.
5. Respect `prefers-reduced-motion` everywhere motion is used for anything beyond a simple fade.

## Accessibility & Inclusion

Same as sibling project: WCAG AA contrast, full reduced-motion fallback (cross-fade instead of spring/parallax), keyboard navigation.
