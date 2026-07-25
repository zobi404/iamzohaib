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
import { useTranslation } from "react-i18next";
import { Reveal } from "./Reveal";

interface Mod {
  icon: LucideIcon;
  key: string;
  versions: string[];
}

const mods: Mod[] = [
  { icon: Calculator, key: "accounting", versions: ["17", "18", "19"] },
  { icon: Package, key: "inventory", versions: ["17", "18", "19"] },
  { icon: ShoppingCart, key: "pos", versions: ["18", "19"] },
  { icon: Wallet, key: "payroll", versions: ["17", "18"] },
  { icon: Users, key: "hr", versions: ["17", "18"] },
  { icon: Truck, key: "fleet", versions: ["18", "19"] },
  { icon: TrendingUp, key: "sales", versions: ["17", "18", "19"] },
  { icon: ClipboardList, key: "purchase", versions: ["17", "18"] },
  { icon: Network, key: "api", versions: ["17", "18", "19"] },
];

export function Modules() {
  const { t } = useTranslation();
  return (
    <section id="modules" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gradient">
            {t("modules.kicker")}
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            {t("modules.title")}
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">{t("modules.subtitle")}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {mods.map((m, i) => {
            const Icon = m.icon;
            return (
              <Reveal key={m.key} delay={i * 0.04}>
                <article className="card-glow group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand-soft transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                    <Icon size={20} className="text-[color:var(--brand-blue)]" />
                  </div>
                  <h3 className="font-display text-base font-semibold">{t(`modules.${m.key}_name`)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t(`modules.${m.key}_desc`)}
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
            {t("modules.footer")}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
