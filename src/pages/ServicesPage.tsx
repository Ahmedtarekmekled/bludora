import { Link } from "react-router-dom";
import { ArrowRight, Plus } from "lucide-react";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import { projects, type ProjectType } from "../data/projects";

const services: { type: ProjectType | null; title: string; body: string; includes: string[] }[] = [
  {
    type: "store",
    title: "E-commerce & online stores",
    body: "Stores that make products look their best and make ordering effortless, from boutique catalogues to wholesale pricing.",
    includes: ["Product catalogue & collections", "Cart, checkout or WhatsApp ordering", "Volume / wholesale pricing", "Admin to manage products"],
  },
  {
    type: "booking",
    title: "Clinics & booking sites",
    body: "For doctors, clinics, salons and consultants: show your results, explain your services and fill your calendar.",
    includes: ["Appointment forms", "Before/after galleries", "WhatsApp contact", "Arabic RTL layouts"],
  },
  {
    type: "marketplace",
    title: "Marketplaces & platforms",
    body: "Multi-user products with accounts, dashboards and data: the kind of build that runs a business, not just presents it.",
    includes: ["Customer & seller accounts", "Dashboards and charts", "Maps & locations", "Supabase / Postgres backend"],
  },
  {
    type: "company",
    title: "Company & service websites",
    body: "A site that explains what you do in seconds and turns visitors into enquiries, with motion that feels premium.",
    includes: ["Service & landing pages", "Lead and consultation forms", "Multiple languages", "SEO foundations"],
  },
  {
    type: "automation",
    title: "Automation & bots",
    body: "Telegram and WhatsApp bots and workflows that do the repetitive work: collecting, cleaning, pricing and posting, with you approving what goes out.",
    includes: ["Telegram channel automation", "Auto-formatted product posts", "Review & approval dashboard", "Runs 24/7 on a server"],
  },
  {
    type: null,
    title: "Redesigns",
    body: "Already have a site that isn't working for you? We rebuild it faster, cleaner and easier to update.",
    includes: ["Design audit", "Content restructure", "Speed & SEO fixes", "Smooth migration"],
  },
];

const faqs = [
  ["How long does a project take?", "Most company and clinic sites take 2–4 weeks. Stores and platforms usually take 4–10 weeks depending on features. You'll get a timeline before we start."],
  ["Do you build in Arabic?", "Yes. We build fully right-to-left Arabic sites, and bilingual Arabic/English or Turkish/English sites too."],
  ["Can I update the content myself?", "Yes. Every system we build comes with its own admin dashboard, so you can manage products, prices, orders and content without us."],
  ["What about hosting and domains?", "We handle deployment and connect your domain. Hosting is set up in your name so you always own your site."],
  ["How much does it cost?", "It depends on scope. Use the project planner or send us a message and we'll reply with a clear quote, with no obligation."],
];

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Services — Bludora"
        description="E-commerce stores, clinic and booking sites, marketplaces, company websites and Telegram automations, designed and built by Bludora in Arabic, English and Turkish."
        url="https://bludora.vercel.app/services"
      />

      <section className="wrap pb-16 pt-32 sm:pt-44">
        <Reveal>
          <p className="eyebrow mb-6">Services</p>
          <h1 className="max-w-5xl font-display text-mega">
            One studio, <span className="italic text-paper/60">from first sketch to launch.</span>
          </h1>
        </Reveal>
      </section>

      <section className="wrap pb-24">
        <ul className="border-t border-line">
          {services.map((s, i) => {
            const example = s.type ? projects.find((p) => p.type === s.type) : null;
            return (
              <Reveal as="li" key={s.title} className="grid gap-6 border-b border-line py-12 lg:grid-cols-12">
                <span className="font-mono text-xs text-muted lg:col-span-1">0{i + 1}</span>
                <div className="lg:col-span-5">
                  <h2 className="font-display text-4xl sm:text-5xl">{s.title}</h2>
                  <p className="mt-4 max-w-md text-paper/70">{s.body}</p>
                </div>
                <ul className="space-y-2 text-paper/85 lg:col-span-3">
                  {s.includes.map((x) => (
                    <li key={x} className="flex items-center gap-3">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {x}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col items-start gap-4 lg:col-span-3 lg:items-end">
                  {example && (
                    <Link to={`/work/${example.slug}`} className="group flex items-center gap-3">
                      <img src={example.thumb} alt="" loading="lazy" className="h-14 w-24 rounded-md object-cover object-top" />
                      <span className="text-sm text-muted group-hover:text-paper">See {example.name}</span>
                    </Link>
                  )}
                  <Link to={s.type ? `/start?type=${s.type}` : "/start"} className="link-line flex items-center gap-2 text-sm">
                    Start this <ArrowRight size={14} />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </section>

      <section className="border-t border-line bg-panel/60">
        <div className="wrap grid gap-12 py-24 sm:py-32 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow mb-5">Questions</p>
            <h2 className="font-display text-big">Good to know</h2>
          </Reveal>
          <div className="divide-y divide-line border-y border-line lg:col-span-8">
            {faqs.map(([q, a]) => (
              <details key={q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg [&::-webkit-details-marker]:hidden">
                  {q}
                  <Plus size={20} className="shrink-0 text-muted transition-transform duration-300 group-open:rotate-45" />
                </summary>
                <p className="mt-4 max-w-2xl text-paper/70">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
