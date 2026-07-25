import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, Linkedin, MapPin, Send, Check } from "lucide-react";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { Reveal } from "./Reveal";

export function Contact() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const details = [
    { icon: Phone, label: t("contact.phone"), value: "+92-312-0190090", href: "tel:+923120190090" },
    { icon: Mail, label: t("contact.email"), value: "mzohaib01.inbox@gmail.com", href: "mailto:mzohaib01.inbox@gmail.com" },
    { icon: Linkedin, label: t("contact.linkedin"), value: "muhammad-zohaib", href: "https://pk.linkedin.com/in/muhammad-zohaib-5319b01b7" },
    { icon: MapPin, label: t("contact.location"), value: t("contact.locationValue"), href: "#" },
  ];

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      toast.success(t("contact.toast"));
      // submit the form to FormSubmit (action attribute on the form)
      try {
        (e.target as HTMLFormElement).submit();
      } catch (err) {
        // if native submit fails, do nothing — user will see toast
      }
    }, 900);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gradient">
            {t("contact.kicker")}
          </p>
          <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            {t("contact.title1")}
            <span className="text-gradient">{t("contact.titleAccent")}</span>
            {t("contact.title2")}
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
              action="https://formsubmit.co/f5cd973dba1ae71e2dfaebfa0a7fa412"
              method="POST"
              onSubmit={onSubmit}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
            >
              {/* FormSubmit hidden fields */}
              <input type="hidden" name="_subject" value="New message from portfolio" />
              <input type="hidden" name="_captcha" value="false" />
              <div className="grid gap-4">
                <div>
                  <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
                    {t("contact.formName")}
                  </label>
                  <input
                    name="name"
                    required
                    type="text"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-foreground outline-none transition focus:border-[color:var(--brand-violet)] focus:bg-white/[0.06]"
                    placeholder={t("contact.phName")}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
                    {t("contact.formEmail")}
                  </label>
                  <input
                    name="email"
                    required
                    type="email"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-foreground outline-none transition focus:border-[color:var(--brand-violet)] focus:bg-white/[0.06]"
                    placeholder={t("contact.phEmail")}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
                    {t("contact.formMessage")}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-foreground outline-none transition focus:border-[color:var(--brand-violet)] focus:bg-white/[0.06]"
                    placeholder={t("contact.phMessage")}
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
                        <Check size={16} /> {t("contact.sent")}
                      </motion.span>
                    ) : (
                      <motion.span
                        key="idle"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        className="inline-flex items-center gap-2"
                      >
                        {loading ? t("contact.sending") : t("contact.send")} <Send size={15} />
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
