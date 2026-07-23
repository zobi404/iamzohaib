import {
  Calculator,
  Package,
  ShoppingCart,
  Wallet,
  Users,
  Truck,
  TrendingUp,
  ClipboardList,
  Network,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";

interface Mod {
  icon: LucideIcon;
  name: string;
  desc: string;
  versions: string[];
}

const mods: Mod[] = [
  {
    icon: Calculator,
    name: "Accounting",
    desc: "Designed & optimized QWeb accounting reports, cutting manual effort by ~35%.",
    versions: ["17", "18", "19"],
  },
  {
    icon: Package,
    name: "Inventory",
    desc: "Stock operations and live inventory sync for B2B e-commerce integration.",
    versions: ["17", "18", "19"],
  },
  {
    icon: ShoppingCart,
    name: "Point of Sale",
    desc: "Customized POS workflows for retail and food client operations.",
    versions: ["18", "19"],
  },
  {
    icon: Wallet,
    name: "Payroll",
    desc: "Built & customized payroll processing workflows for HR operations.",
    versions: ["17", "18"],
  },
  {
    icon: Users,
    name: "HR",
    desc: "HR customizations supporting core employee management workflows.",
    versions: ["17", "18"],
  },
  {
    icon: Truck,
    name: "Fleet Management",
    desc: "Falcon-i Vehicle Tracking API integration for real-time trip analytics.",
    versions: ["18", "19"],
  },
  {
    icon: TrendingUp,
    name: "Sales",
    desc: "Sales workflows and automation across multiple business domains.",
    versions: ["17", "18", "19"],
  },
  {
    icon: ClipboardList,
    name: "Purchase",
    desc: "Purchase order and procurement workflow optimization.",
    versions: ["17", "18"],
  },
  {
    icon: Network,
    name: "API Integrations",
    desc: "Odoo REST APIs connected with React Native, Google Maps, Falcon-i, YOLOv8.",
    versions: ["17", "18", "19"],
  },
];

export function Modules() {
  return (
    <section id="modules" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gradient">
            Odoo Expertise
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Odoo Modules I've Worked On
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Hands-on production experience across Odoo 17, 18 & 19.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {mods.map((m, i) => {
            const Icon = m.icon;
            return (
              <Reveal key={m.name} delay={i * 0.04}>
                <article className="card-glow group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand-soft transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                    <Icon size={20} className="text-[color:var(--brand-blue)]" />
                  </div>
                  <h3 className="font-display text-base font-semibold">{m.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {m.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {m.versions.map((v) => (
                      <span
                        key={v}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-semibold tracking-wider text-muted-foreground"
                      >
                        v{v}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 rounded-2xl border border-white/10 bg-gradient-brand-soft p-5 text-center text-sm text-foreground/90">
            7+ business domains customized across three consecutive Odoo versions — from
            backend logic to mobile-connected front ends.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
