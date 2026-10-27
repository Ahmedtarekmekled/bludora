import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFoundPage() {
  return (
    <section className="wrap flex min-h-[70vh] flex-col justify-center pb-20 pt-40">
      <SEO title="Page not found — Bludora" noindex />
      <p className="eyebrow mb-6">404</p>
      <h1 className="font-display text-huge">
        This page doesn't exist<span className="italic text-accent">.</span>
      </h1>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link to="/" className="btn-primary">
          Back home
        </Link>
        <Link to="/work" className="btn-ghost">
          See the work
        </Link>
      </div>
    </section>
  );
}
