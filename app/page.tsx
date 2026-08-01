"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BookOpenText,
  Brain,
  BriefcaseBusiness,
  Compass,
  Download,
  GraduationCap,
  HeartPulse,
  Mail,
  MapPin,
  Microscope,
  MoveRight,
  Sparkles,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GlassPanel } from "./components/glass-panel";
import { ScrollReveal } from "./components/scroll-reveal";
import { SectionHeading } from "./components/section-heading";
import { ThemeToggle } from "./components/theme-toggle";
import { highlights, journeyPoints, navLinks, profile } from "./data/profile";

const sectionIds = [
  "hero",
  "about",
  "education",
  "internship",
  "current-work",
  "services",
  "research",
  "publications",
  "presentations",
  "skills",
  "faculty-achievement",
  "community-outreach",
  "resume",
  "contact",
];

export default function Home() {
  const hasLinkedIn = Boolean(profile.linkedin);
  const hasFiverr = Boolean(profile.fiverr);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateState = () => {
      const scrollTop = window.scrollY;
      const offset = window.innerHeight * 0.28;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;

      setScrollProgress(nextProgress);
      setScrolled(scrollTop > 24);

      let currentSection = "hero";
      sectionIds.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element && scrollTop + offset >= element.offsetTop) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    updateState();
    window.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", updateState);

    return () => {
      window.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, []);

  return (
    <div id="top" className="portfolio-shell relative min-h-screen overflow-x-hidden text-slate-900 transition-colors dark:text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.16),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(6,182,212,0.16),_transparent_28%),linear-gradient(135deg,_rgba(248,250,252,0.98),_rgba(240,253,250,0.95))] dark:bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.2),_transparent_25%),radial-gradient(circle_at_top_right,_rgba(6,182,212,0.2),_transparent_28%),linear-gradient(135deg,_rgba(2,6,23,0.98),_rgba(15,23,42,0.95))]" />
      <div className="absolute inset-0 -z-10 opacity-70" style={{ backgroundImage: "radial-gradient(circle at top left, rgba(255,255,255,0.65), transparent 38%), radial-gradient(circle at bottom right, rgba(255,255,255,0.4), transparent 42%)" }} />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="ambient-orb ambient-orb-1 bg-emerald-300/50 dark:bg-emerald-400/20" />
        <div className="ambient-orb ambient-orb-2 bg-cyan-300/50 dark:bg-cyan-400/20" />
        <div className="ambient-orb ambient-orb-3 bg-amber-200/50 dark:bg-amber-400/20" />
        <div className="absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.65),_transparent_70%)]" />
        <div className="absolute left-[8%] top-[12%] h-2.5 w-2.5 rounded-full bg-emerald-400/70 shadow-[0_0_24px_rgba(16,185,129,0.5)] animate-pulse" />
        <div className="absolute right-[14%] top-[18%] h-2 w-2 rounded-full bg-cyan-400/70 shadow-[0_0_24px_rgba(6,182,212,0.4)] animate-pulse" />
        <div className="absolute bottom-[20%] left-[18%] h-3 w-3 rounded-full bg-amber-400/70 shadow-[0_0_24px_rgba(245,158,11,0.35)] animate-pulse" />
      </div>

      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white">
        Skip to content
      </a>

      <header className={`sticky top-0 z-50 border-b ${scrolled ? "border-white/70 bg-white/70 py-3 shadow-[0_18px_70px_-30px_rgba(15,23,42,0.38)]" : "border-white/60 bg-white/70 py-4"} backdrop-blur-xl transition-all duration-500 dark:border-white/10 dark:bg-slate-950/70`}>
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-slate-200/70 dark:bg-white/10">
          <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-400 transition-all duration-300" style={{ width: `${scrollProgress}%` }} />
        </div>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="#hero" className="text-lg font-semibold tracking-[0.26em] text-slate-900 transition hover:text-emerald-600 dark:text-white dark:hover:text-emerald-400">
            DR. SILKY
          </Link>
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative text-sm font-medium transition ${isActive ? "text-emerald-600 dark:text-emerald-400" : "text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"}`}
                >
                  {item.label}
                  <span className={`absolute left-0 top-full mt-1.5 h-0.5 w-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition ${isActive ? "opacity-100" : "opacity-0"}`} />
                </a>
              );
            })}
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a href="#contact" className="hidden rounded-full border border-emerald-200/70 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-700 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200 sm:inline-flex">
              Let’s connect
            </a>
          </div>
        </nav>
      </header>

      <main id="content">
        <section id="hero" className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24">
          <ScrollReveal className="relative space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-white/70 px-3.5 py-2 text-sm font-medium text-emerald-700 shadow-[0_14px_45px_-20px_rgba(16,185,129,0.4)] backdrop-blur dark:border-emerald-800/70 dark:bg-emerald-950/40 dark:text-emerald-300"
            >
              <Sparkles size={16} />
              {profile.heroBadge}
            </motion.div>
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.36em] text-cyan-600 dark:text-cyan-400">
                Professional Portfolio
              </p>
              <h1 className="max-w-3xl bg-gradient-to-r from-slate-950 via-slate-800 to-emerald-700 bg-clip-text text-4xl font-semibold tracking-tight text-transparent dark:from-white dark:via-slate-200 dark:to-emerald-300 sm:text-5xl lg:text-6xl">
                {profile.name}
              </h1>
              <div className="flex flex-wrap gap-2">
                {profile.heroTitles.map((title) => (
                  <span key={title} className="inline-flex rounded-full border border-slate-200/70 bg-white/70 px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200">
                    {title}
                  </span>
                ))}
              </div>
              <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                {profile.intro}
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                <MapPin size={16} className="text-emerald-600 dark:text-emerald-400" />
                {profile.location}
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/resume.pdf"
                download
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_-20px_rgba(16,185,129,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_70px_-18px_rgba(6,182,212,0.5)]"
              >
                <Download size={18} />
                Download CV
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-300/70 bg-white/75 px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-700 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200"
              >
                <Mail size={18} />
                Contact Me
                <MoveRight size={16} className="transition group-hover:translate-x-1" />
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.1 + index * 0.06 }}
                    className="group rounded-[1.35rem] border border-white/70 bg-white/70 p-4 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-emerald-300/70 dark:border-white/10 dark:bg-slate-900/70"
                  >
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 text-white transition group-hover:scale-110">
                      <Icon size={18} />
                    </div>
                    <p className="font-semibold text-slate-800 dark:text-white">{item.title}</p>
                  </motion.div>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75, delay: 0.1 }}>
              <GlassPanel className="relative overflow-hidden border-emerald-200/60 bg-gradient-to-br from-emerald-600/10 via-white to-cyan-500/10 p-3 dark:border-emerald-800/50 dark:from-emerald-950/30 dark:to-slate-900/70">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.9),transparent_48%)]" />
                <motion.div animate={{ y: [0, -8, 0], rotate: [0, 1.2, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="relative overflow-hidden rounded-[1.7rem]">
                  <Image
                    src="/profile.jpg"
                    alt={profile.name}
                    width={800}
                    height={900}
                    priority
                    className="h-[420px] w-full rounded-[1.6rem] object-cover object-center shadow-[0_24px_70px_-24px_rgba(15,23,42,0.45)] sm:h-[520px]"
                  />
                </motion.div>
              </GlassPanel>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.16 }} className="mt-4 rounded-[1.45rem] border border-emerald-200/70 bg-white/80 p-5 shadow-[0_18px_60px_-30px_rgba(16,185,129,0.35)] backdrop-blur dark:border-emerald-800/50 dark:bg-emerald-950/30">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300">
                  <BadgeCheck size={16} />
                  Research focus
                </div>
                <p className="mt-3 text-lg font-medium text-slate-800 dark:text-white">{profile.heroFocus}</p>
              </motion.div>
            </motion.div>
          </ScrollReveal>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr]">
              <GlassPanel className="space-y-6">
                <SectionHeading
                  eyebrow="About me"
                  title="A clinician-minded researcher devoted to nutrition-led wellness"
                  description="My work sits at the intersection of science, compassion, and practical dietary guidance."
                />
                <div className="space-y-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                  <p>{profile.about}</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {profile.aboutHighlights.map((item) => (
                      <div key={item} className="rounded-[1.2rem] border border-emerald-100/80 bg-white/70 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm dark:border-emerald-800/40 dark:bg-slate-900/70 dark:text-slate-200">
                        {item}
                      </div>
                    ))}
                  </div>
                  <p>{profile.aboutClosing}</p>
                </div>
              </GlassPanel>

              <GlassPanel className="space-y-5">
                <div className="rounded-[1.4rem] border border-amber-200/70 bg-gradient-to-br from-amber-50 via-white to-cyan-50 p-5 dark:border-amber-800/60 dark:from-amber-950/30 dark:to-slate-900/70">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700 dark:text-amber-300">Professional journey</p>
                  <div className="relative mt-5 space-y-4 before:absolute left-[1.05rem] top-0 h-[calc(100%-0.4rem)] w-px bg-gradient-to-b from-emerald-500/40 via-emerald-400/20 to-transparent" >
                    {journeyPoints.map((point, index) => {
                      const Icon = point.icon;
                      return (
                        <div key={point.title} className="relative flex gap-3 pl-2">
                          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald-200/80 bg-white/80 text-emerald-700 shadow-sm dark:border-emerald-800/70 dark:bg-slate-950/70 dark:text-emerald-300">
                            <Icon size={18} />
                            <span className="absolute inset-0 rounded-full border border-emerald-300/40" />
                          </div>
                          <div className={`rounded-[1.1rem] border border-white/70 bg-white/80 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-900/70 ${index === journeyPoints.length - 1 ? "" : ""}`}>
                            <p className="font-semibold text-slate-800 dark:text-white">{point.title}</p>
                            <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{point.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </GlassPanel>
            </div>
          </ScrollReveal>
        </section>

        <section id="education" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
          <ScrollReveal>
            <div className="space-y-8">
              <SectionHeading
                eyebrow="Education"
                title="Academic training grounded in science and patient care"
                description="A strong academic foundation spanning research, clinical nutrition, and applied food science."
              />
              <div className="relative space-y-6">
                <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-emerald-400/60 via-cyan-400/30 to-transparent" />
                {profile.education.map((item, index) => (
                  <div key={item.degree} className="relative pl-16">
                    <div className="absolute left-4 top-5 h-4 w-4 rounded-full border-4 border-white bg-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,0.18)] dark:border-slate-950" />
                    <GlassPanel className={`space-y-3 ${index % 2 === 0 ? "bg-white/80" : "bg-slate-50/80 dark:bg-slate-900/70"}`}>
                      <div className="inline-flex rounded-full border border-emerald-200/80 bg-emerald-50/80 px-3 py-1 text-sm font-medium text-emerald-700 dark:border-emerald-800/70 dark:bg-emerald-950/30 dark:text-emerald-300">
                        {item.period}
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.degree}</h3>
                      <p className="text-base font-medium text-slate-700 dark:text-slate-200">{item.institution}</p>
                      {item.details ? <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{item.details}</p> : null}
                    </GlassPanel>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section id="internship" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
          <ScrollReveal>
            <GlassPanel className="overflow-hidden rounded-[2rem] border-cyan-200/70 bg-gradient-to-br from-cyan-50/80 via-white to-emerald-50/70 p-0 dark:border-cyan-800/50 dark:from-cyan-950/30 dark:to-slate-900/70">
              <div className="grid gap-0 lg:grid-cols-[0.8fr_1.2fr]">
                <div className="space-y-4 border-b border-slate-200/70 p-8 lg:border-b-0 lg:border-r lg:p-10">
                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/80 bg-white/70 px-3 py-1.5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700 dark:border-cyan-800/70 dark:bg-slate-900/70 dark:text-cyan-300">
                    <BriefcaseBusiness size={16} />
                    Internship
                  </div>
                  <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">{profile.internship.hospital}</h2>
                  <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">{profile.internship.location}</p>
                  <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">{profile.internship.period}</p>
                </div>
                <div className="p-8 lg:p-10">
                  <p className="text-base leading-8 text-slate-600 dark:text-slate-300">{profile.internship.details}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {profile.internship.focusAreas.map((item) => (
                      <li key={item} className="rounded-[1.1rem] border border-slate-200/70 bg-white/70 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-200">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlassPanel>
          </ScrollReveal>
        </section>

        <section id="current-work" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
          <ScrollReveal>
            <GlassPanel className="rounded-[2rem] border-amber-200/70 bg-gradient-to-br from-amber-50/80 via-white to-emerald-50/70 p-8 dark:border-amber-800/60 dark:from-amber-950/30 dark:to-slate-900/70">
              <div className="max-w-3xl space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-white/70 px-3 py-1.5 text-sm font-semibold uppercase tracking-[0.3em] text-amber-700 dark:border-amber-800/70 dark:bg-slate-900/70 dark:text-amber-300">
                  <HeartPulse size={16} />
                  Current Work
                </div>
                <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">{profile.currentWork.title}</h2>
                <p className="text-base leading-8 text-slate-600 dark:text-slate-300">{profile.currentWork.description}</p>
              </div>
            </GlassPanel>
          </ScrollReveal>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
          <ScrollReveal>
            <div className="space-y-8">
              <SectionHeading
                eyebrow="Services"
                title="Nutrition support shaped around individual needs"
                description="Evidence-led guidance for everyday wellness, therapeutic nutrition, and long-term health goals."
              />
              {profile.services.length > 0 ? (
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {profile.services.map((service, index) => {
                    const iconMap = [GraduationCap, HeartPulse, Microscope, BookOpenText, Users, Compass];
                    const Icon = iconMap[index % iconMap.length];
                    return (
                      <GlassPanel key={service} className="group rounded-[1.35rem] border border-emerald-100/80 bg-white/80 p-5 transition hover:-translate-y-1 hover:border-emerald-300 dark:border-emerald-900/40 dark:bg-slate-900/70">
                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white transition group-hover:scale-110">
                          <Icon size={18} />
                        </div>
                        <p className="text-base font-semibold text-slate-800 dark:text-white">{service}</p>
                      </GlassPanel>
                    );
                  })}
                </div>
              ) : (
                <GlassPanel className="rounded-[1.4rem] border border-dashed border-emerald-200/80 bg-white/70 p-6 text-sm leading-7 text-slate-600 dark:border-emerald-800/60 dark:bg-slate-900/70 dark:text-slate-300">
                  Services information has not yet been provided in the profile data. Please share the available consultation services so they can be displayed here.
                </GlassPanel>
              )}
            </div>
          </ScrollReveal>
        </section>

        <section id="research" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <GlassPanel className="space-y-4">
                <SectionHeading
                  eyebrow="Research interests"
                  title="Focused on impactful, patient-centered nutrition science"
                  description="Research areas centered on prevention, treatment support, and practical dietary strategies."
                />
              </GlassPanel>
              <div className="grid gap-6">
                <GlassPanel className="space-y-4">
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300">
                    <Microscope size={16} />
                    Research areas
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {profile.researchInterests.map((item) => (
                      <div key={item} className="rounded-[1.1rem] border border-slate-200/70 bg-white/70 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200">
                        {item}
                      </div>
                    ))}
                  </div>
                </GlassPanel>
                <GlassPanel className="space-y-4">
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">
                    <Brain size={16} />
                    Research competencies
                  </div>
                  {profile.researchCompetencies.length > 0 ? (
                    <div className="grid gap-3 sm:grid-cols-2">
                      {profile.researchCompetencies.map((item) => (
                        <div key={item} className="rounded-[1.1rem] border border-slate-200/70 bg-white/70 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200">
                          {item}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                      Additional research competencies are not yet included in the profile data.
                    </p>
                  )}
                </GlassPanel>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section id="publications" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
          <ScrollReveal>
            <div className="space-y-8">
              <SectionHeading
                eyebrow="Publications"
                title="Research contributions shaping modern nutrition practice"
                description="A curated collection of scholarship and clinical insight designed to support evidence-led care."
              />
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {profile.publications.map((publication, index) => (
                  <GlassPanel key={publication.title} className="group space-y-4 rounded-[1.45rem] border border-slate-200/70 bg-white/80 transition hover:-translate-y-1.5 hover:border-emerald-300/70 dark:border-white/10 dark:bg-slate-900/70">
                    <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                      <span className="rounded-full border border-emerald-200/70 bg-emerald-50/80 px-2.5 py-1 text-emerald-700 dark:border-emerald-800/70 dark:bg-emerald-950/30 dark:text-emerald-300">#{index + 1}</span>
                      <span className="rounded-full border border-slate-200/70 bg-slate-50/80 px-2.5 py-1 dark:border-white/10 dark:bg-slate-800/60">{publication.year}</span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-slate-900 transition group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-300">{publication.title}</h3>
                      <p className="text-sm font-medium uppercase tracking-[0.28em] text-emerald-600 dark:text-emerald-300">{publication.journal}</p>
                      <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{publication.summary}</p>
                    </div>
                  </GlassPanel>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section id="presentations" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
          <ScrollReveal>
            <div className="space-y-8">
              <SectionHeading
                eyebrow="Poster presentations"
                title="Research communicated through scholarly presentations"
                description="Selected presentations that reflect the academic and clinical focus of the work."
              />
              <div className="grid gap-6 lg:grid-cols-2">
                {profile.conferences.map((conference, index) => (
                  <GlassPanel key={conference.title} className={`space-y-3 rounded-[1.45rem] ${index % 2 === 0 ? "bg-gradient-to-br from-cyan-50/80 to-white dark:from-cyan-950/30 dark:to-slate-900/70" : "bg-gradient-to-br from-emerald-50/80 to-white dark:from-emerald-950/30 dark:to-slate-900/70"}`}>
                    <div className="inline-flex rounded-full border border-cyan-200/80 bg-cyan-50/80 px-3 py-1 text-sm font-medium text-cyan-700 dark:border-cyan-800/70 dark:bg-cyan-950/30 dark:text-cyan-300">
                      {conference.year}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{conference.title}</h3>
                    <p className="text-sm font-medium uppercase tracking-[0.28em] text-slate-600 dark:text-slate-300">{conference.type}</p>
                    <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{conference.organization}</p>
                  </GlassPanel>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
          <ScrollReveal>
            <div className="space-y-8">
              <SectionHeading
                eyebrow="Skills"
                title="Combining clinical insight with collaborative care"
                description="The core strengths that support high-quality dietetic practice and patient engagement."
              />
              <div className="grid gap-6 lg:grid-cols-3">
                {profile.skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <GlassPanel key={skill.title} className={`space-y-4 rounded-[1.45rem] ${index % 2 === 0 ? "bg-gradient-to-br from-emerald-50/80 to-white dark:from-emerald-950/30 dark:to-slate-900/70" : "bg-gradient-to-br from-cyan-50/80 to-white dark:from-cyan-950/30 dark:to-slate-900/70"}`}>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-[0_16px_46px_-18px_rgba(16,185,129,0.5)]">
                        <Icon size={20} />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{skill.title}</h3>
                      <ul className="space-y-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                        {skill.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </GlassPanel>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section id="faculty-achievement" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
          <ScrollReveal>
            <GlassPanel className="rounded-[2rem] border-amber-200/70 bg-gradient-to-br from-amber-50/80 via-white to-cyan-50/70 p-8 dark:border-amber-800/60 dark:from-amber-950/30 dark:to-slate-900/70">
              <div className="max-w-2xl space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-white/70 px-3 py-1.5 text-sm font-semibold uppercase tracking-[0.3em] text-amber-700 dark:border-amber-800/70 dark:bg-slate-900/70 dark:text-amber-300">
                  <BadgeCheck size={16} />
                  Faculty Achievement
                </div>
                <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">{profile.facultyAchievement.highlight}</h2>
                <p className="text-lg font-medium text-slate-700 dark:text-slate-200">{profile.facultyAchievement.context}</p>
                <p className="text-base leading-8 text-slate-600 dark:text-slate-300">{profile.facultyAchievement.organization}</p>
              </div>
            </GlassPanel>
          </ScrollReveal>
        </section>

        <section id="community-outreach" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
          <ScrollReveal>
            <GlassPanel className="overflow-hidden rounded-[2rem] border-emerald-200/70 bg-gradient-to-br from-emerald-50/80 via-white to-cyan-50/70 p-8 dark:border-emerald-800/60 dark:from-emerald-950/30 dark:to-slate-900/70">
              <div className="relative">
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-emerald-400/20 blur-3xl" />
                <SectionHeading
                  eyebrow="Community Outreach"
                  title="Building awareness through inclusive nutrition education"
                  description="Actively involved in academic events and university-led nutrition awareness campaigns."
                />
              </div>
            </GlassPanel>
          </ScrollReveal>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
              <GlassPanel className="space-y-4">
                <SectionHeading
                  eyebrow="Languages"
                  title="Communication across academic and clinical settings"
                  description="Professional communication is supported by fluency in the languages most relevant to the work."
                />
                <div className="flex flex-wrap gap-3">
                  {profile.languages.map((language) => (
                    <span key={language} className="rounded-full border border-slate-200/70 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200">
                      {language}
                    </span>
                  ))}
                </div>
              </GlassPanel>
              <GlassPanel className="space-y-4">
                <SectionHeading
                  eyebrow="Interests"
                  title="A well-rounded professional life"
                  description="Personal interests that complement a thoughtful and balanced approach to wellness."
                />
                <div className="flex flex-wrap gap-3">
                  {profile.interests.map((interest) => (
                    <span key={interest} className="rounded-full border border-emerald-200/80 bg-emerald-50/80 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm dark:border-emerald-800/70 dark:bg-emerald-950/30 dark:text-emerald-300">
                      {interest}
                    </span>
                  ))}
                </div>
              </GlassPanel>
            </div>
          </ScrollReveal>
        </section>

        <section id="resume" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
          <ScrollReveal>
            <GlassPanel className="flex flex-col gap-8 rounded-[2rem] border-emerald-200/70 bg-gradient-to-br from-emerald-600/10 via-white to-cyan-500/10 p-8 dark:border-emerald-800/60 dark:from-emerald-950/40 dark:to-cyan-950/30 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-white/70 px-3 py-1.5 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700 dark:border-emerald-800/70 dark:bg-slate-900/70 dark:text-emerald-300">
                  <Download size={16} />
                  Resume
                </div>
                <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Download a polished overview of my credentials and experience.</h2>
                <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
                  A concise PDF summary of my academic background, clinical internship, research interests, and professional strengths.
                </p>
              </div>
              <a
                href="/resume.pdf"
                download
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_-18px_rgba(15,23,42,0.6)] transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-900"
              >
                <Download size={18} />
                Download PDF
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </a>
            </GlassPanel>
          </ScrollReveal>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
          <ScrollReveal>
            <GlassPanel className="space-y-6 rounded-[2rem] border-cyan-200/70 bg-gradient-to-br from-cyan-50 to-white p-8 dark:border-cyan-800/50 dark:from-cyan-950/40 dark:to-slate-900/70">
              <SectionHeading
                eyebrow="Contact"
                title={profile.contactHeading}
                description={profile.contactDescription}
              />
              <div className="grid gap-4 md:grid-cols-3">
                <a href={`mailto:${profile.email}`} className="group inline-flex items-center gap-2 rounded-[1.25rem] border border-slate-200/70 bg-white/70 px-4 py-4 text-lg font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-700 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:text-emerald-300">
                  <Mail size={18} />
                  sharmasilky3003@gmail.com
                </a>
                {hasLinkedIn ? (
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-[1.25rem] border border-slate-200/70 bg-white/70 px-4 py-4 text-lg font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-700 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:text-cyan-300">
                    <ArrowUpRight size={18} />
                    LinkedIn
                    <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                  </a>
                ) : (
                  <span className="rounded-[1.25rem] border border-slate-200/70 bg-white/70 px-4 py-4 text-lg font-medium text-slate-600 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300">
                    LinkedIn link pending
                  </span>
                )}
                {hasFiverr ? (
                  <a href={profile.fiverr} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-[1.25rem] border border-slate-200/70 bg-white/70 px-4 py-4 text-lg font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-amber-300 hover:text-amber-700 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:text-amber-300">
                    <ArrowUpRight size={18} />
                    Fiverr
                    <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                  </a>
                ) : (
                  <span className="rounded-[1.25rem] border border-slate-200/70 bg-white/70 px-4 py-4 text-lg font-medium text-slate-600 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300">
                    {profile.contactNote}
                  </span>
                )}
              </div>
              <a href="#top" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700 transition hover:text-emerald-600 dark:text-emerald-300">
                Back to top
                <ArrowDown className="rotate-180" size={16} />
              </a>
            </GlassPanel>
          </ScrollReveal>
        </section>
      </main>

      <footer className="border-t border-white/60 bg-white/60 py-8 text-center text-sm text-slate-600 backdrop-blur dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {profile.name}. Crafted with care for thoughtful, evidence-led nutrition practice.</p>
        </div>
      </footer>
    </div>
  );
}
