import {
  Code2,
  Boxes,
  Smartphone,
  Server,
  Database,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";

interface Cat {
  icon: LucideIcon;
  title: string;
  items: string[];
}

const cats: Cat[] = [
  { icon: Code2, title: "Languages", items: ["JavaScript", "Python", "Dart", "QWeb", "XML"] },
  { icon: Boxes, title: "ERP", items: ["Odoo 17/18/19", "Odoo.sh", "QWeb Reports", "Odoo REST API"] },
  { icon: Smartphone, title: "Mobile", items: ["React Native", "Expo"] },
  { icon: Server, title: "Backend", items: ["Django", "Django REST Framework"] },
  { icon: Database, title: "Database", items: ["PostgreSQL", "Firebase", "SQLite"] },
  {
    icon: Wrench,
    title: "Tools",
    items: ["Git", "GitHub", "Docker", "VS Code", "Android Studio", "PyCharm"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gradient">
            Skills
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            A full-stack toolkit for Odoo delivery.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cats.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={i * 0.06}>
                <div className="card-glow group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand-soft text-primary transition-transform group-hover:scale-105">
                    <Icon size={22} className="text-[color:var(--brand-violet)]" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{c.title}</h3>
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
