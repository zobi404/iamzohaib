import { useRef, type MouseEvent } from "react";
import { ArrowUpRight, Smartphone, Globe } from "lucide-react";
import { Reveal } from "./Reveal";

interface Project {
  title: string;
  tagline: string;
  desc: string;
  stack: string[];
  device: "phone" | "browser";
  accent: string;
}

const projects: Project[] = [
  {
    title: "Allied Metro",
    tagline: "B2B E-Commerce Platform",
    desc: "Customer and admin React Native apps enabling bulk ordering, live inventory management, and multilingual support for a UK-based wholesale client — fully integrated with Odoo ERP.",
    stack: ["React Native", "Redux", "Odoo REST API", "Multilingual"],
    device: "phone",
    accent: "from-blue-500/30 to-violet-500/30",
  },
  {
    title: "MedRep",
    tagline: "Medical Sales Rep Assistant",
    desc: "Cross-platform, offline-first app helping medical reps plan visits, log interactions, and manage inventory in real time — reliable in the field with intermittent connectivity.",
    stack: ["React Native", "SQLite", "Offline-first"],
    device: "phone",
    accent: "from-violet-500/30 to-fuchsia-500/30",
  },
];

function TiltCard({ p }: { p: Project }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${(-y * 8).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(x * 10).toFixed(2)}deg`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transformStyle: "preserve-3d" }}
      className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-transform duration-300 [transform:perspective(1000px)_rotateX(var(--rx,0))_rotateY(var(--ry,0))] sm:p-8"
    >
      <div
        className={`absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br ${p.accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
      />

      {/* Device mock */}
      <div className="relative mb-6 grid place-items-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 sm:p-10">
        {p.device === "phone" ? (
          <div className="relative h-56 w-32 rounded-[26px] border border-white/15 bg-gradient-to-br from-slate-800 to-slate-900 p-1.5 shadow-2xl sm:h-72 sm:w-40">
            <div className="absolute left-1/2 top-1.5 z-10 h-3 w-14 -translate-x-1/2 rounded-full bg-black/70" />
            <div className="grid h-full w-full place-items-center rounded-[20px] bg-gradient-to-br from-[#0B0F19] to-[#141a2a]">
              <Smartphone size={40} className="text-[color:var(--brand-violet)]/70" />
            </div>
          </div>
        ) : (
          <div className="relative h-56 w-full max-w-md rounded-xl border border-white/15 bg-gradient-to-br from-slate-800 to-slate-900 p-2 shadow-2xl">
            <div className="mb-2 flex gap-1">
              <span className="h-2 w-2 rounded-full bg-red-400/60" />
              <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
              <span className="h-2 w-2 rounded-full bg-green-400/60" />
            </div>
            <div className="grid h-[calc(100%-1rem)] w-full place-items-center rounded-lg bg-gradient-to-br from-[#0B0F19] to-[#141a2a]">
              <Globe size={40} className="text-[color:var(--brand-blue)]/70" />
            </div>
          </div>
        )}
      </div>

      <div className="text-xs font-semibold uppercase tracking-wider text-gradient">
        {p.tagline}
      </div>
      <h3 className="mt-1 font-display text-2xl font-bold sm:text-3xl">{p.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {p.stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-muted-foreground"
          >
            {s}
          </span>
        ))}
      </div>

      <button className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gradient hover:gap-2.5 transition-all">
        View Case Study <ArrowUpRight size={16} />
      </button>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gradient">
            Featured Projects
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Selected work.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <TiltCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
