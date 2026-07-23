import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, Linkedin, MapPin, Send, Check } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";

const details = [
  {
    icon: Phone,
    label: "Phone",
    value: "+92-312-0190090",
    href: "tel:+923120190090",
  },
  {
    icon: Mail,
    label: "Email",
    value: "mzohaib01.inbox@gmail.com",
    href: "mailto:mzohaib01.inbox@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "muhammad-zohaib",
    href: "https://pk.linkedin.com/in/muhammad-zohaib-5319b01b7",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Karachi, Pakistan",
    href: "#",
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      toast.success("Message sent — I'll be in touch shortly.");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setSent(false), 3000);
    }, 900);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gradient">
            Contact
          </p>
          <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Let's build your next <span className="text-gradient">ERP solution</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-3">
            {details.map((d, i) => {
              const Icon = d.icon;
              return (
                <Reveal key={d.label} delay={i * 0.06}>
                  <a
                    href={d.href}
                    target={d.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="card-glow flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand-soft">
                      <Icon size={18} className="text-[color:var(--brand-blue)]" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">
                        {d.label}
                      </div>
                      <div className="truncate font-medium">{d.value}</div>
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.15}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
            >
              <div className="grid gap-4">
                <div>
                  <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-foreground outline-none transition focus:border-[color:var(--brand-violet)] focus:bg-white/[0.06]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-foreground outline-none transition focus:border-[color:var(--brand-violet)] focus:bg-white/[0.06]"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-foreground outline-none transition focus:border-[color:var(--brand-violet)] focus:bg-white/[0.06]"
                    placeholder="Tell me about your project…"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading || sent}
                  className="btn-glow relative mt-2 inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white disabled:opacity-80"
                >
                  <AnimatePresence mode="wait">
                    {sent ? (
                      <motion.span
                        key="sent"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        className="inline-flex items-center gap-2"
                      >
                        <Check size={16} /> Sent
                      </motion.span>
                    ) : (
                      <motion.span
                        key="idle"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        className="inline-flex items-center gap-2"
                      >
                        {loading ? "Sending…" : "Send Message"} <Send size={15} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
