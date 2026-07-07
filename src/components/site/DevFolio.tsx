import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export type DevDomain = "ai" | "data" | "fullstack" | "cv" | "leadership" | "systems";

export interface DevProject { emoji: string; bg: "blue" | "green" | "red"; tags: string[]; title: string; description: string; }
export interface DevJourney { period?: string; current?: boolean; role: string; org: string; description: string; }
export interface DevStat { value: string; tag: string; title: string; description: string; }
export interface DevTech { name: string; level: number; category?: string; }
export interface DevFolioProps {
  firstName: string;
  rest: string;
  fullName: string;
  tagline: string;
  role: string;
  intro: string;
  emoji: string;
  profileImage?: string;
  aboutText: string;
  quote?: string;
  domain?: DevDomain;
  domainLabel?: string;
  techStack?: DevTech[];
  highlights?: string[];
  stats: DevStat[];
  skills: string[];
  projects: DevProject[];
  journey: DevJourney[];
}

const DOMAIN_THEME: Record<DevDomain, { accent: string; accentSoft: string; ring: string; from: string; to: string; label: string; icon: string; tagline: string }> = {
  ai: { accent: "text-violet-300", accentSoft: "bg-violet-400/10 border-violet-300/30", ring: "rgba(167,139,250,0.45)", from: "from-violet-400", to: "to-fuchsia-400", label: "AI / ML Engineering", icon: "🧠", tagline: "Neural systems · LLMs · Agentic AI" },
  data: { accent: "text-sky-300", accentSoft: "bg-sky-400/10 border-sky-300/30", ring: "rgba(125,211,252,0.45)", from: "from-sky-400", to: "to-cyan-400", label: "Data Engineering", icon: "📊", tagline: "Pipelines · Lakehouse · Orchestration" },
  fullstack: { accent: "text-emerald-300", accentSoft: "bg-emerald-400/10 border-emerald-300/30", ring: "rgba(74,222,128,0.45)", from: "from-emerald-400", to: "to-teal-400", label: "Full Stack Engineering", icon: "⚡", tagline: "React · APIs · Cloud · DevOps" },
  cv: { accent: "text-amber-300", accentSoft: "bg-amber-400/10 border-amber-300/30", ring: "rgba(252,211,77,0.45)", from: "from-amber-400", to: "to-orange-400", label: "Computer Vision & Systems", icon: "👁️", tagline: "YOLO · CNN · Real-time vision" },
  leadership: { accent: "text-rose-300", accentSoft: "bg-rose-400/10 border-rose-300/30", ring: "rgba(251,113,133,0.45)", from: "from-rose-400", to: "to-violet-400", label: "Founder · Architect", icon: "👑", tagline: "Vision · Architecture · Ecosystem" },
  systems: { accent: "text-cyan-300", accentSoft: "bg-cyan-400/10 border-cyan-300/30", ring: "rgba(34,211,238,0.45)", from: "from-cyan-400", to: "to-sky-400", label: "Systems Engineering", icon: "⚙️", tagline: "Systems · Automation · Cloud" },
};

export function DevFolioPage(d: DevFolioProps) {
  const theme = DOMAIN_THEME[(d.domain as DevDomain) ?? "fullstack"] ?? DOMAIN_THEME.fullstack;
  const bgMap: Record<string, string> = {
    blue: "bg-gradient-to-br from-sky-500/20 via-violet-500/10 to-transparent border-sky-400/20",
    green: "bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-transparent border-emerald-400/20",
    red: "bg-gradient-to-br from-rose-500/20 via-amber-500/10 to-transparent border-rose-400/20",
  };

  return (
    <div className="text-white selection:bg-violet-500/30 aurora-bg min-h-screen relative overflow-hidden">
      <div className="aurora-blob animate-aurora" style={{ width: 560, height: 560, top: -160, left: -140, background: theme.ring }} />
      <div className="aurora-blob animate-aurora" style={{ width: 480, height: 480, top: 320, right: -160, background: "rgba(74,222,128,0.18)", animationDelay: "3s" }} />
      <div className="aurora-blob animate-aurora" style={{ width: 420, height: 420, bottom: -120, left: "40%", background: "rgba(167,139,250,0.16)", animationDelay: "6s" }} />

      <div className="relative z-10">
        {/* NAV */}
        <nav className="flex items-center justify-between px-6 md:px-10 py-5 max-w-7xl w-full mx-auto">
          <Link to="/" className="text-xs font-mono tracking-widest text-gray-400 hover:text-white transition flex items-center gap-2">
            <span>←</span><span>iThynx</span>
          </Link>
          <span className="text-lg font-serif-display tracking-tight">Dev<span className={theme.accent}>Folio</span></span>
          <div className={`aurora-pill px-3 py-1.5 rounded-full text-[10px] font-mono tracking-wider flex items-center gap-2 ${theme.accent}`}>
            <span className="text-xs">{theme.icon}</span>
            <span className="hidden sm:inline">{d.domainLabel ?? theme.label}</span>
          </div>
        </nav>

        {/* HERO */}
        <header className="max-w-7xl w-full mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8 pb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap gap-2">
              <span className={`text-[10px] font-mono tracking-widest px-2.5 py-1 rounded-full border ${theme.accentSoft} ${theme.accent}`}>// {theme.tagline}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif-display tracking-tight text-white leading-[1.02]">
              I&apos;m <span className={`bg-gradient-to-r ${theme.from} ${theme.to} bg-clip-text text-transparent italic`}>{d.firstName}</span> {d.rest}
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-gray-300 tracking-tight">{d.role}</p>
            <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed">{d.intro}</p>
            {d.highlights && d.highlights.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {d.highlights.map((h) => (
                  <span key={h} className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">✦ {h}</span>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-3xl opacity-70" style={{ background: theme.ring }} />
              <div className={`relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full p-1 bg-gradient-to-br ${theme.from} ${theme.to}`}>
                <div className="w-full h-full rounded-full bg-[#0b0f1e] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-3 rounded-full border border-white/10" />
                  <div className="absolute inset-8 rounded-full border border-white/5" />
                  {d.profileImage ? (
                    <img src={d.profileImage} alt={`${d.fullName} profile`} className="w-full h-full object-cover rounded-full" />
                  ) : (
                    <div className="text-8xl select-none filter drop-shadow-xl animate-float-slow">{d.emoji}</div>
                  )}
                  <span className={`absolute bottom-6 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest ${theme.accentSoft} ${theme.accent} border backdrop-blur`}>{theme.icon} {theme.label}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </header>

        {/* ABOUT + SKILLS */}
        <section id="about" className="max-w-7xl w-full mx-auto px-6 md:px-10 py-10 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <p className={`${theme.accent} text-xs font-mono tracking-widest uppercase`}>// 01. About</p>
                <h2 className="text-4xl md:text-5xl font-serif-display tracking-tight text-white">Who I Am</h2>
                <div className={`h-[3px] w-16 rounded-full bg-gradient-to-r ${theme.from} ${theme.to}`} />
              </div>
              <div className="space-y-5 text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
                <p>{d.aboutText}</p>
                {d.quote && <p className={`border-l-2 pl-4 italic text-gray-200 ${theme.accent.replace("text-", "border-")}`}>&ldquo;{d.quote}&rdquo;</p>}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
                {d.stats.map((s) => (
                  <div key={s.title} className="glass-card rounded-xl p-5 space-y-2 hover:-translate-y-1 transition">
                    <div className="flex items-baseline justify-between">
                      <span className={`text-xl font-serif-display tracking-tight ${theme.accent}`}>{s.value}</span>
                      <span className="text-[10px] text-gray-500 font-mono">{s.tag}</span>
                    </div>
                    <p className="text-xs font-semibold text-gray-200">{s.title}</p>
                    <p className="text-[11px] text-gray-500 leading-normal">{s.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3 w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <p className={`${theme.accent} text-xs font-mono tracking-widest uppercase mb-1`}>// Specializations</p>
              {d.skills.map((sk, i) => (
                <div key={sk} className={`glass-card rounded-xl px-5 py-3.5 flex items-center gap-3 hover:translate-x-1 transition group`}>
                  <span className={`${theme.accent} font-mono text-xs`}>{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-sm font-medium text-gray-200 tracking-wide flex-1">{sk}</span>
                  <span className={`opacity-0 group-hover:opacity-100 transition ${theme.accent}`}>→</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        {d.techStack && d.techStack.length > 0 && (
          <section className="max-w-7xl w-full mx-auto px-6 md:px-10 py-12 border-t border-white/5">
            <div className="space-y-3 mb-8">
              <p className={`${theme.accent} text-xs font-mono tracking-widest uppercase`}>// 02. Tech Stack</p>
              <h2 className="text-3xl md:text-4xl font-serif-display tracking-tight text-white">Core Arsenal</h2>
              <div className={`h-[3px] w-16 rounded-full bg-gradient-to-r ${theme.from} ${theme.to}`} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {d.techStack.map((t, idx) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04 }}
                  className="glass-card rounded-xl p-4 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-100">{t.name}</span>
                    {t.category && <span className="text-[9px] font-mono uppercase tracking-wider text-gray-500">{t.category}</span>}
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${t.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: idx * 0.04 }}
                      className={`h-full bg-gradient-to-r ${theme.from} ${theme.to}`}
                    />
                  </div>
                  <div className="flex justify-end">
                    <span className={`text-[10px] font-mono ${theme.accent}`}>{t.level}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* PORTFOLIO */}
        <section id="portfolio" className="max-w-7xl w-full mx-auto px-6 md:px-10 py-12 border-t border-white/5 space-y-8">
          <div className="space-y-3">
            <p className={`${theme.accent} text-xs font-mono tracking-widest uppercase`}>// 03. Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-serif-display tracking-tight text-white">Recent Work</h2>
            <div className={`h-[3px] w-16 rounded-full bg-gradient-to-r ${theme.from} ${theme.to}`} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {d.projects.map((pr, idx) => (
              <motion.div
                key={pr.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-5 flex flex-col hover:-translate-y-1.5 transition group"
              >
                <div className={`w-full h-44 rounded-xl border ${bgMap[pr.bg]} flex items-center justify-center text-5xl mb-4 select-none relative overflow-hidden`}>
                  <span className="filter drop-shadow-xl group-hover:scale-110 transition-transform duration-500">{pr.emoji}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 text-[10px] font-mono mb-3">
                  {pr.tags.map((t) => (
                    <span key={t} className={`px-2 py-0.5 rounded border ${theme.accentSoft} ${theme.accent}`}>{t}</span>
                  ))}
                </div>
                <h3 className="text-lg font-serif-display text-white tracking-tight">{pr.title}</h3>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">{pr.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* JOURNEY */}
        <section id="journey" className="max-w-7xl w-full mx-auto px-6 md:px-10 py-12 border-t border-white/5 space-y-10">
          <div className="space-y-3">
            <p className={`${theme.accent} text-xs font-mono tracking-widest uppercase`}>// 04. Experience</p>
            <h2 className="text-3xl md:text-4xl font-serif-display tracking-tight text-white">My Journey</h2>
            <div className={`h-[3px] w-16 rounded-full bg-gradient-to-r ${theme.from} ${theme.to}`} />
          </div>
          <div className="max-w-4xl relative pl-10 md:pl-14">
            <div className={`absolute left-[18px] md:left-[22px] top-2 bottom-2 w-px bg-gradient-to-b ${theme.from} via-white/10 ${theme.to} opacity-40`} />
            <div className="space-y-10">
              {d.journey.map((j, i) => (
                <motion.div
                  key={j.role + i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative"
                >
                  {j.current ? (
                    <div className={`absolute left-[-30px] md:left-[-34px] top-1 w-[24px] h-[24px] rounded-full bg-[#0b0f1e] border-2 ${theme.accent.replace("text-", "border-")} flex items-center justify-center text-[10px] ${theme.accent} z-10`} style={{ boxShadow: `0 0 24px ${theme.ring}` }}>★</div>
                  ) : (
                    <div className="absolute left-[-26px] md:left-[-30px] top-2 w-[14px] h-[14px] rounded-full bg-white/10 border-2 border-[#0b0f1e] z-10" />
                  )}
                  <div className="space-y-1">
                    <span className={`text-[10px] font-mono tracking-wider ${j.current ? `${theme.accent} font-semibold` : "text-gray-500"}`}>{j.period ?? (j.current ? "CURRENT POSITION" : "")}</span>
                    <h3 className="text-xl font-serif-display text-white tracking-tight">{j.role}</h3>
                    <p className="text-sm text-gray-400 font-medium">{j.org}</p>
                  </div>
                  <p className="text-xs md:text-sm text-gray-500 max-w-2xl leading-relaxed pt-2">{j.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="w-full border-t border-white/5 mt-10">
          <div className="max-w-7xl w-full mx-auto px-6 md:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link to="/" className="text-sm font-serif-display tracking-wide text-gray-300">Dev<span className={theme.accent}>Folio</span></Link>
            <p className="text-[11px] font-mono text-gray-500 tracking-wide">© 2026 {d.fullName} · {theme.label}</p>
            <div className="flex items-center gap-2">
              <a href="#" className={`w-8 h-8 rounded-lg glass-card text-gray-400 hover:${theme.accent} text-xs font-mono flex items-center justify-center transition`}>𝕏</a>
              <a href="#" className={`w-8 h-8 rounded-lg glass-card text-gray-400 hover:${theme.accent} text-xs font-mono flex items-center justify-center transition`}>in</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}