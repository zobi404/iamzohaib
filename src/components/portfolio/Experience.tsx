import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Reveal } from "./Reveal";

export function Experience() {
  const { t } = useTranslation();
  const items = [
    {
      role: t("experience.role1"),
      company: "PRODO",
      period: t("experience.period1"),
      bullets: [
        t("experience.b1_1"),
        t("experience.b1_2"),
        t("experience.b1_3"),
        t("experience.b1_4"),
        t("experience.b1_5"),
      ],
    },
    {
      role: t("experience.role2"),
      company: "Pakistan State Oil",
      period: t("experience.period2"),
      bullets: [t("experience.b2_1")],
    },
  ];

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gradient">
            {t("experience.kicker")}
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            {t("experience.title")}
          </h2>
        </Reveal>

        <div className="relative mt-14 ps-6 md:ps-10">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
            style={{ transformOrigin: "top" }}
            className="absolute start-1.5 top-2 h-full w-px bg-gradient-to-b from-[color:var(--brand-blue)] via-[color:var(--brand-violet)] to-transparent md:start-3"
          />

          <div className="space-y-10">
            {items.map((it, i) => (
              <Reveal key={it.company} delay={i * 0.1}>
                <div className="relative">
                  <div className="absolute -start-[26px] top-3 grid h-6 w-6 place-items-center rounded-full border border-white/15 bg-background shadow-[0_0_0_4px_rgba(139,92,246,0.15)] md:-start-[34px]">
                    <div className="h-2 w-2 rounded-full bg-gradient-brand" />
                  </div>

                  <div className="card-glow rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div className="min-w-0">
                        <h3 className="font-display text-lg font-semibold">{it.role}</h3>
                        <div className="mt-1 flex items-center gap-2 text-sm text-gradient">
                          <Briefcase size={14} />
                          <span className="font-medium">{it.company}</span>
                        </div>
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-muted-foreground">
                        {it.period}
                      </span>
                    </div>

                    <ul className="mt-5 space-y-2.5">
                      {it.bullets.map((b, bi) => (
                        <motion.li
                          key={bi}
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.15 + bi * 0.08, duration: 0.4 }}
                          className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand" />
                          <span>{b}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
