import { ArrowRight, Shirt } from "lucide-react";

// Illustrative sample post; mirrors the caption format the Mühteşem worker produces.
const incoming = `YENİ GELDİ 🔥
Kod: 4521
36-38-40-42
Seri: 4'lü
Fiyat: 29$
Sipariş için 👇
+90 5xx xxx xx xx
t.me/supplier_channel`;

const outgoing = `✨ YENİ SEZON – RPT ✨

🏷️ Kod: 4521

📦 Seri: 4'lü

📏 Beden: 36-38-40-42

💵 Fiyat: 32$
🛍️ Sipariş vermek için aşağıdaki WhatsApp bağlantısına tıklayın:
wa.me/…`;

interface BubbleProps {
  who: string;
  text: string;
  avatar?: string;
  tone: "in" | "out";
  compact?: boolean;
  className?: string;
}

function Bubble({ who, text, avatar, tone, compact, className = "" }: BubbleProps) {
  return (
    <div className={`flex-1 overflow-hidden rounded-2xl border border-white/10 bg-[#17212b] shadow-2xl ${className}`}>
      <div className="flex items-center gap-3 border-b border-white/10 bg-[#232e3c] px-4 py-3">
        {avatar ? (
          <img src={avatar} alt="" className="h-8 w-8 rounded-full bg-white object-cover" />
        ) : (
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-xs">S</span>
        )}
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-white">{who}</p>
          <p className="text-[11px] text-white/50">Telegram channel</p>
        </div>
      </div>
      <div className={compact ? "p-2.5" : "p-4"}>
        <div
          className={`whitespace-pre-line rounded-xl rounded-tl-sm leading-relaxed text-white/90 ${
            compact ? "p-2.5 text-[10px] sm:text-[11px]" : "p-3.5 text-[13px]"
          } ${tone === "in" ? "bg-[#182533]" : "bg-[#2b5278]"}`}
        >
          {!compact && (
          <div
            aria-hidden="true"
            className={`mb-3 flex aspect-[16/9] items-center justify-center rounded-lg ${tone === "in" ? "bg-white/5" : "bg-white/10"}`}
          >
            <Shirt className="text-white/30" size={36} strokeWidth={1.25} />
          </div>
          )}
          {text}
        </div>
      </div>
    </div>
  );
}

/** Before/after view of a supplier post being cleaned and rebranded by the bot. */
export default function ChatMockup({ avatar, compact }: { avatar: string; compact?: boolean }) {
  return (
    <div className={`flex items-stretch gap-4 sm:items-center ${compact ? "flex-row items-start" : "flex-col sm:flex-row"}`}>
      {/* On narrow compact cards only the finished post fits legibly */}
      <Bubble who="Supplier channel" text={incoming} tone="in" compact={compact} className={compact ? "hidden sm:block" : ""} />
      <div className={`shrink-0 items-center justify-center gap-2 text-white/70 ${compact ? "hidden flex-col self-center sm:flex" : "flex flex-row sm:flex-col"}`}>
        {!compact && <span className="font-mono text-[10px] uppercase tracking-widest">clean · price · brand</span>}
        <ArrowRight className={compact ? "" : "rotate-90 sm:rotate-0"} size={20} />
      </div>
      <Bubble who="Mühteşem" text={outgoing} avatar={avatar} tone="out" compact={compact} />
    </div>
  );
}
