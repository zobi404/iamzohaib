import { Linkedin, Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Muhammad Zohaib — {t("footer.rights")}
        </p>
        <div className="flex items-center gap-2">
          <a
            aria-label="LinkedIn"
            href="https://pk.linkedin.com/in/muhammad-zohaib-5319b01b7"
            target="_blank"
            rel="noreferrer"
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-muted-foreground transition hover:text-foreground"
          >
            <Linkedin size={16} />
          </a>
          <a
            aria-label="Email"
            href="mailto:mzohaib01.inbox@gmail.com"
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-muted-foreground transition hover:text-foreground"
          >
            <Mail size={16} />
          </a>
          <a
            aria-label="Phone"
            href="tel:+923120190090"
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-muted-foreground transition hover:text-foreground"
          >
            <Phone size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
