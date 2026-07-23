import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { Reveal } from "./Reveal";
import headshot from "@/assets/zohaib-headshot.jpg";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 7, suffix: "+", label: "Business Domains Delivered" },
  { value: 60, suffix: "%", label: "Downtime Reduction Achieved" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 md:grid-cols-[280px_1fr] md:items-center lg:gap-20">
        <Reveal className="mx-auto md:mx-0">
          <div className="relative h-56 w-56 sm:h-64 sm:w-64">
            <div className="absolute -inset-2 rounded-full bg-gradient-brand opacity-70 blur-2xl" />
            <div className="relative h-full w-full rounded-full p-[3px] bg-gradient-brand">
              <img
                src={headshot}
                alt="Portrait of Muhammad Zohaib"
                className="h-full w-full rounded-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gradient">
              About
            </p>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Building enterprise ERP that actually ships.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Results-driven Odoo Developer with hands-on experience in Odoo 18 & 19,
              specializing in custom module development, third-party API integrations, and
              ERP-to-mobile connectivity. Delivered production-grade solutions across
              Accounting, HR, Payroll, POS, Fleet, Sales, and Purchase modules.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.15 + i * 0.08}>
                <div className="card-glow rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="font-display text-4xl font-bold text-gradient">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
