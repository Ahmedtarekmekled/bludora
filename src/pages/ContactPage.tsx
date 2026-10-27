import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import { mailLink, site, whatsappLink } from "../data/site";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = mailLink(`Project enquiry from ${name}`, `${message}\n\n— ${name}`);
  };

  const channels = [
    { icon: MessageCircle, label: "WhatsApp", value: site.phone, href: whatsappLink("Hi Bludora, I'd like to talk about a project."), note: "Fastest reply" },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}`, note: "For detailed briefs" },
    { icon: ArrowUpRight, label: "Instagram", value: "@bludorasoftware", href: site.instagram, note: "See what we're working on" },
  ];

  return (
    <>
      <SEO
        title="Contact — Bludora"
        description="Talk to Bludora on WhatsApp or email about your website, store or platform."
        url="https://bludora.vercel.app/contact"
      />

      <section className="wrap pb-24 pt-32 sm:pt-44">
        <Reveal>
          <p className="eyebrow mb-6">Contact</p>
          <h1 className="font-display text-mega">
            Say hello<span className="italic text-accent">.</span>
          </h1>
        </Reveal>

        <div className="mt-16 grid gap-16 lg:grid-cols-12">
          <ul className="border-t border-line lg:col-span-6">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-6 border-b border-line py-7"
                >
                  <div>
                    <p className="eyebrow mb-2">
                      {c.label} · {c.note}
                    </p>
                    <p className="break-all font-display text-3xl transition-transform duration-500 ease-out group-hover:translate-x-2 sm:text-4xl">
                      {c.value}
                    </p>
                  </div>
                  <c.icon className="shrink-0 text-muted transition-colors group-hover:text-paper" />
                </a>
              </li>
            ))}
          </ul>

          <div className="lg:col-span-5 lg:col-start-8">
            <div className="rounded-2xl border border-line bg-panel p-6 sm:p-8">
              <p className="font-display text-3xl">Know what you need?</p>
              <p className="mt-2 text-paper/70">The project planner builds your brief and matches it to our past work.</p>
              <Link to="/start" className="btn-accent mt-6">
                Open the planner <ArrowRight size={16} />
              </Link>

              <form onSubmit={onSubmit} className="mt-10 space-y-4 border-t border-line pt-8">
                <p className="eyebrow">Or send a quick note</p>
                <label className="block text-sm text-paper/80">
                  Name
                  <input
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-line bg-ink px-4 py-3 focus:border-accent focus:outline-none"
                  />
                </label>
                <label className="block text-sm text-paper/80">
                  Message
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-line bg-ink px-4 py-3 focus:border-accent focus:outline-none"
                  />
                </label>
                <button type="submit" className="btn-primary w-full">
                  Send by email <Mail size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
