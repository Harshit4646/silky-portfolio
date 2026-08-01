import Image from "next/image";
import { ArrowDown, ArrowUpRight, Download, Mail, MapPin, Sparkles } from "lucide-react";
import Link from "next/link";
import { GlassPanel } from "./components/glass-panel";
import { ScrollReveal } from "./components/scroll-reveal";
import { SectionHeading } from "./components/section-heading";
import { ThemeToggle } from "./components/theme-toggle";
import { highlights, journeyPoints, navLinks, profile } from "./data/profile";

export default function Home() {
  const hasLinkedIn = Boolean(profile.linkedin);
  const hasFiverr = Boolean(profile.fiverr);

  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden text-slate-900 transition-colors dark:text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.16),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(6,182,212,0.16),_transparent_28%),linear-gradient(135deg,_rgba(248,250,252,0.98),_rgba(240,253,250,0.95))] dark:bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.2),_transparent_25%),radial-gradient(circle_at_top_right,_rgba(6,182,212,0.2),_transparent_28%),linear-gradient(135deg,_rgba(2,6,23,0.98),_rgba(15,23,42,0.95))]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.18)_45%,transparent_100%)] opacity-50" />

      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white">
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-white/60 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="#hero" className="text-lg font-semibold tracking-[0.22em] text-slate-900 dark:text-white">
            DR. SILKY
          </Link>
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400">
                {item.label}
              </a>
            ))}
          </div>
          <ThemeToggle />
        </nav>
      </header>

      <main id="content">
        <section id="hero" className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
          <ScrollReveal className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50/80 px-3 py-2 text-sm font-medium text-emerald-700 shadow-sm backdrop-blur dark:border-emerald-800/70 dark:bg-emerald-950/40 dark:text-emerald-300">
              <Sparkles size={16} />
              {profile.heroBadge}
            </div>
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600 dark:text-cyan-400">
                Professional Portfolio
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                {profile.name}
              </h1>
              <div className="flex flex-wrap gap-2">
                {profile.heroTitles.map((title) => (
                  <span key={title} className="inline-flex rounded-full border border-slate-200/70 bg-white/70 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200">
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
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5"
              >
                <Download size={18} />
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300/70 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-700 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200"
              >
                <Mail size={18} />
                Contact Me
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-2xl border border-white/70 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-900/70">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 text-white">
                      <Icon size={18} />
                    </div>
                    <p className="font-semibold text-slate-800 dark:text-white">{item.title}</p>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <GlassPanel className="space-y-6">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-emerald-600/10 via-cyan-500/10 to-amber-400/10 p-3">
                <Image
                  src="/profile.jpg"
                  alt={profile.name}
                  width={800}
                  height={900}
                  priority
                  className="h-[420px] w-full rounded-[1.6rem] object-cover object-center shadow-lg sm:h-[520px]"
                />
              </div>
              <div className="space-y-3 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4 dark:border-emerald-900/40 dark:bg-emerald-950/30">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300">Research focus</p>
                <p className="text-lg font-medium text-slate-800 dark:text-white">{profile.heroFocus}</p>
              </div>
            </GlassPanel>
          </ScrollReveal>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
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
                      <div key={item} className="rounded-2xl border border-emerald-100/80 bg-white/70 px-4 py-3 text-sm font-medium text-slate-700 dark:border-emerald-800/40 dark:bg-slate-900/70 dark:text-slate-200">
                        {item}
                      </div>
                    ))}
                  </div>
                  <p>{profile.aboutClosing}</p>
                </div>
              </GlassPanel>

              <GlassPanel className="space-y-5">
                <div className="rounded-2xl border border-amber-200/70 bg-gradient-to-br from-amber-50 to-white p-5 dark:border-amber-800/60 dark:from-amber-950/30 dark:to-slate-900/70">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700 dark:text-amber-300">Professional journey</p>
                  <div className="mt-4 space-y-4">
                    {journeyPoints.map((point) => {
                      const Icon = point.icon;
                      return (
                        <div key={point.title} className="flex gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white dark:bg-emerald-600">
                            <Icon size={18} />
                          </div>
                          <div>
                            <p className="font-semibold text-slate-800 dark:text-white">{point.title}</p>
                            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{point.description}</p>
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
              <div className="grid gap-6 lg:grid-cols-2">
                {profile.education.map((item) => (
                  <GlassPanel key={item.degree} className="space-y-3">
                    <div className="inline-flex rounded-full border border-emerald-200/80 bg-emerald-50/80 px-3 py-1 text-sm font-medium text-emerald-700 dark:border-emerald-800/70 dark:bg-emerald-950/30 dark:text-emerald-300">
                      {item.period}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.degree}</h3>
                    <p className="text-base font-medium text-slate-700 dark:text-slate-200">{item.institution}</p>
                    {item.details ? <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{item.details}</p> : null}
                  </GlassPanel>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section id="internship" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
          <ScrollReveal>
            <GlassPanel className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">Internship</p>
                <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">{profile.internship.hospital}</h2>
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">{profile.internship.location}</p>
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">{profile.internship.period}</p>
              </div>
              <div className="rounded-3xl border border-white/70 bg-gradient-to-br from-cyan-50 to-white p-6 dark:border-white/10 dark:from-cyan-950/40 dark:to-slate-900/70">
                <p className="text-base leading-8 text-slate-600 dark:text-slate-300">{profile.internship.details}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {profile.internship.focusAreas.map((item) => (
                    <li key={item} className="rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-200">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </GlassPanel>
          </ScrollReveal>
        </section>

        <section id="current-work" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
          <ScrollReveal>
            <GlassPanel className="rounded-[2rem] border-amber-200/70 bg-gradient-to-br from-amber-50/80 via-white to-emerald-50/70 p-8 dark:border-amber-800/60 dark:from-amber-950/30 dark:to-slate-900/70">
              <div className="max-w-3xl space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700 dark:text-amber-300">Current Work</p>
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
                  {profile.services.map((service) => (
                    <GlassPanel key={service} className="rounded-2xl border border-emerald-100/80 bg-white/80 p-5 transition hover:-translate-y-1 hover:border-emerald-300 dark:border-emerald-900/40 dark:bg-slate-900/70">
                      <p className="text-base font-semibold text-slate-800 dark:text-white">{service}</p>
                    </GlassPanel>
                  ))}
                </div>
              ) : (
                <GlassPanel className="rounded-2xl border border-dashed border-emerald-200/80 bg-white/70 p-6 text-sm leading-7 text-slate-600 dark:border-emerald-800/60 dark:bg-slate-900/70 dark:text-slate-300">
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
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300">Research areas</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {profile.researchInterests.map((item) => (
                      <div key={item} className="rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200">
                        {item}
                      </div>
                    ))}
                  </div>
                </GlassPanel>
                <GlassPanel className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">Research competencies</p>
                  {profile.researchCompetencies.length > 0 ? (
                    <div className="grid gap-3 sm:grid-cols-2">
                      {profile.researchCompetencies.map((item) => (
                        <div key={item} className="rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200">
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
                  <GlassPanel key={publication.title} className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 dark:bg-slate-800">#{index + 1}</span>
                      <span>{publication.year}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{publication.title}</h3>
                    <p className="text-sm font-medium uppercase tracking-[0.28em] text-emerald-600 dark:text-emerald-300">{publication.journal}</p>
                    <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{publication.summary}</p>
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
                {profile.conferences.map((conference) => (
                  <GlassPanel key={conference.title} className="space-y-3">
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
                {profile.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <GlassPanel key={skill.title} className="space-y-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white">
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
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700 dark:text-amber-300">Faculty Achievement</p>
                <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">{profile.facultyAchievement.highlight}</h2>
                <p className="text-lg font-medium text-slate-700 dark:text-slate-200">{profile.facultyAchievement.context}</p>
                <p className="text-base leading-8 text-slate-600 dark:text-slate-300">{profile.facultyAchievement.organization}</p>
              </div>
            </GlassPanel>
          </ScrollReveal>
        </section>

        <section id="community-outreach" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
          <ScrollReveal>
            <GlassPanel className="rounded-[2rem] border-emerald-200/70 bg-gradient-to-br from-emerald-50/80 via-white to-cyan-50/70 p-8 dark:border-emerald-800/60 dark:from-emerald-950/30 dark:to-slate-900/70">
              <SectionHeading
                eyebrow="Community Outreach"
                title="Building awareness through inclusive nutrition education"
                description="Actively involved in academic events and university-led nutrition awareness campaigns."
              />
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
                    <span key={language} className="rounded-full border border-slate-200/70 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200">
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
                    <span key={interest} className="rounded-full border border-emerald-200/80 bg-emerald-50/80 px-4 py-2 text-sm font-semibold text-emerald-700 dark:border-emerald-800/70 dark:bg-emerald-950/30 dark:text-emerald-300">
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
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300">Resume</p>
                <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Download a polished overview of my credentials and experience.</h2>
                <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
                  A concise PDF summary of my academic background, clinical internship, research interests, and professional strengths.
                </p>
              </div>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-900"
              >
                <Download size={18} />
                Download PDF
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
                <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-4 text-lg font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-700 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:text-emerald-300">
                  <Mail size={18} />
                  Email
                </a>
                {hasLinkedIn ? (
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-4 text-lg font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-700 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:text-cyan-300">
                    <ArrowUpRight size={18} />
                    LinkedIn
                  </a>
                ) : (
                  <span className="rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-4 text-lg font-medium text-slate-600 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300">
                    LinkedIn link pending
                  </span>
                )}
                {hasFiverr ? (
                  <a href={profile.fiverr} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-4 text-lg font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-amber-300 hover:text-amber-700 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:text-amber-300">
                    <ArrowUpRight size={18} />
                    Fiverr
                  </a>
                ) : (
                  <span className="rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-4 text-lg font-medium text-slate-600 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300">
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
