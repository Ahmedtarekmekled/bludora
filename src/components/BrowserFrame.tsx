interface BrowserFrameProps {
  src: string;
  alt: string;
  url: string;
  tint?: string;
  eager?: boolean;
  className?: string;
}

/** A screenshot shown inside minimal browser chrome, so work reads as a real, live site. */
export default function BrowserFrame({ src, alt, url, tint, eager, className = "" }: BrowserFrameProps) {
  const host = url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  return (
    <div
      className={`overflow-hidden rounded-xl border border-line bg-panel shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)] ${className}`}
      style={tint ? { backgroundColor: tint } : undefined}
    >
      <div className="flex items-center gap-3 border-b border-line bg-raised/80 px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-paper/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-paper/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-paper/15" />
        </div>
        <div className="mx-auto min-w-0 truncate rounded-md bg-ink/60 px-3 py-1 font-mono text-[11px] text-muted">
          {host}
        </div>
        <div className="hidden w-[42px] sm:block" aria-hidden="true" />
      </div>
      <img
        src={src}
        alt={alt}
        width={1600}
        height={1000}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className="block aspect-[16/10] w-full object-cover object-top"
      />
    </div>
  );
}
