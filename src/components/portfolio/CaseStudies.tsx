import { motion } from "motion/react";
import { Brain, CreditCard, ArrowUpRight, Terminal, BarChart3, Clock, Shield } from "lucide-react";
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

const studies: CaseStudy[] = [
  {
    icon: Brain,
    title: "Agentic AI in Odoo 19",
    tagline: "MCP + Claude Integration",
    client: "PRODO",
    problem:
      "Leadership needed fast, conversational access to Odoo analytics and repetitive operational tasks were slowing day-to-day teams.",
    solution:
      "Connected Odoo 19 to Claude via the Model Context Protocol (MCP), giving the AI assistant secure, real-time read/write access to Odoo records, reports, and business objects.",
    outcomes: [
      "Executives query live KPIs and sales trends in plain English",
      "Day-to-day users trigger approvals, follow-ups, and record updates through chat",
      "Reduced reporting turnaround from hours to minutes",
    ],
    stack: ["Odoo 19", "MCP", "Claude", "Python", "XML-RPC", "PostgreSQL"],
    accent: "orange",
  },
  {
    icon: CreditCard,
    title: "Card Payments Inside Odoo",
    tagline: "Payment Terminal Integration",
    client: "Retail / POS Client",
    problem:
      "POS and sales teams had to run card transactions on separate terminals, then manually reconcile them back into Odoo — causing delays and reconciliation errors.",
    solution:
      "Built a direct Odoo-to-payment-terminal bridge, pairing card readers with Odoo POS and Sales orders so transactions flow straight into the ERP in real time.",
    outcomes: [
      "Payments captured in Odoo automatically with invoice/ledger entries",
      "Faster checkout with fewer manual reconciliation steps",
      "Reconciliation errors reduced significantly",
    ],
    stack: ["Odoo 18", "POS", "Payment Terminal SDK", "REST API", "JavaScript", "Python"],
    accent: "purple",
  },
];

function CaseCard({ study, index }: { study: CaseStudy; index: number }) {
  const Icon = study.icon;
  const isOrange = study.accent === "orange";

  return (
    <Reveal delay={index * 0.12}>
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
        className="card-glow group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
      >
        {/* Top accent bar */}
        <div
          className={`h-1.5 w-full ${
            isOrange ? "bg-gradient-to-r from-[#E95420] to-[#DD4814]" : "bg-gradient-to-r from-[#77216F] to-[#E95420]"
          }`}
        />

        <div className="p-6 sm:p-8">
          {/* Header */}
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

          {/* Body */}
          <div className="mt-6 grid gap-6 sm:grid-cols-[1fr_1fr]">
            <div>
              <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#E95420]" />
                Problem
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">{study.problem}</p>
            </div>
            <div>
              <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                <Terminal size={14} className="text-[#E95420]" />
                Solution
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">{study.solution}</p>
            </div>
          </div>

          {/* Outcomes */}
          <div className="mt-6">
            <h4 className="mb-3 text-sm font-semibold text-foreground">Key Outcomes</h4>
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

          {/* Stack */}
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
  return (
    <section id="case-studies" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gradient">
            Case Studies
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
              Real integrations, real impact.
            </h2>
            <p className="max-w-md text-sm text-muted-foreground">
              Two recent production problems solved end-to-end inside Odoo: AI-driven operations and seamless in-person payments.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 space-y-8">
          {studies.map((study, i) => (
            <CaseCard key={study.title} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
