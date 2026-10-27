import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import HeroBackground from "../components/HeroBackground";
import HeroShowcase from "../components/HeroShowcase";
import Marquee from "../components/Marquee";
import MobileShowcase from "../components/MobileShowcase";
import WorkIndex from "../components/WorkIndex";
import DashboardMockup from "../components/DashboardMockup";
import { projects, projectTypes } from "../data/projects";

const process = [
  ["Brief", "A short chat about your business, your customers and your goals."],
  ["Design", "You see the real look before any code, and we refine it together."],
  ["Build", "Fast, mobile-first, SEO-ready. Follow progress on a live preview link."],
  ["Launch", "Domain, hosting and your dashboard handed over. We stay for support."],
];

const heroWords = ["Websites,", "stores", "&", "platforms"];

const dashboardPoints = [
  "Add and edit products, prices and photos",
  "Track orders, customers and sales",
  "Approve or edit posts before they go out",
  "Works on your phone, in your language",
];

export default function HomePage() {
  const sites = projects.filter((p) => p.visual === "site");
  const lead = sites[0] ?? projects[0];
  const second = sites[1] ?? lead;

  return (
    <>
      <SEO
        title="Bludora — Websites, stores & platforms that sell"
        description="Bludora is a design and development studio. See work for Royal Perfumes, Cangday and Mühteşem, then plan your own project in two minutes."
        url="https://bludora.vercel.app"
      />

      {/* Hero */}
      <section className="relative isolate">
        <HeroBackground />
        <div className="wrap pb-8 pt-24 sm:pb-16 sm:pt-44">
          <motion.p
            className="eyebrow mb-6 flex items-center gap-3 sm:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="hidden sm:inline">Design & development studio · </span>Available for new projects
          </motion.p>

          <h1 className="font-display text-mega">
            <span className="sr-only">Websites, stores and platforms that people actually use.</span>
            <span aria-hidden="true" className="block">
              {heroWords.map((w, i) => (
                <span key={i} className="inline-block overflow-hidden pb-2 align-bottom">
                  <motion.span
                    className={`inline-block ${w === "&" ? "italic text-accent" : ""}`}
                    initial={{ y: "105%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {w}&nbsp;
                  </motion.span>
                </span>
              ))}
            </span>
            <span aria-hidden="true" className="block overflow-hidden pb-2">
              <motion.span
                className="inline-block italic text-paper/60"
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                that people actually use.
              </motion.span>
            </span>
          </h1>

          <motion.div
            className="mt-6 flex flex-col gap-6 sm:mt-16 sm:gap-10 lg:flex-row lg:items-end lg:justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
          >
            <p className="max-w-md leading-relaxed text-paper/70 sm:text-lg">
              Websites, online stores and automations, each with its own admin dashboard, in Arabic, English and
              Turkish.<span className="hidden sm:inline"> Everything below is real and in use.</span>
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/start" className="btn-accent">
                Plan your project <ArrowRight size={16} />
              </Link>
              <Link to="/work" className="btn-ghost">
                See the work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <MobileShowcase items={projects} />
      <div className="hidden md:block">
        <HeroShowcase center={lead} left={second} />
      </div>

      <div className="mt-14 sm:mt-28">
        <Marquee items={["Royal Perfumes", "Online stores", "Cangday", "Dashboards", "Mühteşem", "Telegram bots"]} />
      </div>

      {/* Index with hover previews */}
      <section className="wrap py-16 sm:py-36">
        <Reveal className="mb-6 flex items-end justify-between gap-6 sm:mb-10">
          <h2 className="font-display text-huge">
            Selected <span className="italic">work</span>
          </h2>
          <Link to="/work" className="link-line mb-2 shrink-0 text-sm text-paper/80">
            All projects ({projects.length})
          </Link>
        </Reveal>
        <WorkIndex items={projects} />
      </section>

      {/* What we build */}
      <section className="border-y border-line bg-panel/60">
        <div className="wrap py-16 sm:py-32">
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <p className="eyebrow mb-4 sm:mb-5">What we build</p>
              <h2 className="font-display text-big">
                Pick what you need. <span className="italic text-paper/60">We'll show you one we already shipped.</span>
              </h2>
            </Reveal>
            <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:col-span-8">
              {projectTypes.map((t, i) => {
                const example = projects.find((p) => p.type === t.id);
                return (
                  <Reveal
                    as="li"
                    key={t.id}
                    delay={i * 0.06}
                    className={`bg-ink ${i === projectTypes.length - 1 && projectTypes.length % 2 ? "sm:col-span-2" : ""}`}
                  >
                    <Link
                      to={`/start?type=${t.id}`}
                      className="group flex h-full items-center justify-between gap-4 p-5 transition-colors hover:bg-raised/60 sm:flex-col sm:items-stretch sm:gap-10 sm:p-9"
                    >
                      <div className="min-w-0">
                        <span className="hidden font-mono text-xs text-muted sm:inline">0{i + 1}</span>
                        <h3 className="font-display text-2xl sm:mt-4 sm:text-3xl">{t.label}</h3>
                        <p className="mt-3 hidden text-paper/65 sm:block">{t.blurb}</p>
                        {example && <p className="mt-1 text-xs text-muted sm:hidden">e.g. {example.name}</p>}
                      </div>
                      <div className="flex shrink-0 items-center justify-between text-sm">
                        <span className="hidden text-muted sm:inline">{example ? `e.g. ${example.name}` : "Custom build"}</span>
                        <span className="flex items-center gap-1.5 text-paper transition-transform group-hover:translate-x-1">
                          <span className="hidden sm:inline">Start</span> <ArrowRight size={16} />
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Dashboards */}
      <section className="wrap py-16 sm:py-32">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow mb-4 sm:mb-5">Included with every system</p>
            <h2 className="font-display text-big">
              Your own dashboard. <span className="italic text-paper/60">No developer needed.</span>
            </h2>
            <p className="mt-4 text-paper/70 sm:mt-6">
              Every store, site and bot we build comes with a private admin panel, so you run your business without
              calling us for every change.
            </p>
            <ul className="mt-8 hidden space-y-3 text-paper/85 sm:block">
              {dashboardPoints.map((x) => (
                <li key={x} className="flex items-center gap-3">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {x}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-8">
            <DashboardMockup />
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              Example dashboard · sample data
            </p>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="wrap pb-16 sm:py-32">
        <Reveal>
          <p className="eyebrow mb-4 sm:mb-5">How it works</p>
          <h2 className="max-w-3xl font-display text-big">From first message to live site, with no surprises.</h2>
        </Reveal>
        <ol className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:mt-14 sm:gap-10 lg:grid-cols-4">
          {process.map(([title, body], i) => (
            <Reveal as="li" key={title} delay={i * 0.08} className="border-t border-line pt-4 sm:pt-6">
              <span className="font-mono text-xs text-accent">Step {i + 1}</span>
              <h3 className="mt-2 font-display text-2xl sm:mt-3 sm:text-3xl">{title}</h3>
              <p className="mt-2 text-sm text-paper/65 sm:mt-3 sm:text-base">{body}</p>
            </Reveal>
          ))}
        </ol>
      </section>
    </>
  );
}
