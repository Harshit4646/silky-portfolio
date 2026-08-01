import type { ReactNode } from "react";

type GlassPanelProps = {
  children: ReactNode;
  className?: string;
};

export function GlassPanel({ children, className = "" }: GlassPanelProps) {
  return (
    <div
      className={`rounded-3xl border border-white/60 bg-white/70 p-6 shadow-[0_20px_80px_-20px_rgba(15,23,42,0.32)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/70 hover:shadow-[0_24px_90px_-24px_rgba(16,185,129,0.35)] dark:border-white/10 dark:bg-slate-900/70 dark:hover:border-emerald-400/30 ${className}`}
    >
      {children}
    </div>
  );
}
