import { motion } from "motion/react";
import { Brain, CreditCard, Terminal, BarChart3, Clock, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Reveal } from "./Reveal";

interface CaseStudy {
  icon: React.ElementType;
  title: string;
  tagline: string;
  client: string;
  problem: string;
  solution: string;
  outcomes: string[];
  stack: string[];
  accent: "orange" | "purple";
}

function CaseCard({ study, index, labels }: {
  study: CaseStudy;
  index: number;
  labels: { problem: string; solution: string; outcomes: string };
}) {
  const Icon = study.icon;
  const isOrange = study.accent === "orange";

  return (
    <Reveal delay={index * 0.12}>
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
        className="card-glow group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
      >
        <div
          className={`h-1.5 w-full ${
            isOrange ? "bg-gradient-to-r from-[#E95420] to-[#DD4814]" : "bg-gradient-to-r from-[#77216F] to-[#E95420]"
          }`}
        />

        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${
                  isOrange ? "bg-[#E95420]/15 text-[#F29879]" : "bg-[#77216F]/20 text-[#E95420]"
                }`}
              >
                <Icon size={24} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {study.tagline}
                </p>
                <h3 className="font-display text-xl font-bold sm:text-2xl">{study.title}</h3>
              </div>
            </div>
            <span className="hidden rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-muted-foreground sm:inline">
              {study.client}
            </span>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-[1fr_1fr]">
            <div>
              <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#E95420]" />
                {labels.problem}
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">{study.problem}</p>
            </div>
            <div>
              <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                <Terminal size={14} className="text-[#E95420]" />
                {labels.solution}
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">{study.solution}</p>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="mb-3 text-sm font-semibold text-foreground">{labels.outcomes}</h4>
            <ul className="grid gap-3 sm:grid-cols-3">
              {study.outcomes.map((outcome, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3"
                >
                  {i === 0 && study.accent === "orange" && <BarChart3 size={16} className="mt-0.5 shrink-0 text-[#E95420]" />}
                  {i === 0 && study.accent === "purple" && <CreditCard size={16} className="mt-0.5 shrink-0 text-[#E95420]" />}
                  {i === 1 && <Clock size={16} className="mt-0.5 shrink-0 text-[#F29879]" />}
                  {i === 2 && <Shield size={16} className="mt-0.5 shrink-0 text-[#77216F]" />}
                  <span className="text-sm leading-snug text-muted-foreground">{outcome}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {study.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

export function CaseStudies() {
  const { t } = useTranslation();
  const studies: CaseStudy[] = [
    {
      icon: Brain,
      title: t("cases.ai_title"),
      tagline: t("cases.ai_tagline"),
      client: t("cases.ai_client"),
      problem: t("cases.ai_problem"),
      solution: t("cases.ai_solution"),
      outcomes: [t("cases.ai_o1"), t("cases.ai_o2"), t("cases.ai_o3")],
      stack: ["Odoo 19", "MCP", "Claude", "Python", "XML-RPC", "PostgreSQL"],
      accent: "orange",
    },
    {
      icon: CreditCard,
      title: t("cases.pay_title"),
      tagline: t("cases.pay_tagline"),
      client: t("cases.pay_client"),
      problem: t("cases.pay_problem"),
      solution: t("cases.pay_solution"),
      outcomes: [t("cases.pay_o1"), t("cases.pay_o2"), t("cases.pay_o3")],
      stack: ["Odoo 18", "POS", "Payment Terminal SDK", "REST API", "JavaScript", "Python"],
      accent: "purple",
    },
  ];
  const labels = {
    problem: t("cases.problem"),
    solution: t("cases.solution"),
    outcomes: t("cases.outcomes"),
  };

  return (
    <section id="case-studies" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gradient">
            {t("cases.kicker")}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
              {t("cases.title")}
            </h2>
            <p className="max-w-md text-sm text-muted-foreground">{t("cases.subtitle")}</p>
          </div>
        </Reveal>

        <div className="mt-14 space-y-8">
          {studies.map((study, i) => (
            <CaseCard key={study.title} study={study} index={i} labels={labels} />
          ))}
        </div>
      </div>
    </section>
  );
}
