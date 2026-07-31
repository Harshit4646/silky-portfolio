import type { ReactNode } from "react";

type GlassPanelProps = {
  children: ReactNode;
  className?: string;
};

export function GlassPanel({ children, className = "" }: GlassPanelProps) {
  return (
    <div
      className={`rounded-3xl border border-white/60 bg-white/70 p-6 shadow-[0_20px_80px_-20px_rgba(15,23,42,0.32)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 ${className}`}
    >
      {children}
    </div>
  );
}
