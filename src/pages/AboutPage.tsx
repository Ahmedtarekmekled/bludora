import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";

const principles = [
  ["Real over impressive", "We'd rather show you real work than a concept. Everything in our portfolio is in use today."],
  ["Design that sells", "Beautiful matters, but the job is enquiries, bookings and orders. Every layout decision serves that."],
  ["Built for your market", "Arabic, English, Turkish and more, right-to-left and left-to-right, WhatsApp-first when your customers are."],
  ["You own it", "Your code, your domain, your hosting. No lock-in, and you can manage your content yourself."],
];

export default function AboutPage() {
  const languages = [...new Set(projects.flatMap((p) => p.languages))];

  return (
    <>
      <SEO
        title="Studio — Bludora"
        description="Bludora is a small design and development studio building websites, stores and platforms for businesses across the Middle East, Türkiye and beyond."
        url="https://bludora.vercel.app/about"
      />

      <section className="wrap pb-20 pt-32 sm:pt-44">
        <Reveal>
          <p className="eyebrow mb-6">The studio</p>
          <h1 className="max-w-5xl font-display text-mega">
            Small team. <span className="italic text-paper/60">Senior craft.</span>
          </h1>
        </Reveal>
        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6 lg:col-start-7">
            <p className="font-display text-3xl leading-snug">
              Bludora is a design and development studio. We work directly with founders and business owners, with no
              account managers and no hand-offs, so the people you talk to are the people building your site.
            </p>
            <p className="mt-6 text-lg text-paper/70">
              We've built online stores for fragrance brands and a rug house, a Telegram automation for a clothing brand, and
              sites for marketplaces, clinics and travel agencies. Different industries, same goal: bring in business.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line">
        <div className="wrap grid grid-cols-2 divide-x divide-line lg:grid-cols-4">
          {[
            ["Admin", "Dashboard with every system"],
            [String(languages.length), "Languages we build in"],
            ["Mobile", "First, on every page"],
            ["1", "Point of contact"],
          ].map(([n, l]) => (
            <div key={l} className="px-4 py-10 first:pl-0 sm:px-8">
              <p className="font-display text-6xl">{n}</p>
              <p className="eyebrow mt-3">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap py-24 sm:py-32">
        <Reveal>
          <p className="eyebrow mb-5">How we work</p>
        </Reveal>
        <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {principles.map(([t, b], i) => (
            <Reveal as="li" key={t} delay={i * 0.06} className="bg-ink p-8 sm:p-10">
              <h2 className="font-display text-3xl">{t}</h2>
              <p className="mt-3 text-paper/70">{b}</p>
            </Reveal>
          ))}
        </ul>
        <div className="mt-14 flex flex-wrap gap-3">
          <Link to="/work" className="btn-ghost">
            See the work
          </Link>
          <Link to="/start" className="btn-accent">
            Plan your project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
