export type ProjectType = "store" | "booking" | "marketplace" | "company" | "automation";

export type FeatureId =
  | "bilingual"
  | "payments"
  | "booking"
  | "dashboard"
  | "whatsapp"
  | "catalog"
  | "multivendor"
  | "seo"
  | "motion"
  | "automation";

export interface Project {
  slug: string;
  name: string;
  client: string;
  sector: string;
  type: ProjectType;
  year: string;
  /** Live site; omitted for private tools like bots */
  url?: string;
  /** "site" shows a browser screenshot; "chat" shows the before/after Telegram mockup */
  visual: "site" | "chat";
  image: string;
  thumb: string;
  tagline: string;
  summary: string;
  challenge: string;
  approach: string;
  built: string[];
  stack: string[];
  languages: string[];
  features: FeatureId[];
  /** Background tint behind the screenshot, picked from the project's own palette */
  tint: string;
  /** Kept out of the public site until the project is polished enough to show */
  hidden?: boolean;
}

const allProjects: Project[] = [
  {
    slug: "royal-perfumes",
    name: "Royal Perfumes",
    client: "Royal Perfumes, Istanbul",
    sector: "Luxury e-commerce",
    type: "store",
    year: "2026",
    visual: "site",
    url: "https://www.royalperfumes.company/",
    image: "/work/royal.webp",
    thumb: "/work/royal-sm.webp",
    tagline: "A wholesale fragrance house, presented like a luxury boutique.",
    summary:
      "Online storefront for an Istanbul fragrance manufacturer selling designer and niche perfumes to wholesale buyers worldwide.",
    challenge:
      "Wholesale buyers need volume pricing, trial orders and fast contact, but the brand still had to feel premium enough to sit next to Creed, Dior and Amouage.",
    approach:
      "A restrained black-and-gold interface with editorial typography, a full catalogue split by collection and gender, tiered volume discounts, and one-tap WhatsApp and Telegram ordering for buyers who prefer to talk.",
    built: [
      "Product catalogue with collections, categories and brand carousel",
      "Tiered wholesale pricing (50 / 100 / 300 / 500+ pieces)",
      "Cart, wishlist and search",
      "WhatsApp, Telegram and Instagram ordering channels",
      "Blog, shipping and policy pages for trust and SEO",
    ],
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion"],
    languages: ["English"],
    features: ["catalog", "whatsapp", "seo"],
    tint: "#14110b",
  },
  {
    slug: "cangday",
    name: "Cangday",
    client: "Cangday Modern Perfumery",
    sector: "Perfume e-commerce",
    type: "store",
    year: "2026",
    visual: "site",
    url: "https://cangdayperfume.com/",
    image: "/work/cangday.webp",
    thumb: "/work/cangday-sm.webp",
    tagline: "A modern perfumery store with the warmth of a boutique counter.",
    summary:
      "Bilingual Turkish/English online store for a perfumery selling designer and niche fragrances, body care and gift boxes.",
    challenge:
      "Sell premium niche and designer fragrances online in Turkey, where customers want to feel the luxury but also need clear offers, fast delivery and easy returns before they buy.",
    approach:
      "A warm, editorial storefront with cinematic hero campaigns, shopping by audience and brand, and the store's offers (free shipping, gifts over ₺5,000, Buy 2 Get 1, 14-day returns) shown right where buyers decide.",
    built: [
      "Turkish and English storefront with a language switch",
      "Shop by audience, category and brand",
      "Cart, favourites and discount codes at checkout",
      "Promotions: free shipping, free gift threshold, Buy 2 Get 1",
      "Journal (blog), newsletter and customer reviews",
    ],
    stack: [],
    languages: ["Turkish", "English"],
    features: ["catalog", "payments", "bilingual", "seo"],
    tint: "#2a1416",
  },
  {
    slug: "shopydash",
    name: "ShopyDash",
    client: "ShopyDash",
    sector: "Local marketplace",
    type: "marketplace",
    year: "2026",
    visual: "site",
    url: "https://www.shopydash.store/",
    image: "/work/shopydash.webp",
    thumb: "/work/shopydash-sm.webp",
    tagline: "Every shop in the neighbourhood, in one Arabic-first app.",
    summary:
      "A multi-vendor marketplace where local stores (bakeries, restaurants, electronics and more) list products and customers order for fast local delivery.",
    challenge:
      "Bring many independent shops onto one platform, each with its own products and orders, while keeping the shopping experience simple for Arabic-speaking customers.",
    approach:
      "A right-to-left interface built around browsing stores by type, a shared cart, customer accounts, map-based store locations and dashboards that let each shop manage its own catalogue.",
    built: [
      "Multi-vendor store directory, browsable by category",
      "Product listings, cart and customer accounts",
      "Store dashboards with sales charts",
      "Map-based store locations",
      "Full RTL Arabic interface",
    ],
    stack: ["React", "Vite", "Supabase", "TanStack Query", "Tailwind CSS", "Leaflet"],
    languages: ["Arabic"],
    features: ["multivendor", "catalog", "dashboard", "bilingual"],
    tint: "#0d1714",
    hidden: true,
  },
  {
    slug: "muhtesem-telegram",
    name: "Mühteşem",
    client: "Mühteşem clothing",
    sector: "Fashion · Telegram automation",
    type: "automation",
    year: "2026",
    visual: "chat",
    image: "/work/muhtesem-logo.webp",
    thumb: "/work/muhtesem-sm.webp",
    tagline: "Supplier posts in, branded product posts out, without copy-pasting.",
    summary:
      "A Telegram automation for a clothing brand that collects new products from supplier channels, rebrands them and publishes them to the brand's own channel after a quick review.",
    challenge:
      "The brand resells from several suppliers who post new pieces on Telegram all day. Reposting by hand meant deleting each supplier's phone numbers and links, rewriting the caption, recalculating the price, and doing it fast enough not to miss new stock.",
    approach:
      "A worker watches up to five supplier channels. Each post is cleaned of supplier contacts, its product code, sizes, series and price are read even when every supplier writes them differently, the brand's markup is added, and a branded Turkish caption with the brand's WhatsApp order link is generated. The owner approves, edits or rejects each one in a private dashboard before it goes live.",
    built: [
      "Watches 1–5 supplier channels, including photo albums",
      "Strips supplier phone numbers, links and WhatsApp contacts",
      "Reads product code, sizes, series and price from free-form text",
      "Adds a configurable price markup automatically",
      "Branded Turkish caption with a WhatsApp order link",
      "Password-protected review dashboard: approve, edit or reject",
      "Safe publishing: queue locking, retries and Telegram rate-limit handling",
    ],
    stack: ["Node.js", "Python", "Telegram API", "Next.js", "PostgreSQL", "Docker"],
    languages: ["Turkish"],
    features: ["automation", "dashboard", "whatsapp"],
    tint: "#2b1631",
  },
  {
    slug: "prestige-fly",
    name: "Prestige Fly",
    client: "Prestige Fly",
    sector: "Travel & education",
    type: "company",
    year: "2025",
    visual: "site",
    url: "https://prestige-fly-yxnm.vercel.app/",
    image: "/work/prestige.webp",
    thumb: "/work/prestige-sm.webp",
    tagline: "Study abroad, work abroad and premium travel, under one roof.",
    summary:
      "Marketing site for an agency that helps clients study overseas, find international work and plan premium trips.",
    challenge:
      "Three very different services had to read as one trustworthy brand, and every page needed to push visitors toward booking a consultation.",
    approach:
      "A cinematic hero, clear service paths, an interactive destinations map and a multi-step consultation form, with multiple languages and motion that stays smooth on mobile.",
    built: [
      "Service pages for study, work and travel",
      "Interactive world map of destinations",
      "Multi-step consultation booking form",
      "Language switcher",
      "Scroll animations tuned for mobile performance",
    ],
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "GSAP", "Three.js", "Framer Motion"],
    languages: ["English", "French"],
    features: ["bilingual", "booking", "motion", "seo"],
    tint: "#0f1622",
    hidden: true,
  },
  {
    slug: "dr-alaa-clinic",
    name: "Dr. Alaa Clinic",
    client: "Dr. Alaa Ayman Dental Clinic",
    sector: "Healthcare",
    type: "booking",
    year: "2026",
    visual: "site",
    url: "https://dr-alaa.vercel.app/",
    image: "/work/dralaa.webp",
    thumb: "/work/dralaa-sm.webp",
    tagline: "A dental clinic site that turns visitors into booked appointments.",
    summary:
      "Arabic website for a cosmetic dentistry clinic offering veneers, implants and smile design.",
    challenge:
      "Patients decide with their eyes. The clinic needed a site that shows results, explains treatments simply and makes booking take seconds.",
    approach:
      "A soft, confident Arabic layout with a before/after gallery, treatment pages, an appointment form and a floating WhatsApp button so patients can ask questions straight away.",
    built: [
      "Treatment pages (veneers, implants, smile design)",
      "Before/after results gallery",
      "Appointment booking form",
      "Floating WhatsApp contact",
      "RTL Arabic layout, fully responsive",
    ],
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "React Hook Form"],
    languages: ["Arabic"],
    features: ["booking", "whatsapp", "seo", "bilingual"],
    tint: "#18141a",
    hidden: true,
  },
];

export const projects = allProjects.filter((p) => !p.hidden);

export const projectTypes: { id: ProjectType; label: string; blurb: string }[] = [
  {
    id: "store",
    label: "Online store",
    blurb: "Sell products online, with cart, checkout and a catalogue you control.",
  },
  {
    id: "booking",
    label: "Clinic or booking site",
    blurb: "Let clients book appointments, see your work and reach you fast.",
  },
  {
    id: "marketplace",
    label: "Marketplace or platform",
    blurb: "Many sellers, many customers, accounts and dashboards.",
  },
  {
    id: "company",
    label: "Company or services site",
    blurb: "Present your business and turn visitors into leads.",
  },
  {
    id: "automation",
    label: "Automation or bot",
    blurb: "Telegram and WhatsApp bots, auto-posting and workflows that save hours.",
  },
];

export const features: { id: FeatureId; label: string }[] = [
  { id: "bilingual", label: "Arabic (RTL) & multilingual" },
  { id: "payments", label: "Online payments" },
  { id: "booking", label: "Bookings & appointments" },
  { id: "dashboard", label: "Admin dashboard" },
  { id: "whatsapp", label: "WhatsApp ordering" },
  { id: "catalog", label: "Product catalogue" },
  { id: "multivendor", label: "Multiple sellers" },
  { id: "seo", label: "SEO & blog" },
  { id: "motion", label: "Premium animations" },
  { id: "automation", label: "Telegram / WhatsApp automation" },
];

/** Ranks past projects by how close they are to a requested brief. */
export function matchProjects(type: ProjectType | null, wanted: FeatureId[]) {
  return projects
    .map((p) => ({
      project: p,
      score:
        (type && p.type === type ? 3 : 0) +
        wanted.filter((f) => p.features.includes(f)).length,
    }))
    .sort((a, b) => b.score - a.score);
}

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
