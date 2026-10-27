import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Mail, MessageCircle } from "lucide-react";
import SEO from "../components/SEO";
import {
  features,
  getProject,
  matchProjects,
  projectTypes,
  type FeatureId,
  type ProjectType,
} from "../data/projects";
import { mailLink, whatsappLink } from "../data/site";

type TypeChoice = ProjectType | "custom";

const timelines = ["As soon as possible", "Within 1–2 months", "Flexible, just exploring"];
const startingPoints = ["Starting from scratch", "Redesigning an existing site"];
const steps = ["Type", "Features", "Timing", "About you"];

function initialState(params: URLSearchParams) {
  const liked = getProject(params.get("like") ?? "");
  if (liked) return { type: liked.type as TypeChoice, picked: liked.features, liked: liked.name };
  const t = params.get("type");
  const type = projectTypes.some((p) => p.id === t) ? (t as ProjectType) : null;
  return { type: type as TypeChoice | null, picked: [] as FeatureId[], liked: null as string | null };
}

export default function StartProjectPage() {
  const [params] = useSearchParams();
  const init = useMemo(() => initialState(params), [params]);

  const [step, setStep] = useState(init.type ? 1 : 0);
  const [type, setType] = useState<TypeChoice | null>(init.type);
  const [picked, setPicked] = useState<FeatureId[]>(init.picked);
  const [timeline, setTimeline] = useState<string | null>(null);
  const [start, setStart] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [notes, setNotes] = useState("");

  const typeLabel = type === "custom" ? "Something custom" : projectTypes.find((t) => t.id === type)?.label;
  const matches = matchProjects(type === "custom" ? null : type, picked).filter((m) => m.score > 0).slice(0, 2);

  const toggle = (id: FeatureId) =>
    setPicked((cur) => (cur.includes(id) ? cur.filter((f) => f !== id) : [...cur, id]));

  const canNext = [!!type, true, !!timeline, name.trim().length > 1][step];

  const details = [
    name && `Name: ${name}`,
    business && `Business: ${business}`,
    typeLabel && `Project: ${typeLabel}`,
    picked.length > 0 && `Needs: ${picked.map((id) => features.find((f) => f.id === id)?.label).join(", ")}`,
    timeline && `Timeline: ${timeline}`,
    start && `Starting point: ${start}`,
    init.liked && `Inspired by: ${init.liked}`,
    notes && `Notes: ${notes}`,
  ].filter(Boolean);
  const brief = ["Hi Bludora! I'd like to start a project.", "", ...details].join("\n");

  const ready = !!type && !!timeline && name.trim().length > 1;

  return (
    <>
      <SEO
        title="Plan your project — Bludora"
        description="Tell us what you want to build in four quick steps. We'll match it to our closest past project and reply with a plan."
        url="https://bludora.vercel.app/start"
      />

      <section className="wrap pb-24 pt-32 sm:pt-44">
        <p className="eyebrow mb-6">Project planner · takes about a minute</p>
        <h1 className="max-w-4xl font-display text-huge">
          Let's shape your project<span className="italic text-accent">.</span>
        </h1>
        {init.liked && (
          <p className="mt-6 text-paper/70">
            Starting from <span className="text-paper">{init.liked}</span>. Change anything you like.
          </p>
        )}

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          {/* Steps */}
          <div className="lg:col-span-7">
            <ol className="mb-10 flex gap-2" aria-label="Progress">
              {steps.map((s, i) => (
                <li key={s} className="flex-1">
                  <button
                    type="button"
                    onClick={() => i < step && setStep(i)}
                    disabled={i > step}
                    aria-current={i === step ? "step" : undefined}
                    className="w-full text-left disabled:cursor-default"
                  >
                    <span className={`block h-0.5 rounded-full transition-colors duration-500 ${i <= step ? "bg-accent" : "bg-line"}`} />
                    <span className={`mt-3 block font-mono text-[11px] uppercase tracking-[0.14em] ${i === step ? "text-paper" : "text-muted"}`}>
                      {i + 1}. {s}
                    </span>
                  </button>
                </li>
              ))}
            </ol>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {step === 0 && (
                  <fieldset>
                    <legend className="mb-6 font-display text-4xl">What are you building?</legend>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {[...projectTypes, { id: "custom" as const, label: "Something custom", blurb: "An app, a tool, or an idea that doesn't fit a box." }].map((t) => (
                        <Option key={t.id} selected={type === t.id} onClick={() => setType(t.id)} title={t.label} body={t.blurb} />
                      ))}
                    </div>
                  </fieldset>
                )}

                {step === 1 && (
                  <fieldset>
                    <legend className="mb-2 font-display text-4xl">What should it do?</legend>
                    <p className="mb-6 text-paper/60">Pick any that apply. Not sure? Skip it and we'll advise.</p>
                    <div className="flex flex-wrap gap-2.5">
                      {features.map((f) => {
                        const on = picked.includes(f.id);
                        return (
                          <button
                            key={f.id}
                            type="button"
                            aria-pressed={on}
                            onClick={() => toggle(f.id)}
                            className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm transition-all duration-300 ${
                              on ? "border-accent bg-accent/15 text-paper" : "border-line text-paper/75 hover:border-paper/40"
                            }`}
                          >
                            <span className={`flex h-4 w-4 items-center justify-center rounded-full border transition-colors ${on ? "border-accent bg-accent" : "border-paper/30"}`}>
                              {on && <Check size={10} strokeWidth={3} />}
                            </span>
                            {f.label}
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>
                )}

                {step === 2 && (
                  <div className="space-y-10">
                    <fieldset>
                      <legend className="mb-6 font-display text-4xl">When do you need it?</legend>
                      <div className="grid gap-3 sm:grid-cols-3">
                        {timelines.map((t) => (
                          <Option key={t} selected={timeline === t} onClick={() => setTimeline(t)} title={t} />
                        ))}
                      </div>
                    </fieldset>
                    <fieldset>
                      <legend className="mb-4 eyebrow">Starting point (optional)</legend>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {startingPoints.map((s) => (
                          <Option key={s} selected={start === s} onClick={() => setStart(start === s ? null : s)} title={s} />
                        ))}
                      </div>
                    </fieldset>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h2 className="mb-6 font-display text-4xl">Who are we talking to?</h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Your name" value={name} onChange={setName} autoComplete="name" required />
                      <Field label="Business name (optional)" value={business} onChange={setBusiness} autoComplete="organization" />
                      <div className="sm:col-span-2">
                        <Field label="Anything else? (optional)" value={notes} onChange={setNotes} multiline />
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setStep((s) => s - 1)}
                className={`btn-ghost ${step === 0 ? "invisible" : ""}`}
              >
                <ArrowLeft size={16} /> Back
              </button>
              {step < steps.length - 1 && (
                <button type="button" disabled={!canNext} onClick={() => setStep((s) => s + 1)} className="btn-primary disabled:opacity-40">
                  {step === 1 && picked.length === 0 ? "Skip" : "Continue"} <ArrowRight size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Live brief */}
          <aside className="lg:col-span-5">
            <div className="rounded-2xl border border-line bg-panel p-6 sm:p-8 lg:sticky lg:top-28">
              <p className="eyebrow mb-6">Your brief</p>
              <dl className="space-y-4 text-sm">
                <BriefRow label="Project" value={typeLabel} />
                <BriefRow
                  label="Needs"
                  value={picked.length ? picked.map((id) => features.find((f) => f.id === id)?.label).join(" · ") : undefined}
                />
                <BriefRow label="Timeline" value={timeline ?? undefined} />
                <BriefRow label="From" value={name ? `${name}${business ? `, ${business}` : ""}` : undefined} />
              </dl>

              {matches.length > 0 && (
                <div className="mt-8 border-t border-line pt-6">
                  <p className="eyebrow mb-4">Closest work we've shipped</p>
                  <ul className="space-y-3">
                    {matches.map(({ project: p }) => (
                      <li key={p.slug}>
                        <Link to={`/work/${p.slug}`} className="group flex items-center gap-4 rounded-lg p-1.5 transition-colors hover:bg-raised">
                          <img src={p.thumb} alt="" className="h-12 w-20 shrink-0 rounded-md object-cover object-top" />
                          <div className="min-w-0">
                            <p className="font-display text-xl leading-tight">{p.name}</p>
                            <p className="truncate text-xs text-muted">{p.sector}</p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-8 grid gap-2 border-t border-line pt-6">
                <a
                  href={ready ? whatsappLink(brief) : undefined}
                  target="_blank"
                  rel="noreferrer"
                  aria-disabled={!ready}
                  className={`btn-accent w-full ${ready ? "" : "pointer-events-none opacity-40"}`}
                >
                  <MessageCircle size={16} /> Send on WhatsApp
                </a>
                <a
                  href={ready ? mailLink(`New project: ${typeLabel ?? ""}`, brief) : undefined}
                  aria-disabled={!ready}
                  className={`btn-ghost w-full ${ready ? "" : "pointer-events-none opacity-40"}`}
                >
                  <Mail size={16} /> Send by email
                </a>
                <p className="mt-2 text-center text-xs text-muted">
                  {ready ? "Opens a ready-to-send message. We usually reply the same day." : "Fill in the steps to send your brief."}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Option({ selected, onClick, title, body }: { selected: boolean; onClick: () => void; title: string; body?: string }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`relative rounded-xl border p-5 text-left transition-all duration-300 ${
        selected ? "border-accent bg-accent/10" : "border-line hover:border-paper/30 hover:bg-raised/50"
      }`}
    >
      <span className={`absolute right-4 top-4 flex h-5 w-5 items-center justify-center rounded-full border transition-colors ${selected ? "border-accent bg-accent" : "border-paper/25"}`}>
        {selected && <Check size={12} strokeWidth={3} />}
      </span>
      <span className="block pr-8 font-medium">{title}</span>
      {body && <span className="mt-1.5 block text-sm text-paper/60">{body}</span>}
    </button>
  );
}

function Field({
  label,
  value,
  onChange,
  multiline,
  ...rest
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
  autoComplete?: string;
  required?: boolean;
}) {
  const cls =
    "mt-2 w-full rounded-lg border border-line bg-ink px-4 py-3 text-paper placeholder:text-muted transition-colors focus:border-accent focus:outline-none";
  return (
    <label className="block text-sm text-paper/80">
      {label}
      {multiline ? (
        <textarea rows={4} value={value} onChange={(e) => onChange(e.target.value)} className={cls} {...rest} />
      ) : (
        <input value={value} onChange={(e) => onChange(e.target.value)} className={cls} {...rest} />
      )}
    </label>
  );
}

function BriefRow({ label, value }: { label: string; value?: string }) {
  return (
    <div className="grid grid-cols-[88px_1fr] gap-3">
      <dt className="text-muted">{label}</dt>
      <dd className={value ? "text-paper" : "text-paper/25"}>{value ?? "—"}</dd>
    </div>
  );
}
