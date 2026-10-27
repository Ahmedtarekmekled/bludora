import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProjectVisual from "./ProjectVisual";
import type { Project } from "../data/projects";

/**
 * Phone-only hook: a swipeable strip of real work. Cards are narrower than the screen so
 * the next one peeks in, and the strip nudges sideways once on entry to invite a swipe.
 */
export default function MobileShowcase({ items }: { items: Project[] }) {
  const stripRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = stripRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    if (!card) return;
    setActive(Math.round(el.scrollLeft / (card.offsetWidth + 12)));
  };

  return (
    <section className="md:hidden" aria-label="Featured work">
      <motion.div
        ref={stripRef}
        onScroll={onScroll}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        initial={{ x: 60, opacity: 0 }}
        whileInView={{ x: [60, -18, 0], opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], times: [0, 0.6, 1] }}
      >
        {items.map((p) => (
          <Link key={p.slug} to={`/work/${p.slug}`} className="w-[84%] shrink-0 snap-center">
            <div className="rounded-2xl p-2.5" style={{ backgroundColor: p.tint }}>
              <ProjectVisual project={p} compact eager />
            </div>
            <div className="mt-3 flex items-baseline justify-between gap-3 px-1">
              <span className="font-display text-2xl">{p.name}</span>
              <span className="truncate text-xs text-muted">{p.sector}</span>
            </div>
          </Link>
        ))}
      </motion.div>

      <div className="mt-4 flex items-center justify-between px-4">
        <div className="flex gap-1.5" aria-hidden="true">
          {items.map((p, i) => (
            <span
              key={p.slug}
              className={`h-1 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-accent" : "w-1.5 bg-paper/25"}`}
            />
          ))}
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">Swipe to explore →</span>
      </div>
    </section>
  );
}
