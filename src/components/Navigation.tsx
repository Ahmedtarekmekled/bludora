import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { site, whatsappLink } from "../data/site";

const links = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "Studio" },
  { to: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? "border-b border-line bg-ink/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="wrap flex h-16 items-center justify-between sm:h-20" aria-label="Main">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Bludora home">
          <img src="/logo1.png" alt="" width={32} height={32} className="h-8 w-8" />
          <span className="font-display text-2xl leading-none">Bludora</span>
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className="link-line pb-0.5 text-sm text-paper/80 transition-colors hover:text-paper">
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link to="/start" className="btn-primary hidden !py-2.5 sm:inline-flex">
            Start a project
            <ArrowUpRight size={16} />
          </Link>
          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-line md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span
              className={`absolute h-px w-4 bg-paper transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-1"}`}
            />
            <span
              className={`absolute h-px w-4 bg-paper transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-1"}`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-ink md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="wrap flex flex-col pt-6">
              {[{ to: "/", label: "Home" }, ...links, { to: "/start", label: "Start a project" }].map((l, i) => (
                <motion.li
                  key={l.to}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.4 }}
                  className="border-b border-line"
                >
                  <NavLink to={l.to} end className="block py-4 font-display text-4xl">
                    {l.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
            <div className="wrap mt-10 flex flex-col gap-2 pb-10 text-sm text-muted">
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={whatsappLink("Hi Bludora, I'd like to talk about a project.")} target="_blank" rel="noreferrer">
                WhatsApp {site.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
