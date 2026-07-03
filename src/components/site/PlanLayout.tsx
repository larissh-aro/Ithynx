import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export interface Milestone {
  tag: string;
  duration: string;
  title: string;
  phase: string;
  items: string[];
}

export interface PlanLayoutProps {
  eyebrow: string;
  title: string;
  gradientTitle: string;
  description: string;
  meta: { label: string; value: string; accent?: boolean }[];
  timelineSteps: string[];
  flowBadge: string;
  flowTitle: string;
  flowMeta: string;
  milestones: Milestone[];
}

export function PlanLayout(p: PlanLayoutProps) {
  return (
    <div className="text-white selection:bg-violet-500/30 aurora-bg min-h-screen relative overflow-hidden">
      <div className="aurora-blob animate-aurora" style={{ width: 520, height: 520, top: -120, left: -120, background: "rgba(167,139,250,0.30)" }} />
      <div className="aurora-blob animate-aurora" style={{ width: 480, height: 480, top: 240, right: -160, background: "rgba(74,222,128,0.22)", animationDelay: "3s" }} />
      <div className="relative z-10">
        <nav className="flex items-center justify-between px-6 md:px-8 py-4 border-b border-white/5 max-w-7xl mx-auto">
          <Link to="/" className="text-xs font-mono tracking-widest text-gray-400 hover:text-emerald-300 transition flex items-center space-x-2">
            <span>←</span><span>Back to Home</span>
          </Link>
          <Link to="/" className="text-xl font-serif-display tracking-tight">i<span className="text-violet-400">Thynx</span></Link>
          <div className="aurora-pill px-3 md:px-4 py-1.5 rounded-full text-[10px] md:text-[11px] font-mono tracking-wider flex items-center space-x-2">
            <span className="w-2 h-2 bg-emerald-400 rounded-sm animate-pulse" />
            <span className="hidden sm:inline">{p.eyebrow}</span>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-6 md:px-8 mt-12 md:mt-16 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              <p className="text-emerald-400 text-xs font-mono tracking-widest">// {p.eyebrow}</p>
              <h1 className="text-4xl md:text-6xl font-serif-display tracking-tight leading-[1.05]">
                {p.title} <br />
                <span className="bg-gradient-to-r from-violet-300 via-violet-400 to-emerald-300 bg-clip-text text-transparent italic">{p.gradientTitle}</span>
              </h1>
              <p className="text-gray-400 text-base max-w-xl leading-relaxed">{p.description}</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                {p.meta.map((m) => (
                  <div key={m.label} className="glass-card p-3 rounded-xl flex flex-col justify-center">
                    <span className="text-[9px] uppercase font-mono tracking-wider text-gray-500">{m.label}</span>
                    <span className={`text-sm font-bold mt-0.5 ${m.accent ? "text-emerald-400" : "text-white"}`}>{m.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mt-20 border-t border-white/5 pt-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[10px] uppercase font-mono tracking-widest text-gray-500">Timeline</span>
              <span className="text-xs font-mono text-emerald-400">Milestones: {p.milestones.length}</span>
            </div>
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden flex">
              <motion.div className="h-full bg-gradient-to-r from-violet-400 via-emerald-400 to-violet-400" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.4, ease: "easeOut" }} />
            </div>
            <div className="flex justify-between items-center mt-3 text-[10px] font-mono text-gray-500 px-0.5 overflow-x-auto gap-2">
              {p.timelineSteps.map((s) => <span key={s} className="whitespace-nowrap">{s}</span>)}
            </div>
          </div>

          <div className="mt-24">
            <p className="text-[10px] font-mono tracking-[0.2em] text-violet-300 uppercase font-bold">// Lab Roadmap — Hands-on Session View</p>
          </div>

          <section className="mt-4 space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/5 pb-4 gap-2">
              <div className="flex items-center space-x-4">
                <span className="aurora-pill px-2.5 py-1 text-[10px] font-mono tracking-wider font-bold rounded-full">{p.flowBadge}</span>
                <h2 className="text-xl md:text-3xl font-serif-display tracking-tight">{p.flowTitle}</h2>
              </div>
              <span className="text-xs font-mono text-emerald-400">{p.flowMeta}</span>
            </div>

            <div className="relative pt-6">
              <div className="absolute left-7 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 bg-gradient-to-b from-violet-400/0 via-violet-400/40 to-emerald-400/0" />
              <div className="absolute left-7 md:left-1/2 top-0 bottom-0 w-[3px] md:-translate-x-1/2 blur-[6px] bg-gradient-to-b from-violet-400/0 via-violet-400/30 to-emerald-400/0" />

              <div className="space-y-10 md:space-y-16">
                {p.milestones.map((m, idx) => {
                  const isRight = idx % 2 === 1;
                  const accent = isRight ? "emerald" : "violet";
                  const ring = isRight ? "rgba(74,222,128,0.45)" : "rgba(167,139,250,0.45)";
                  const grad = isRight
                    ? "from-emerald-400/15 via-emerald-400/5 to-transparent"
                    : "from-violet-400/15 via-violet-400/5 to-transparent";
                  return (
                    <motion.div
                      key={m.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.55 }}
                      className="relative grid md:grid-cols-2 gap-6 md:gap-12 items-center"
                    >
                      <div className={`${isRight ? "md:order-2 md:pl-12" : "md:pr-12 md:text-right"} pl-20 md:pl-0`}>
                        <div className="group relative glass-card rounded-2xl p-6 md:p-7 overflow-hidden transition-transform duration-500 hover:-translate-y-1">
                          <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${grad} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                          <div className={`relative flex items-center gap-3 mb-3 ${isRight ? "" : "md:justify-end"}`}>
                            <span className={`text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-full border ${accent === "emerald" ? "text-emerald-300 border-emerald-400/30 bg-emerald-400/5" : "text-violet-300 border-violet-400/30 bg-violet-400/5"}`}>{m.tag}</span>
                            <span className="text-[10px] font-mono text-gray-400">{m.phase}</span>
                          </div>
                          <h3 className="relative text-lg md:text-xl font-serif-display tracking-tight text-white mb-4 leading-snug">
                            {m.title}
                          </h3>
                          <ul className={`relative space-y-2 text-sm text-gray-300/90 ${isRight ? "" : "md:text-right"}`}>
                            {m.items.map((it) => (
                              <li key={it} className={`flex items-start gap-2 ${isRight ? "" : "md:flex-row-reverse"}`}>
                                <span className={`mt-1.5 inline-block w-1.5 h-1.5 rounded-full shrink-0 ${accent === "emerald" ? "bg-emerald-400" : "bg-violet-400"}`} />
                                <span className="flex-1">{it}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className={`hidden md:block ${isRight ? "md:order-1" : ""}`} />

                      <div className="absolute left-7 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-20">
                        <div className="relative">
                          <div className="absolute inset-0 rounded-full blur-xl opacity-70" style={{ background: ring }} />
                          <div className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center font-serif-display text-lg md:text-xl border backdrop-blur-md ${accent === "emerald" ? "bg-emerald-400/10 border-emerald-300/40 text-emerald-200" : "bg-violet-400/10 border-violet-300/40 text-violet-200"}`}>
                            <span className="text-[9px] font-mono uppercase tracking-widest absolute -top-2 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded bg-[#1a1a2e] text-gray-400 border border-white/10">Lab</span>
                            {String(idx + 1).padStart(2, "0")}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}