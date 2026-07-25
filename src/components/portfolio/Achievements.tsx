import { Trophy, GraduationCap, Award } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Reveal } from "./Reveal";

export function Achievements() {
  const { t } = useTranslation();
  const items = [
    { icon: Trophy, title: t("achievements.top_title"), detail: t("achievements.top_detail"), date: t("achievements.top_date") },
    { icon: Award, title: t("achievements.runner_title"), detail: t("achievements.runner_detail"), date: t("achievements.runner_date") },
    { icon: GraduationCap, title: t("achievements.bs_title"), detail: t("achievements.bs_detail"), date: t("achievements.bs_date") },
  ];

  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gradient">
            {t("achievements.kicker")}
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            {t("achievements.title")}
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
