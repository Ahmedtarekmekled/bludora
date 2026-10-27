/** An endless band of words; the list is rendered twice so the -50% loop is seamless. */
export default function Marquee({ items }: { items: string[] }) {
  const row = (hidden?: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((t, i) => (
        <li key={i} className="flex items-center whitespace-nowrap">
          <span className={`px-6 font-display text-5xl sm:px-10 sm:text-7xl ${i % 2 ? "italic text-paper/35" : ""}`}>{t}</span>
          <span className="text-2xl text-accent">✦</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="group overflow-hidden border-y border-line py-8 sm:py-10">
      <div className="marquee-track flex w-max group-hover:[animation-play-state:paused]">
        {row()}
        {row(true)}
      </div>
    </div>
  );
}
