import {
  Code2,
  Boxes,
  Smartphone,
  Server,
  Database,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Reveal } from "./Reveal";

interface Cat {
  icon: LucideIcon;
  titleKey: string;
  items: string[];
}

const cats: Cat[] = [
  { icon: Code2, titleKey: "skills.languages", items: ["JavaScript", "Python", "Dart", "QWeb", "XML"] },
  { icon: Boxes, titleKey: "skills.erp", items: ["Odoo 17/18/19", "Odoo.sh", "QWeb Reports", "Odoo REST API"] },
  { icon: Smartphone, titleKey: "skills.mobile", items: ["React Native", "Expo"] },
  { icon: Server, titleKey: "skills.backend", items: ["Django", "Django REST Framework"] },
  { icon: Database, titleKey: "skills.database", items: ["PostgreSQL", "Firebase", "SQLite"] },
  {
    icon: Wrench,
    titleKey: "skills.tools",
    items: ["Git", "GitHub", "Docker", "VS Code", "Android Studio", "PyCharm"],
  },
];

export function Skills() {
  const { t } = useTranslation();
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gradient">
            {t("skills.kicker")}
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            {t("skills.title")}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cats.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.titleKey} delay={i * 0.06}>
                <div className="card-glow group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand-soft text-primary transition-transform group-hover:scale-105">
                    <Icon size={22} className="text-[color:var(--brand-violet)]" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{t(c.titleKey)}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.items.map((it) => (
                      <span
                        key={it}
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-muted-foreground transition-colors group-hover:text-foreground"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
