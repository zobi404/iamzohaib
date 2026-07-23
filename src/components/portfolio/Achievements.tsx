import { Trophy, GraduationCap, Award } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  {
    icon: Trophy,
    title: "Top Scorer",
    detail: "CosmiCode Coding Competition, Karachi",
    date: "June 2024",
  },
  {
    icon: Award,
    title: "Runner-Up",
    detail: "University Elections, SMIU",
    date: "March 2024",
  },
  {
    icon: GraduationCap,
    title: "BS Software Engineering",
    detail: "Sindh Madressatul Islam University",
    date: "2022 – 2026",
  },
];

export function Achievements() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gradient">
            Achievements
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Recognition & education.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <Reveal key={it.title} delay={i * 0.08}>
                <div className="card-glow flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand-soft">
                    <Icon size={20} className="text-[color:var(--brand-violet)]" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-display text-base font-semibold">{it.title}</div>
                    <div className="text-sm text-muted-foreground">{it.detail}</div>
                    <div className="mt-1 text-xs text-muted-foreground/70">{it.date}</div>
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
