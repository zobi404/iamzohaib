import { useTranslation } from "react-i18next";
import { Reveal } from "./Reveal";

const clients = ["Biafo Public Limited", "Ismail Global", "Al Babtain Foods", "Allied Metro (UK)"];

export function Clients() {
  const { t } = useTranslation();
  const loop = [...clients, ...clients, ...clients];
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <h2 className="text-center font-display text-2xl font-bold sm:text-3xl">
            {t("clients.title")}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="pause-on-hover relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="animate-marquee flex w-max gap-4 sm:gap-6">
              {loop.map((name, i) => (
                <div
                  key={`${name}-${i}`}
                  className="group flex h-16 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] px-8 sm:px-10"
                >
                  <span className="whitespace-nowrap font-display text-base font-semibold uppercase tracking-[0.18em] text-muted-foreground/70 transition-colors group-hover:text-foreground sm:text-lg">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            {t("clients.footer")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
