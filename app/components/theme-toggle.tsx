"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-emerald-200/70 bg-white/70 text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-700 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200"
      aria-label="Toggle color theme"
    >
      {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
