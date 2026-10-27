import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import BrowserFrame from "./BrowserFrame";
import DashboardMockup from "./DashboardMockup";
import type { Project } from "../data/projects";

/**
 * The scroll hook: work starts tilted back in 3D and swings upright and fans out as the
 * visitor scrolls. Side cards only appear from md up; phones get the centre card alone.
 */
export default function HeroShowcase({ center, left }: { center: Project; left: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  const rotateX = useTransform(p, [0, 1], [32, 0]);
  const scale = useTransform(p, [0, 1], [0.82, 1]);
  const y = useTransform(p, [0, 1], [40, 0]);
  const sideX = useTransform(p, [0, 1], ["0%", "-62%"]);
  const sideXR = useTransform(p, [0, 1], ["0%", "62%"]);
  const sideRotate = useTransform(p, [0, 1], [0, -6]);
  const sideRotateR = useTransform(p, [0, 1], [0, 6]);
  const sideOpacity = useTransform(p, [0.15, 0.7], [0, 1]);

  return (
    <section ref={ref} className="relative overflow-x-clip pb-10" aria-label="Featured work" style={{ perspective: 1400 }}>
      <div className="wrap">
        <motion.div style={{ rotateX, scale, y, transformOrigin: "50% 100%" }} className="relative mx-auto max-w-5xl">
          {/* Side cards sit behind the centre card and slide out from under it */}
          <motion.div
            aria-hidden="true"
            className="absolute inset-y-8 left-0 hidden w-[62%] md:block"
            style={{ x: sideX, rotate: sideRotate, opacity: sideOpacity }}
          >
            <BrowserFrame src={left.image} alt="" url={left.url ?? ""} className="opacity-80" />
          </motion.div>
          <motion.div
            aria-hidden="true"
            className="absolute inset-y-8 right-0 hidden w-[62%] md:block"
            style={{ x: sideXR, rotate: sideRotateR, opacity: sideOpacity }}
          >
            <div className="opacity-90">
              <DashboardMockup />
            </div>
          </motion.div>

          <Link to={`/work/${center.slug}`} className="group relative block">
            <div className="absolute -inset-10 -z-10 rounded-[40px] bg-accent/20 blur-3xl transition-opacity duration-700 group-hover:opacity-100 sm:opacity-60" />
            <BrowserFrame src={center.image} alt={`${center.name} website`} url={center.url ?? ""} eager />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-line bg-ink/80 px-4 py-2 text-sm backdrop-blur-md sm:bottom-6 sm:left-6">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {center.name} · live
              <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
