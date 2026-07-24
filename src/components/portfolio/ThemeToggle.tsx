import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Palette } from "lucide-react";

type Theme = "ubuntu" | "midnight";
const STORAGE_KEY = "mz-theme";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "ubuntu") root.removeAttribute("data-theme");
  else root.setAttribute("data-theme", theme);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("ubuntu");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = (localStorage.getItem(STORAGE_KEY) as Theme | null) ?? "ubuntu";
    setTheme(saved);
    applyTheme(saved);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "ubuntu" ? "midnight" : "ubuntu";
    setTheme(next);
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  // Render a stable placeholder pre-hydration to avoid mismatch
  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="rounded-lg p-2 text-foreground/80 hover:bg-white/5"
      >
        <Palette size={18} />
      </button>
    );
  }

  const label = theme === "ubuntu" ? "Ubuntu" : "Midnight";

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "ubuntu" ? "Midnight" : "Ubuntu"} theme`}
      title={`Theme: ${label} — click to switch`}
      className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-medium text-foreground/85 transition-colors hover:bg-white/10"
    >
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="grid place-items-center"
      >
        <Palette size={16} className="text-primary" />
      </motion.span>
      <span className="hidden sm:inline">{label}</span>
      <span className="flex h-4 w-7 items-center rounded-full bg-white/10 p-0.5">
        <motion.span
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className={`h-3 w-3 rounded-full bg-gradient-brand ${
            theme === "midnight" ? "ml-auto" : ""
          }`}
        />
      </span>
    </button>
  );
}
