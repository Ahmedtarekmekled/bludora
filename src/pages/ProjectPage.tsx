import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import ProjectVisual from "../components/ProjectVisual";
import NotFoundPage from "./NotFoundPage";
import { getProject, projects } from "../data/projects";

export default function ProjectPage() {
  const { slug = "" } = useParams();
  const project = getProject(slug);
  if (!project) return <NotFoundPage />;

  const idx = projects.indexOf(project);
  const next = projects[(idx + 1) % projects.length];
  const meta = [
    ["Client", project.client],
    ["Sector", project.sector],
    ["Year", project.year],
    ["Languages", project.languages.join(", ")],
  ];

  return (
    <>
      <SEO
        title={`${project.name} — Bludora case study`}
        description={project.summary}
        url={`https://bludora.vercel.app/work/${project.slug}`}
        image={project.image}
      />

      <section className="wrap pb-14 pt-32 sm:pt-44">
        <Link to="/work" className="eyebrow link-line mb-10 inline-block hover:text-paper">
          ← All work
        </Link>
        <motion.h1
          className="font-display text-mega"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {project.name}
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl font-display text-2xl italic text-paper/70 sm:text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.25 }}
        >
          {project.tagline}
        </motion.p>

        <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-line pt-8 lg:grid-cols-5">
          {meta.map(([k, v]) => (
            <div key={k}>
              <dt className="eyebrow mb-2">{k}</dt>
              <dd className="text-paper/90">{v}</dd>
            </div>
          ))}
          {project.url && (
            <div className="col-span-2 lg:col-span-1 lg:justify-self-end">
              <a href={project.url} target="_blank" rel="noreferrer" className="btn-primary">
                Visit live site <ArrowUpRight size={16} />
              </a>
            </div>
          )}
        </dl>
      </section>

      <section className="wrap">
        <Reveal>
          <div className="rounded-2xl p-3 sm:p-10 lg:p-16" style={{ backgroundColor: project.tint }}>
            <ProjectVisual project={project} eager />
          </div>
        </Reveal>
      </section>

      <section className="wrap grid gap-16 py-24 sm:py-32 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow mb-4">Overview</p>
          <p className="font-display text-3xl leading-snug sm:text-4xl">{project.summary}</p>
        </Reveal>
        <div className="space-y-12 lg:col-span-6 lg:col-start-7">
          <Reveal>
            <h2 className="eyebrow mb-4">The challenge</h2>
            <p className="text-lg leading-relaxed text-paper/75">{project.challenge}</p>
          </Reveal>
          <Reveal>
            <h2 className="eyebrow mb-4">Our approach</h2>
            <p className="text-lg leading-relaxed text-paper/75">{project.approach}</p>
          </Reveal>
          <Reveal>
            <h2 className="eyebrow mb-5">What we built</h2>
            <ul className="divide-y divide-line border-y border-line">
              {project.built.map((b) => (
                <li key={b} className="flex gap-4 py-4">
                  <Check size={18} className="mt-1 shrink-0 text-accent" />
                  <span className="text-paper/90">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          {project.stack.length > 0 && (
          <Reveal>
            <h2 className="eyebrow mb-4">Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span key={s} className="chip normal-case tracking-normal text-paper/80">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
          )}
        </div>
      </section>

      <section className="wrap pb-24">
        <Reveal className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          <Link
            to={`/start?like=${project.slug}`}
            className="group flex flex-col justify-between gap-12 bg-accent p-8 text-white transition-[filter] hover:brightness-110 sm:p-12"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/75">Want one like this?</span>
            <span className="flex items-end justify-between gap-6">
              <span className="font-display text-big">Start from {project.name}</span>
              <ArrowRight className="mb-2 shrink-0 transition-transform group-hover:translate-x-2" size={28} />
            </span>
          </Link>
          <Link to={`/work/${next.slug}`} className="group flex flex-col justify-between gap-12 bg-panel p-8 transition-colors hover:bg-raised sm:p-12">
            <span className="eyebrow">Next project</span>
            <span className="flex items-end justify-between gap-6">
              <span className="font-display text-big">{next.name}</span>
              <img src={next.thumb} alt="" loading="lazy" className="hidden h-20 w-32 rounded-md object-cover object-top sm:block" />
            </span>
          </Link>
        </Reveal>
      </section>
    </>
  );
}
