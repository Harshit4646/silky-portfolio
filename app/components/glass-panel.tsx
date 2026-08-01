import type { ReactNode } from "react";

type GlassPanelProps = {
  children: ReactNode;
  className?: string;
};

export function GlassPanel({ children, className = "" }: GlassPanelProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[1.85rem] border border-white/60 bg-white/75 p-6 shadow-[0_24px_90px_-28px_rgba(15,23,42,0.34)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-emerald-300/70 hover:shadow-[0_32px_110px_-30px_rgba(16,185,129,0.32)] dark:border-white/10 dark:bg-slate-900/75 dark:hover:border-emerald-400/30 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="relative">{children}</div>
    </div>
  );
}
