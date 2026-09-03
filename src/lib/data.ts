export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; blurb: string }[];
};

export const NAV: NavItem[] = [
  { label: "Overview", href: "/" },
  {
    label: "Brands",
    href: "/brands",
    children: [
      { label: "Our Brands", href: "/brands", blurb: "Five brands, one supply chain" },
      { label: "Bargain Hub", href: "/brands/bargain-hub", blurb: "Home essentials & retail" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Logistics & 4PL", href: "/services/logistics", blurb: "One partner, end to end" },
      { label: "Warehousing & 3PL", href: "/services/warehousing", blurb: "Hornby facility staging" },
      { label: "Ocean & Airfreight", href: "/services/freight", blurb: "Origin to Lyttelton" },
      { label: "Tender Support", href: "/services/tender", blurb: "Specification and pricing" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export type Brand = {
  slug: string;
  name: string;
  category: string;
  tags: string[];
  description: string;
  index: string;
  accent: string;
  image: string;
};

export const BRANDS: Brand[] = [
  {
    slug: "hanesteel",
    name: "Hanesteel",
    category: "Structural Steel",
    tags: ["RHS & SHS", "Angle Iron", "Purlins", "Bolts & Fixings"],
    description:
      "Precision-sourced structural steel built for New Zealand's construction demands — simplicity and strength in every section.",
    index: "01",
    accent: "#e0173a",
    image: "/images/brand-hanesteel.jpg",
  },
  {
    slug: "hanewood",
    name: "Hanewood",
    category: "Timber Solutions",
    tags: ["H3.2 Treated", "Structural", "Non-Structural"],
    description:
      "H3.2 treated, structural, and non-structural timber built to last in New Zealand conditions.",
    index: "02",
    accent: "#b5651d",
    image: "/images/brand-hanewood.jpg",
  },
  {
    slug: "hanesulation",
    name: "Hanesulation",
    category: "Insulation Systems",
    tags: ["Protection", "Comfort", "Efficiency"],
    description:
      "Insulating spaces and delivering value — Hanesulation protects homes with superior thermal performance.",
    index: "03",
    accent: "#0071e3",
    image: "/images/brand-hanesulation.jpg",
  },
  {
    slug: "hanestone",
    name: "Hanestone",
    category: "Stone & Masonry",
    tags: ["Simplicity", "Strength", "Foundation"],
    description:
      "Stone and masonry products engineered for a solid foundation, built to stand the test of time.",
    index: "04",
    accent: "#6e6e73",
    image: "/images/brand-hanestone.jpg",
  },
  {
    slug: "bargain-hub",
    name: "Bargain Hub",
    category: "Home Essentials & Retail",
    tags: ["Curated", "Practical", "Affordable", "Est. 2024"],
    description:
      "A home for quality everyday essentials — comfort, function, and style at prices that make sense.",
    index: "05",
    accent: "#1c8a4b",
    image: "/images/brand-bargainhub.jpg",
  },
];

export const OFFICES = [
  {
    key: "zhangzhou",
    kicker: "Origin · Manufacturing",
    city: "Zhangzhou",
    label: "China Branch · Fujian",
    address: "301/13 Huayuan, Yan'an Square, Zhangzhou, Fujian, China",
    coords: "24.5130° N, 117.6470° E",
    photo: "/images/journey-01-manufacturing.jpg",
  },
  {
    key: "hongkong",
    kicker: "Hub · Freight & Trade",
    city: "Hong Kong",
    label: "Asia Branch",
    address: "Suite C / Level 7 & 19, World Trust Tower, 50 Stanley Street, Central, Hong Kong SAR",
    coords: "22.3193° N, 114.1694° E",
    photo: "/images/journey-02-shenzhen.jpg",
  },
  {
    key: "christchurch",
    kicker: "Destination · Delivery",
    city: "Christchurch",
    label: "Head Office · New Zealand",
    address: "93 Main South Road, Hornby, Christchurch. Warehouse: 44 Anchorage Road, Hornby — 20 min from the Port of Lyttelton.",
    coords: "43.5321° S, 172.6362° E",
    photo: "/images/warehouse-racking.jpg",
  },
];

export const PROCESS_STEPS = [
  { step: "01", label: "Manufacturing", detail: "Certified facility, QC inspected before loading." },
  { step: "02", label: "Port of Shenzhen", detail: "Containerised and loaded for ocean freight to New Zealand." },
  { step: "03", label: "Port of Lyttelton", detail: "Container devanned, NZ customs cleared, palletised for dispatch." },
  { step: "04", label: "Hornby Warehouse", detail: "Staged and coordinated, ready for phased site dispatch." },
  { step: "05", label: "Site Delivery", detail: "Coordinated nationwide delivery direct to the project site." },
];

export const SERVICES = [
  {
    slug: "logistics",
    name: "Logistics & 4PL",
    kicker: "4PL",
    summary: "Full supply chain management from manufacturer to site — freight forwarding, customs, warehousing, and staged delivery coordinated under one relationship.",
    points: [
      "Single point of contact across carriers, forwarders, customs and last-mile delivery",
      "No handoffs between suppliers — one accountable relationship",
      "Coordinated scheduling against your build programme",
    ],
  },
  {
    slug: "warehousing",
    name: "Warehousing & 3PL",
    kicker: "3PL",
    summary: "Secure storage, project staging, and coordinated dispatch from our Hornby facility — hold, organise, and release materials to site in the right order, at the right time.",
    points: [
      "Inbound receiving, inspection and damage checks against packing lists",
      "Cycle counting, stock reconciliation and project allocation",
      "Phased release matched to site progress and programme changes",
    ],
  },
  {
    slug: "freight",
    name: "Ocean & Airfreight",
    kicker: "Freight",
    summary: "Freight coordinated across the carriers moving the world's cargo — Maersk, MSC, CMA CGM and COSCO — with 22–28 day Asia to NZ ocean transit and airfreight for time-critical loads.",
    points: [
      "Ocean freight for bulk and containerised construction materials",
      "Airfreight for urgent or time-critical shipments",
      "Route and carrier selection based on live transit conditions",
    ],
  },
  {
    slug: "tender",
    name: "Tender Support",
    kicker: "Procurement",
    summary: "Supply layout, product direction, and material requirements for stronger tender packages — specification, pricing, and documentation support for builders and developers.",
    points: [
      "Material specification aligned to NZBC and AS/NZS standards",
      "Indicative pricing and lead-time guidance for tender submissions",
      "Documentation support through to award",
    ],
  },
];

export const CERTIFICATIONS = [
  "CodeMark", "BRANZ", "JAS-ANZ", "BenchMark", "SAI Global", "ISO 9001", "NZ Building Code", "AS/NZS Standards",
];

export const CARRIERS = ["Maersk", "MSC", "CMA CGM", "COSCO", "Hapag-Lloyd", "Evergreen"];

export const STATS = [
  { value: "99%", label: "Inventory accuracy" },
  { value: "98%", label: "On-time dispatch" },
  { value: "22–28d", label: "Asia to NZ transit" },
  { value: "3", label: "Global offices" },
];
