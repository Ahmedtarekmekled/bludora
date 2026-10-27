import { useEffect, useRef } from "react";

/**
 * Drifting blue light behind the hero, plus a faint grid that lights up around the cursor.
 * Pure CSS animation; the cursor position is written straight to CSS variables (no re-renders).
 */
export default function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const host = el?.parentElement;
    if (!el || !host) return;
    const onMove = (e: PointerEvent) => {
      const box = host.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - box.left}px`);
      el.style.setProperty("--my", `${e.clientY - box.top}px`);
    };
    host.addEventListener("pointermove", onMove);
    return () => host.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className="hero-bg pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="hero-blob left-[-10%] top-[-20%] h-[60vw] w-[60vw] bg-accent/25 [animation-duration:22s]" />
      <div className="hero-blob right-[-15%] top-[10%] h-[45vw] w-[45vw] bg-[#6d4bff]/15 [animation-delay:-8s] [animation-duration:28s]" />
      <div className="hero-blob bottom-[-30%] left-[30%] h-[50vw] w-[50vw] bg-[#1fb6ff]/10 [animation-delay:-14s] [animation-duration:32s]" />
      <div className="hero-grid absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-ink" />
    </div>
  );
}
