import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";

/**
 * Typographic index of projects. On pointer devices a screenshot trails the cursor
 * while hovering a row; on touch the rows simply show an inline thumbnail.
 */
export default function WorkIndex({ items }: { items: Project[] }) {
  const listRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState<Project | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 30, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 260, damping: 30, mass: 0.6 });

  const onMove = (e: React.PointerEvent) => {
    const box = listRef.current?.getBoundingClientRect();
    if (!box) return;
    x.set(e.clientX - box.left);
    y.set(e.clientY - box.top);
  };

  return (
    <ul ref={listRef} className="relative border-t border-line" onPointerMove={onMove} onPointerLeave={() => setActive(null)}>
      {items.map((p, i) => (
        <li key={p.slug} onPointerEnter={(e) => e.pointerType === "mouse" && setActive(p)}>
          <Link
            to={`/work/${p.slug}`}
            className={`group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-line py-6 transition-colors duration-300 sm:gap-8 sm:py-9 ${
              active && active.slug !== p.slug ? "text-paper/30" : ""
            }`}
          >
            <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
            <div className="flex min-w-0 items-center gap-4">
              <img src={p.thumb} alt="" loading="lazy" className="h-12 w-20 shrink-0 rounded-md object-cover object-top md:hidden" />
              <h3 className="truncate font-display text-[clamp(1.75rem,5vw,4.5rem)] leading-none transition-transform duration-500 ease-out group-hover:translate-x-3">
                {p.name}
              </h3>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted">
              <span className="hidden lg:inline">{p.sector}</span>
              <span className="hidden sm:inline font-mono text-xs">{p.year}</span>
              <ArrowUpRight size={20} className="text-paper transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
          </Link>
        </li>
      ))}

      <AnimatePresence>
        {active && (
          <motion.div
            key="preview"
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 z-10 hidden w-[340px] md:block lg:w-[420px]"
            style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="overflow-hidden rounded-lg border border-line shadow-2xl" style={{ backgroundColor: active.tint }}>
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.img
                  key={active.slug}
                  src={active.thumb}
                  alt=""
                  className="block aspect-[16/10] w-full object-cover object-top"
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                />
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ul>
  );
}
