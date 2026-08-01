"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="group relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-emerald-200/80 bg-white/80 text-slate-700 shadow-[0_10px_40px_-16px_rgba(16,185,129,0.35)] backdrop-blur transition hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-700 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200"
      aria-label="Toggle color theme"
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400/15 to-cyan-400/15 opacity-0 transition group-hover:opacity-100" />
      {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
