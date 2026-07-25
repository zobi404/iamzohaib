import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Mail, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

function useTypedText(roles: string[]) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  // Reset when roles change (language switch)
  useEffect(() => {
    setI(0);
    setText("");
    setDel(false);
  }, [roles.join("|")]);

  useEffect(() => {
    if (roles.length === 0) return;
    const current = roles[i % roles.length];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), 1600);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setI((i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, roles]);

  return text;
}

export function Hero() {
  const { t } = useTranslation();
  const roles = [t("hero.role1"), t("hero.role2"), t("hero.role3")];
  const typed = useTypedText(roles);

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-bg absolute inset-0" />
        <div className="absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(233,84,32,0.38),transparent_65%)] animate-float-orb" />
        <div
          className="absolute -right-32 top-64 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(119,33,111,0.38),transparent_65%)] animate-float-orb"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="absolute left-1/3 bottom-0 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_center,rgba(221,72,20,0.26),transparent_65%)] animate-float-orb"
          style={{ animationDelay: "-12s" }}
        />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
            {t("hero.available")}
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Muhammad <span className="text-gradient">Zohaib</span>
          </h1>

          <div className="mt-5 text-xl font-medium text-foreground/90 sm:text-2xl md:text-3xl">
            <span className="caret">{typed}</span>
          </div>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t("hero.subtitle")}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="btn-glow inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white"
            >
              {t("hero.viewWork")} <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="btn-glow inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-foreground hover:border-white/25"
            >
              <Mail size={16} /> {t("hero.letsTalk")}
            </a>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label={t("hero.scroll")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={26} />
        </motion.div>
      </motion.a>
    </section>
  );
}
