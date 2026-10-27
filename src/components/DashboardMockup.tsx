import { BarChart3, Box, LayoutGrid, Settings, ShoppingBag, Users } from "lucide-react";

// Illustrative numbers only: this shows the kind of admin panel every Bludora build ships with.
const nav = [
  { icon: LayoutGrid, label: "Overview", active: true },
  { icon: ShoppingBag, label: "Orders" },
  { icon: Box, label: "Products" },
  { icon: Users, label: "Customers" },
  { icon: BarChart3, label: "Reports" },
  { icon: Settings, label: "Settings" },
];

const stats = [
  ["Orders today", "38", "+12%"],
  ["Revenue", "₺41,250", "+8%"],
  ["Products", "214", "6 low stock"],
];

const week = [42, 58, 49, 71, 64, 88, 76];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const orders = [
  ["#1043", "Layla A.", "Oud Royal 100ml", "Paid"],
  ["#1042", "Mert K.", "Gift box · 3 items", "Shipped"],
  ["#1041", "Sara M.", "Body mist set", "New"],
];

const statusTone: Record<string, string> = {
  Paid: "bg-emerald-400/15 text-emerald-300",
  Shipped: "bg-accent/20 text-[#9db6ff]",
  New: "bg-amber-400/15 text-amber-300",
};

export default function DashboardMockup() {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-[#0f1116] text-[12px] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)]">
      <div className="flex">
        <aside className="hidden w-44 shrink-0 border-r border-line p-4 sm:block">
          <div className="mb-6 flex items-center gap-2">
            <span className="h-6 w-6 rounded-md bg-accent" />
            <span className="font-medium text-paper">Your brand</span>
          </div>
          <ul className="space-y-1">
            {nav.map(({ icon: Icon, label, active }) => (
              <li
                key={label}
                className={`flex items-center gap-2.5 rounded-md px-2.5 py-2 ${active ? "bg-paper/10 text-paper" : "text-muted"}`}
              >
                <Icon size={14} />
                {label}
              </li>
            ))}
          </ul>
        </aside>

        <div className="min-w-0 flex-1 p-4 sm:p-6">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-sm font-medium text-paper">Overview</p>
            <span className="rounded-md border border-line px-2.5 py-1 text-muted">This week</span>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {stats.map(([label, value, delta]) => (
              <div key={label} className="rounded-lg border border-line bg-panel p-2.5 sm:p-3.5">
                <p className="truncate text-muted">{label}</p>
                <p className="mt-1.5 font-display text-xl text-paper sm:text-2xl">{value}</p>
                <p className="mt-1 truncate text-[11px] text-emerald-300/80">{delta}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-3 lg:grid-cols-5">
            <div className="rounded-lg border border-line bg-panel p-3.5 lg:col-span-2">
              <p className="mb-4 text-muted">Orders this week</p>
              <div className="flex h-28 items-end gap-2">
                {week.map((v, i) => (
                  <div key={days[i]} className="flex h-full flex-1 flex-col items-center justify-end gap-1.5">
                    <div
                      className={`w-full rounded-sm ${i === 5 ? "bg-accent" : "bg-paper/15"}`}
                      style={{ height: `${v}%` }}
                    />
                    <span className="text-[10px] text-muted">{days[i][0]}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-line bg-panel p-3.5 lg:col-span-3">
              <p className="mb-3 text-muted">Recent orders</p>
              <ul className="divide-y divide-line">
                {orders.map(([id, name, item, status]) => (
                  <li key={id} className="grid grid-cols-[44px_1fr_auto] items-center gap-3 py-2">
                    <span className="font-mono text-[11px] text-muted">{id}</span>
                    <span className="min-w-0 truncate text-paper/90">
                      {name} <span className="text-muted">· {item}</span>
                    </span>
                    <span className={`rounded-full px-2 py-0.5 text-[10px] ${statusTone[status]}`}>{status}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
