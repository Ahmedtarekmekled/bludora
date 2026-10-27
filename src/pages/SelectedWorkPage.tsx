import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import ProjectVisual from "../components/ProjectVisual";
import { projects, projectTypes, type ProjectType } from "../data/projects";

const filters: { id: ProjectType | "all"; label: string }[] = [
  { id: "all", label: "All" },
  ...projectTypes.filter((t) => projects.some((p) => p.type === t.id)).map((t) => ({ id: t.id, label: t.label })),
];

export default function WorkPage() {
  const [filter, setFilter] = useState<ProjectType | "all">("all");
  const shown = filter === "all" ? projects : projects.filter((p) => p.type === filter);

  return (
    <>
      <SEO
        title="Work — Bludora"
        description="Websites, stores, platforms and automations by Bludora: Royal Perfumes, Cangday and Mühteşem."
        url="https://bludora.vercel.app/work"
      />

      <section className="wrap pb-12 pt-32 sm:pt-44">
        <Reveal>
          <p className="eyebrow mb-6">Portfolio · {projects.length} projects</p>
          <h1 className="font-display text-mega">
            The <span className="italic">work</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-paper/70">
            Every project here is real and in use. Open a case study to see what we built, or visit the live site and
            try it yourself.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                filter === f.id ? "border-paper bg-paper text-ink" : "border-line text-paper/75 hover:border-paper/40"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      <section className="wrap pb-24">
        <motion.ul layout className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {shown.map((p, i) => (
              <motion.li
                layout
                key={p.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className={`min-w-0 ${i % 2 === 1 ? "md:mt-24" : ""}`}
              >
                <Link to={`/work/${p.slug}`} className="group block">
                  <div className="overflow-hidden rounded-2xl p-3 sm:p-6" style={{ backgroundColor: p.tint }}>
                    <div className="transition-transform duration-700 ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.01]">
                      <ProjectVisual project={p} compact />
                    </div>
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <h2 className="font-display text-4xl">{p.name}</h2>
                      <p className="mt-2 max-w-md text-paper/65">{p.tagline}</p>
                    </div>
                    <ArrowUpRight className="mt-2 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="chip">{p.sector}</span>
                    <span className="chip">{p.languages.join(" / ")}</span>
                    <span className="chip">{p.year}</span>
                  </div>
                </Link>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </section>

      <section className="wrap pb-28">
        <Reveal className="flex flex-col items-start justify-between gap-8 rounded-2xl border border-line bg-panel p-8 sm:p-12 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-display text-big">Seen something you like?</h2>
            <p className="mt-3 max-w-lg text-paper/70">
              Tell us what you need in a few clicks. We'll match it to our closest work and reply with a plan.
            </p>
          </div>
          <Link to="/start" className="btn-accent shrink-0">
            Plan your project <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
