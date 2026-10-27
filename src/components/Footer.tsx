import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { site, whatsappLink } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="wrap pb-28 pt-14 sm:py-28">
        <p className="eyebrow mb-6">Have something in mind?</p>
        <Link to="/start" className="group inline-flex items-end gap-4">
          <span className="font-display text-mega">
            Let's build it<span className="italic text-accent">.</span>
          </span>
          <ArrowUpRight
            className="mb-3 h-10 w-10 shrink-0 transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:translate-x-2 sm:h-16 sm:w-16"
            strokeWidth={1}
          />
        </Link>

        <div className="mt-12 grid grid-cols-2 gap-8 border-t border-line pt-10 text-sm sm:mt-20 sm:gap-10 lg:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <p className="eyebrow mb-4">Studio</p>
            <p className="max-w-xs text-paper/70">
              Bludora designs and builds websites, stores and platforms for businesses that want to look as good
              as they are.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-4">Explore</p>
            <ul className="space-y-2">
              {[
                ["/work", "Work"],
                ["/services", "Services"],
                ["/about", "Studio"],
                ["/start", "Start a project"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="link-line text-paper/80 hover:text-paper">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-last col-span-2 sm:col-span-1 lg:order-none">
            <p className="eyebrow mb-4">Contact</p>
            <ul className="space-y-2 text-paper/80">
              <li>
                <a href={`mailto:${site.email}`} className="link-line hover:text-paper">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={whatsappLink("Hi Bludora!")} target="_blank" rel="noreferrer" className="link-line hover:text-paper">
                  WhatsApp {site.phone}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">Follow</p>
            <a href={site.instagram} target="_blank" rel="noreferrer" className="link-line text-paper/80 hover:text-paper">
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-2 sm:mt-16 font-mono text-[11px] uppercase tracking-[0.14em] text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} Bludora</span>
          <span>Design & development studio</span>
        </div>
      </div>
    </footer>
  );
}
