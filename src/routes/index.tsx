import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IthynxNav, IthynxFooter } from "@/components/site/IthynxNav";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { Marquee } from "@/components/site/Marquee";
import { GalleryScatter } from "@/components/site/GalleryScatter";
import { GetStartedDialog } from "@/components/site/GetStartedDialog";
import { Sparkles } from "@/components/site/Sparkles";
import { MagneticButton } from "@/components/site/MagneticButton";
import { StudentReviews } from "@/components/site/StudentReviews";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "iThynx — Next-Gen LMS for Software Engineering | Think Human. Build Scalable." },
      { name: "description", content: "Production-grade software engineering training for institutions. Human practitioner-led labs, system-building gateways, live deployment." },
    ],
  }),
  component: Index,
});

const FEATURES = [
  { icon: "👨‍💻", title: "Practitioner-Led Labs", desc: "Instruction delivered entirely by active, daily software professionals. We strip away purely theoretical academic lecturing to focus heavily on real-world workflows, tools, and human engineering mindsets.", tag: "Industry Simulation" },
  { icon: "⚙️", title: "The Building Framework", desc: "Moving students away from isolated local sandbox scripts. Every participant undergoes a rigorous transition into deploying code directly inside containerized, cloud-native production environments.", tag: "Live Deployment" },
  { icon: "🗺️", title: "Custom Curriculum Mapping", desc: "We don't sell rigid, pre-packaged courses. We analyze your institution's specific department profile, student baseline, and academic calendar to architect a fully tailored syllabus map.", tag: "Tailored Architecture" },
  { icon: "🛡️", title: "Zero Faculty Burden", desc: "A turn-key educational solution engineered to integrate seamlessly into your current timetable. We manage 100% of lab execution, evaluations, and compliance documentation.", tag: "Operational Integrity" },
  { icon: "⏱️", title: "Sprint-Based Gateways", desc: "Replacing standard end-of-semester cramming with high-frequency technical checkpoints. Students clear weekly deployment targets to unlock subsequent modules.", tag: "Verified Progression" },
  { icon: "🚀", title: "The Capstone Incubator", desc: "The ultimate program phase where student ideas are commercialized. Students build a live enterprise-grade application, graduating with a verifiable portfolio.", tag: "100% Deployed Promise" },
  { icon: "🌐", title: "Full Stack Engineering Track", desc: "End-to-end web product engineering across React, Next.js, Node, and Postgres. Students ship authenticated, database-backed apps with CI/CD pipelines — pairing perfectly with advanced system tracks for production-ready builds.", tag: "React · Node · Postgres" },
];

const PLANS = [
  { num: "01", slug: "dev-sprint", name: "Dev Sprint", desc: "Intensive, high-energy single-day industry simulation bootcamps", items: ["Live Code Along", "Lab Sprint Challenge", "Performance Evaluation"], price: "₹999", cta: "Explore Workshop", featured: false },
  { num: "02", slug: "semester-module", name: "Semester Module", desc: "Parallel academic elective integrated directly into your timetable", items: ["Curriculum Mapping", "Software Architecture Foundations", "Weekly Assessments", "Accreditation Records"], price: "₹1,049", cta: "Explore Semester Plan", featured: true },
  { num: "03", slug: "engineering-immersion", name: "Engineering Immersion", desc: "End-to-end multi-track engineering transformation blueprint", items: ["Advanced Systems Mastery", "Scalability Orchestration", "Industry Sprints", "Capstone Deployment"], price: "₹1,099", cta: "Explore Full Immersion", featured: false },
  { num: "04", slug: "full-stack", name: "Full Stack Engineering", desc: "Ship production web apps end-to-end — frontend, backend, database, and deployment", items: ["React & Next.js Frontend", "Node, APIs & Auth", "Postgres & Schema Design", "CI/CD & Cloud Deploy"], price: "₹1,149", cta: "Explore Full Stack Track", featured: false },
] as const;

const MODULES = [
  { num: "08", slug: "modern-fullstack", icon: "🌐", title: "Modern Fullstack", tagline: "Next-Gen Web Development — Architecture, scaling & production deployment.", tech: ["Next.js", "Node", "Postgres", "Docker"], skills: ["Hydration & SSR", "Edge Caching"], rare: "<1% understand true system scaling" },
  { num: "09", slug: "mern-stack", icon: "💻", title: "MERN Architecture", tagline: "Enterprise-grade full stack development with MongoDB, Express, React, and Node.", tech: ["MongoDB", "Express", "React", "Node"], skills: ["Async patterns", "Redux Toolkit"], rare: "Most Popular Track" },
  { num: "10", slug: "data-engineering", icon: "⚙️", title: "Data Engineering", tagline: "Pipelines, ETL, and Cloud Warehousing at scale.", tech: ["Kafka", "Spark", "Airflow"], skills: ["ETL pipelines", "Stream processing"], rare: "<1% architect fault-tolerant lakes" },
  { num: "13", slug: "interview-coaching", icon: "🗣️", title: "Interview Pro", tagline: "Mock rounds and technical strategy coaching for high-stakes interviews.", tech: ["STAR", "Rubrics", "Roleplay"], skills: ["Active listening", "Punchy delivery"], rare: "+400 placed across cohorts" },
  { num: "11", slug: "java-enterprise", icon: "☕", title: "Java Enterprise", tagline: "Mastering Spring Boot, JVM internals & high-scale microservices.", tech: ["Java 21", "Spring Boot 3", "K8s"], skills: ["JVM internals", "Microservices"], rare: "Top 5% write GC-aware Java" },
  { num: "12", slug: "dsa-java", icon: "🧩", title: "Full Semester Immersion — DSA in Java", tagline: "Our most comprehensive coding-interview program. 150+ patterns, complexity proofs, MAANG-grade assessments, and weeks of curated graph + DP mastery.", tech: ["Java 21", "JUnit 5", "LeetCode"], skills: ["150+ patterns", "Graphs & DP"], rare: "<1% trace complex DP states" },
  { num: "14", slug: "aws-cloud-computing", icon: "☁️", title: "AWS Cloud Computing", tagline: "The Complete Cloud Infrastructure — Compute, Networking, Security, DevOps & Containers.", tech: ["AWS", "Docker", "EC2", "EKS"], skills: ["CI/CD pipelines", "VPC & Security"], rare: "Industry Ready Cloud Engineering" },
] as const;

const TEAM = [
  { slug: "sumathi", name: "Dr. S. Sumathi", role: "Founder", emoji: "👩‍🏫", tags: ["AI/ML", "NLP", "Machine Learning"], featured: true, highlights: ["20+ years in academia & research", "Author: Neural Networks for NLP", "₹7.5L MSME funding & $2500 Cohere Grant"] },
  { slug: "karthi", name: "Karthi S", role: "Founder & CEO", emoji: "👨‍💻", tags: ["Generative AI", "Agentic Systems"], featured: false, highlights: ["Founder · iThynx Labs", "12+ institutional rollouts", "Architect, agentic curriculum"] },
  { slug: "kevin", name: "Kevin Jeyaraj", role: "Data Engineer", emoji: "📊", tags: ["Databricks", "Airflow", "PySpark"], featured: true, highlights: ["Lakehouse pipelines at scale", "Airflow + dbt orchestration", "Streaming with Kafka"] },
  { slug: "larissh", name: "Larissh M Aro", role: "AI/ML Engineer", emoji: "🎨", tags: ["Deep Learning", "AWS Cloud"], featured: false, highlights: ["Production LLM fine-tuning", "SageMaker deployments", "RAG + vector retrieval"] },
  { slug: "prakash", name: "Prakash S", role: "Intelligent Systems", emoji: "🧪", tags: ["Computer Vision", "RAG Stack"], featured: false, highlights: ["YOLO + real-time vision", "Edge inference pipelines", "Multimodal RAG"] },
  { slug: "surya", name: "Surya Narayanan V", role: "Cloud & Automation", emoji: "🚀", tags: ["React UI", "Docker"], featured: false, highlights: ["Full-stack React + Node", "Dockerized CI/CD", "Cloud automation"] },
  { slug: "pari", name: "Pari Arul", role: "Java Full Stack & MERN", emoji: "☕", tags: ["Spring Boot", "MERN", "MySQL"], featured: false, highlights: ["3+ yrs Java + MERN", "Spring Security + JWT", "Docker · Nginx · CI/CD"] },
];

function Index() {
  return (
    <div className="text-slate-200 selection:bg-[#4ade80]/30 aurora-bg min-h-screen relative overflow-x-hidden">
      {/* Page-wide aurora blobs & grid */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="aurora-blob animate-aurora" style={{ top: "-10%", left: "-10%", width: "55%", height: "55%", background: "rgba(167,139,250,0.18)" }} />
        <div className="aurora-blob animate-aurora" style={{ bottom: "-15%", right: "-10%", width: "55%", height: "55%", background: "rgba(74,222,128,0.12)", animationDelay: "-6s" }} />
        <div className="aurora-blob animate-aurora" style={{ top: "25%", left: "30%", width: "45%", height: "45%", background: "rgba(96,165,250,0.10)", animationDelay: "-12s" }} />
      </div>

      <ScrollProgress />
      <IthynxNav />

      <main className="flex flex-col items-center text-center px-4 sm:px-6 relative z-10">
        {/* HERO */}
        <section className="relative w-full flex flex-col items-center pt-16 sm:pt-20 md:pt-28 pb-10 sm:pb-12">
          <Sparkles count={36} />
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full aurora-pill text-[10px] tracking-[0.22em] sm:tracking-[0.25em] uppercase font-semibold mb-5 sm:mb-7">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ade80]" />
            </span>
            Cohort 07 · Enrolling now
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="font-serif-display text-[2.5rem] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] max-w-5xl tracking-tight headline-gradient text-balance">
            Think Human.<br />Build <span className="text-gradient-flow">Scalable</span>.
          </motion.h1>

          <p className="mt-6 sm:mt-8 text-slate-300 max-w-2xl text-base sm:text-lg md:text-2xl leading-relaxed font-light text-pretty">
            We come to your college, work hands-on with your students, and make sure they leave with 
            <span className="text-white font-medium"> real projects they actually built</span> — not just slides they sat through.
            70% live labs. 30% theory. Zero fluff.
          </p>

          {/* Benefits row */}
          <ul className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-2 text-[11px] sm:text-xs md:text-sm text-slate-300">
            {[
              "70% hands-on real projects",
              "Conducted at your college",
              "Zero faculty burden",
              "Certificate on completion",
            ].map((b) => (
              <li key={b} className="inline-flex items-center gap-2">
                <span className="text-[#4ade80]">✓</span>{b}
              </li>
            ))}
          </ul>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 justify-center items-stretch sm:items-center w-full sm:w-auto max-w-xs sm:max-w-none">
            <MagneticButton className="w-full sm:w-auto">
              <GetStartedDialog
                trigger={
                  <button className="group sheen breathe relative w-full sm:w-auto px-6 sm:px-7 py-3.5 rounded-xl bg-[#4ade80] text-[#1a1a2e] hover:shadow-[0_0_36px_rgba(74,222,128,0.65)] transition text-sm font-bold inline-flex items-center justify-center gap-2">
                    Get started
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </button>
                }
              />
            </MagneticButton>
            <a href="#modules" className="w-full sm:w-auto px-6 sm:px-7 py-3.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 transition text-sm font-semibold text-center">View Curriculum</a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[11px] text-slate-500 text-center">
            <div className="flex -space-x-2">
              {["#4ade80", "#a78bfa", "#60a5fa"].map((c) => (
                <span key={c} className="w-6 h-6 rounded-full border-2 border-[#1a1a2e]" style={{ background: c }} />
              ))}
            </div>
            <span>Trusted by <span className="text-slate-300 font-semibold">12+ institutions</span> · 400+ engineers placed</span>
          </div>

          <p className="mt-10 sm:mt-12 font-mono text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.24em] sm:tracking-[0.32em] uppercase text-[#4ade80]/80">
            Human Intellect. Scalable Engineering.
          </p>
        </section>

        <Marquee />

        {/* Stat bento */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-6xl mb-24 px-4">
          {[
            { v: "Labs", l: "Deep Hands-On Labs", c: "#4ade80" },
            { v: "Core", l: "Concept Mastery", c: "#a78bfa" },
            { v: "Reinforce", l: "Strong Perception", c: "#4ade80" },
            { v: "Deploy", l: "Production Ready", c: "#a78bfa" },
          ].map((s, i) => (
            <motion.div key={s.v}
              initial={{ opacity: 0, y: 30, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08, type: "spring", stiffness: 200, damping: 20 }}
              className="glass-card glow-border tilt sheen p-6 rounded-3xl text-left hover:scale-[1.05] transition-transform duration-300 shadow-xl hover:shadow-[0_20px_40px_rgba(74,222,128,0.15)] group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="font-serif-display text-3xl md:text-4xl relative z-10" style={{ color: s.c }}>{s.v}</p>
              <p className="text-slate-500 text-[10px] uppercase font-bold mt-2 tracking-[0.22em] relative z-10">{s.l}</p>
            </motion.div>
          ))}
        </div>

        {/* FEATURES */}
        <section id="features" className="w-full max-w-7xl mx-auto px-4 py-20 text-left">
          <p className="text-[#4ade80] text-[10px] font-bold tracking-[0.25em] uppercase mb-4">// Platform Architecture</p>
          <h2 className="font-serif-display text-4xl md:text-6xl mb-16 headline-gradient max-w-3xl">Curated for <span className="text-[#a78bfa]">Institutional</span> Impact.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <motion.div key={f.title}
                initial={{ opacity: 0, y: 40, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05, type: "spring", stiffness: 300, damping: 25 }}
                className="glass-card glow-border sheen tilt p-8 rounded-[2rem] flex flex-col h-full group hover:shadow-[0_20px_50px_rgba(74,222,128,0.1)] hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-[#4ade80]/10 border border-[#4ade80]/25 flex items-center justify-center mb-6 text-2xl group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 float-y">{f.icon}</div>
                <h3 className="font-serif-display text-2xl mb-3 text-white group-hover:text-[#4ade80] transition-colors">{f.title}</h3>
                <p className="text-slate-400 text-sm mb-8 flex-grow leading-relaxed group-hover:text-slate-300 transition-colors">{f.desc}</p>
                <span className="px-3 py-1 rounded-full border border-[#4ade80]/25 text-[#4ade80] text-[10px] font-bold uppercase w-fit tracking-wider group-hover:bg-[#4ade80]/10 transition-colors">{f.tag}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PLANS */}
        <section id="plans" className="w-full max-w-7xl mx-auto px-4 py-20 text-left">
          <p className="text-[#4ade80] text-[10px] font-bold tracking-[0.25em] uppercase mb-4">// Roadmap by plan</p>
          <h2 className="font-serif-display text-4xl md:text-6xl mb-16 headline-gradient">Your Learning <span className="text-[#a78bfa]">Journey</span>.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLANS.map((p) => (
              <motion.div key={p.slug}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className={`glass-card p-8 rounded-[2rem] flex flex-col relative ${p.featured ? "md:scale-[1.03] z-10 bg-gradient-to-b from-[#a78bfa]/15 to-[#16213e]/40" : ""}`}>
                {p.featured && <div className="absolute -top-3 right-6 bg-gradient-to-r from-[#4ade80] to-[#a78bfa] text-[#1a1a2e] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Flexible</div>}
                <p className="text-[#4ade80] text-[10px] font-bold tracking-[0.25em] uppercase mb-3">Plan {p.num}</p>
                <h3 className="font-serif-display text-3xl mb-2 text-white">{p.name}</h3>
                <p className="text-slate-500 text-xs mb-8">{p.desc}</p>
                <div className="space-y-6 relative flex-grow">
                  {p.items.map((it, idx) => (
                    <div key={it} className="relative pl-10">
                      {idx < p.items.length - 1 && <div className="step-line" />}
                      <div className="absolute left-0 w-6 h-6 bg-[#4ade80]/15 border border-[#4ade80]/60 rounded-full flex items-center justify-center text-[10px] text-[#4ade80]">✓</div>
                      <p className="text-sm font-medium text-slate-200">{it}</p>
                    </div>
                  ))}
                </div>
                <Link to="/plans/$slug" params={{ slug: p.slug }} className={`mt-10 w-full py-3.5 rounded-xl font-bold transition text-xs uppercase tracking-widest text-center ${p.featured ? "bg-[#4ade80] text-[#1a1a2e] hover:shadow-[0_0_24px_rgba(74,222,128,0.4)]" : "bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10"}`}>
                  {p.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="w-full max-w-7xl mx-auto px-4 py-20 text-left">
          <PricingSection />
        </section>

        {/* MODULES — BENTO */}
        <section id="modules" className="w-full max-w-7xl mx-auto px-4 py-20 text-left">
          <p className="text-[#4ade80] text-[10px] font-bold tracking-[0.25em] uppercase mb-4">// Deep Curriculum Modules</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <h2 className="font-serif-display text-4xl md:text-6xl headline-gradient max-w-3xl">Inside the <span className="text-[#a78bfa]">Engineering</span> Tracks.</h2>
            <p className="text-slate-400 text-sm max-w-md">Six advanced modules — production fullstack, JVM internals, DSA mastery, and interview coaching. Live labs, capstones, verifiable certification.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {MODULES.map((m, i) => {
              const spans = [
                "md:col-span-2 lg:col-span-3",
                "md:col-span-2 lg:col-span-3",
                "md:col-span-2 lg:col-span-2",
                "md:col-span-2 lg:col-span-2",
                "md:col-span-4 lg:col-span-2",
                "md:col-span-4 lg:col-span-6",
              ];
              const isAccent = i === 4;
              const isBanner = i === 5;
              const violet = i % 2 === 1;
              return (
                <motion.div key={m.slug}
                initial={{ opacity: 0, scale: 0.9, y: 40 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, type: "spring", stiffness: 250, damping: 20 }}
                className={`${spans[i]} group relative overflow-hidden rounded-[2rem] p-8 flex tilt sheen hover:shadow-[0_20px_50px_rgba(167,139,250,0.15)] hover:-translate-y-2 transition-all duration-300 ${
                  isAccent
                    ? "flex-col justify-between bg-gradient-to-br from-[#a78bfa]/25 to-[#4ade80]/10 border border-white/10"
                    : isBanner
                      ? "glass-card flex-col md:flex-row md:items-center gap-6"
                      : `glass-card glow-border flex-col ${violet ? "glass-card-violet" : ""}`
                }`}>
                  {isBanner && (
                    <div className="hidden md:block w-32 h-32 flex-shrink-0 bg-gradient-to-tr from-[#4ade80] to-[#a78bfa] rounded-full blur-3xl opacity-30" />
                  )}
                  <div className={`${isBanner ? "flex-1" : ""}`}>
                    {!isBanner && !isAccent && (
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-12 h-12 rounded-2xl ${violet ? "bg-[#a78bfa]/10 border border-[#a78bfa]/25" : "bg-[#4ade80]/10 border border-[#4ade80]/25"} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>{m.icon}</div>
                        <span className="text-slate-500 text-[10px] font-bold tracking-[0.25em] uppercase">Mod {m.num}</span>
                      </div>
                    )}
                    <h3 className={`font-serif-display ${isBanner ? "text-3xl md:text-4xl" : "text-2xl"} mb-3 text-white`}>{m.title}</h3>
                    <p className={`text-slate-400 text-sm leading-relaxed ${isBanner ? "max-w-xl" : "mb-5"}`}>{m.tagline}</p>
                    {!isBanner && !isAccent && (
                      <>
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {m.tech.map((t) => (
                            <span key={t} className="text-[10px] px-2 py-1 bg-white/5 rounded-md border border-white/10 uppercase tracking-tighter font-bold text-slate-300">{t}</span>
                          ))}
                        </div>
                        <ul className="space-y-1.5 mb-6">
                          {m.skills.map((s) => (
                            <li key={s} className="flex items-center gap-2 text-slate-400 text-xs">
                              <span className="text-[#4ade80]">▸</span>{s}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                  {isAccent && (
                    <Link to="/plans/$slug" params={{ slug: m.slug }} className="mt-4 w-full py-3.5 bg-white text-[#1a1a2e] font-bold rounded-xl hover:bg-[#4ade80] transition-colors uppercase tracking-[0.2em] text-[10px] text-center">
                      Explore Syllabus
                    </Link>
                  )}
                  {!isAccent && !isBanner && (
                    <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                      <span className="text-[#a78bfa]/80 text-[10px] font-bold uppercase tracking-wider">{m.rare}</span>
                      <Link to="/plans/$slug" params={{ slug: m.slug }} className="text-[#4ade80] text-xs font-bold hover:text-white transition">View Lab →</Link>
                    </div>
                  )}
                  {isBanner && (
                    <Link to="/plans/$slug" params={{ slug: m.slug }} className="inline-flex shrink-0 px-6 py-3 bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-white/20 transition">
                      Open Track →
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </div>
        </section>

        <StudentReviews />

        <GalleryScatter />

        {/* TEAM */}
        <section id="team" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-left">
          <p className="text-[#4ade80] text-[10px] font-bold tracking-[0.25em] uppercase mb-3 sm:mb-4">// Meet the builders</p>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-6xl mb-4 sm:mb-6 headline-gradient text-balance">The <span className="text-[#a78bfa]">People</span> Behind the Platform.</h2>
          <p className="text-slate-400 max-w-xl mb-10 sm:mb-16 text-sm sm:text-base">A passionate team dedicated to reshaping how organisations learn, grow, and thrive.</p>
          <TeamGrid />
        </section>
      </main>

      <IthynxFooter />
    </div>
  );
}

function PricingSection() {
  return <PricingInner />;
}

function TeamGrid() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const itemVariants = {
    hidden: { opacity: 0, x: -8 },
    visible: { opacity: 1, x: 0 },
  };
  const dropdownVariants = {
    hidden: { opacity: 0, y: -12, scale: 0.96, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
    exit: { opacity: 0, y: -8, scale: 0.98, filter: "blur(3px)" },
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
      {TEAM.map((m, i) => {
        const isOpen = openSlug === m.slug;
        return (
          <motion.div
            key={m.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`relative ${i === TEAM.length - 1 && TEAM.length % 2 === 1 ? "sm:col-span-2 md:col-span-1" : ""}`}
          >
            <Link
              to="/team/$slug"
              params={{ slug: m.slug }}
              className="glass-card p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-[1.75rem] lg:rounded-[2rem] text-center block group h-full flex flex-col items-center transition-transform duration-150 active:scale-[0.97] tap-highlight-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4ade80]/60"
            >
              <div className={`w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 shrink-0 rounded-full p-[2px] ${m.featured ? "bg-gradient-to-br from-[#4ade80] to-[#a78bfa]" : "bg-gradient-to-br from-[#4ade80]/40 to-[#a78bfa]/40"} group-hover:from-[#4ade80] group-hover:to-[#a78bfa] transition`}>
                <div className="w-full h-full rounded-full bg-[#16213e] flex items-center justify-center text-3xl sm:text-4xl">{m.emoji}</div>
              </div>
              <h3 className="font-serif-display text-lg sm:text-xl text-white leading-tight break-words">{m.name}</h3>
              <p className="text-[#4ade80] text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.22em] mt-1 mb-3 sm:mb-4">{m.role}</p>
              <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mt-auto pt-2">
                {m.tags.map((t) => (
                  <span key={t} className="px-2 py-1 rounded-md text-[10px] font-bold bg-white/5 border border-white/10 text-slate-300 tracking-tight whitespace-nowrap">{t}</span>
                ))}
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setOpenSlug(isOpen ? null : m.slug);
                }}
                aria-expanded={isOpen}
                aria-controls={`hl-${m.slug}`}
                className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300 hover:text-white px-3 py-1.5 rounded-full bg-white/5 border border-white/10 active:scale-95 transition will-change-transform"
              >
                {isOpen ? "Hide" : "Highlights"}
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 24 }}
                >
                  ▾
                </motion.span>
              </button>
            </Link>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  id={`hl-${m.slug}`}
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{
                    type: "spring",
                    stiffness: 420,
                    damping: 30,
                    mass: 0.9,
                    staggerChildren: 0.045,
                    delayChildren: 0.06,
                  }}
                  style={{ originX: 0.5, originY: 0 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-3 z-30 w-[92%] rounded-2xl p-4 text-left shadow-[0_20px_60px_-12px_rgba(0,0,0,0.5)] border border-white/10 bg-white/8 backdrop-blur-2xl will-change-transform"
                >
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border-l border-t border-white/10 bg-white/8 backdrop-blur-2xl" />
                  <p className="text-[#4ade80] text-[10px] font-bold tracking-[0.22em] uppercase mb-2">// Highlights</p>
                  <ul className="space-y-1.5">
                    {m.highlights.map((h) => (
                      <motion.li
                        key={h}
                        variants={itemVariants}
                        transition={{ type: "spring", stiffness: 450, damping: 28 }}
                        className="text-xs text-slate-200 flex gap-2"
                      >
                        <span className="text-[#a78bfa] mt-[2px] shrink-0">✦</span>
                        <span className="leading-snug">{h}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

const COURSE_CATEGORIES = ["All", "AI & ML", "Full Stack", "Languages", "Data", "Cloud"] as const;
type CourseCategory = typeof COURSE_CATEGORIES[number];

const COURSES: { name: string; category: CourseCategory; d4: number; d7: number; d11: number; d30: number }[] = [
  { name: "Machine Learning",                   category: "AI & ML",    d4: 1600, d7: 2000, d11: 2500, d30: 2800 },
  { name: "Deep Learning",                      category: "AI & ML",    d4: 1700, d7: 2100, d11: 2600, d30: 3000 },
  { name: "Reinforcement Learning",             category: "AI & ML",    d4: 1800, d7: 2300, d11: 2800, d30: 3200 },
  { name: "Artificial Intelligence",            category: "AI & ML",    d4: 1700, d7: 2100, d11: 2600, d30: 3000 },
  { name: "Generative AI & Agentic AI",         category: "AI & ML",    d4: 2000, d7: 2500, d11: 3000, d30: 3500 },
  { name: "Large Language Models (LLMs)",       category: "AI & ML",    d4: 2000, d7: 2500, d11: 3000, d30: 3500 },
  { name: "Full Stack AI Development",          category: "Full Stack", d4: 2300, d7: 2800, d11: 3500, d30: 4000 },
  { name: "MERN Stack Development",             category: "Full Stack", d4: 1600, d7: 2000, d11: 2500, d30: 3000 },
  { name: "Modern Full Stack Development",      category: "Full Stack", d4: 1800, d7: 2300, d11: 2800, d30: 3300 },
  { name: "Backend Development (Node.js/NestJS)", category: "Full Stack", d4: 1800, d7: 2300, d11: 2800, d30: 3300 },
  { name: "Frontend Development (React/Next.js)", category: "Full Stack", d4: 1700, d7: 2200, d11: 2700, d30: 3200 },
  { name: "Data Engineering",                   category: "Data",       d4: 2000, d7: 2500, d11: 3000, d30: 3500 },
  { name: "Data Science",                       category: "Data",       d4: 2000, d7: 2500, d11: 3000, d30: 3500 },
  { name: "Java Programming & Enterprise Architecture", category: "Languages", d4: 1800, d7: 2300, d11: 2800, d30: 3300 },
  { name: "Data Structures & Algorithms (Java)", category: "Languages", d4: 1700, d7: 2200, d11: 2700, d30: 3200 },
  { name: "Python Programming",                 category: "Languages", d4: 1500, d7: 1900, d11: 2300, d30: 2800 },
  { name: "AWS Cloud Computing",                category: "Cloud",     d4: 2000, d7: 2500, d11: 3000, d30: 3500 },
];

const DURATION_COLS = [
  { key: "d4" as const,  label: "4–6 Days",   hint: "Short sprint" },
  { key: "d7" as const,  label: "7–10 Days",  hint: "Deep dive" },
  { key: "d11" as const, label: "11–16 Days", hint: "Full module" },
  { key: "d30" as const, label: "1 Month",    hint: "Immersive" },
];

const INR = (n: number) => `₹${n.toLocaleString("en-IN")}`;

function PricingInner() {
  const [activeCategory, setActiveCategory] = useState<CourseCategory>("All");
  const [highlightCol, setHighlightCol] = useState<"d4"|"d7"|"d11"|"d30" | null>(null);

  const filtered = activeCategory === "All"
    ? COURSES
    : COURSES.filter((c) => c.category === activeCategory);

  return (
    <>
      <p className="text-[#4ade80] text-[10px] font-bold tracking-[0.25em] uppercase mb-4">// Course Pricing</p>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
        <div>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl headline-gradient text-balance mb-3">
            Straight-up, <span className="text-[#a78bfa]">No-Surprise</span> Pricing.
          </h2>
          <p className="text-slate-400 text-sm max-w-lg leading-relaxed">
            Pick a course, pick how many days you want us in your college, and that's the price — per student, all in.
            No hidden charges, no "call for quote" nonsense.
          </p>
        </div>
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 self-start md:self-end">
          {COURSE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition ${
                activeCategory === cat
                  ? "bg-[#4ade80] text-[#1a1a2e]"
                  : "bg-white/5 border border-white/10 text-slate-400 hover:border-white/25 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto rounded-2xl border border-white/8">
        <table className="w-full min-w-[640px] border-collapse">
          <thead>
            <tr className="bg-white/[0.03] border-b border-white/8">
              <th className="text-left py-4 px-5 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 w-1/3">Course</th>
              {DURATION_COLS.map((col) => (
                <th
                  key={col.key}
                  onMouseEnter={() => setHighlightCol(col.key)}
                  onMouseLeave={() => setHighlightCol(null)}
                  className={`py-4 px-4 text-center cursor-default transition ${
                    highlightCol === col.key ? "bg-[#4ade80]/8" : ""
                  }`}
                >
                  <p className="text-[12px] font-bold text-white">{col.label}</p>
                  <p className="text-[10px] text-slate-500 mt-0.5 font-normal normal-case tracking-normal">{col.hint}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((course, i) => (
              <motion.tr
                key={course.name}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.03 }}
                className="border-b border-white/[0.05] hover:bg-white/[0.03] group transition"
              >
                <td className="py-4 px-5">
                  <p className="text-sm font-semibold text-slate-200 group-hover:text-white transition">{course.name}</p>
                  <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest ${
                    course.category === "AI & ML" ? "bg-purple-500/15 text-purple-300 border border-purple-500/20" :
                    course.category === "Full Stack" ? "bg-blue-500/15 text-blue-300 border border-blue-500/20" :
                    course.category === "Data" ? "bg-amber-500/15 text-amber-300 border border-amber-500/20" :
                    "bg-emerald-500/15 text-emerald-300 border border-emerald-500/20"
                  }`}>{course.category}</span>
                </td>
                {DURATION_COLS.map((col) => (
                  <td
                    key={col.key}
                    onMouseEnter={() => setHighlightCol(col.key)}
                    onMouseLeave={() => setHighlightCol(null)}
                    className={`py-4 px-4 text-center transition ${
                      highlightCol === col.key ? "bg-[#4ade80]/8" : ""
                    }`}
                  >
                    <p className="text-[#4ade80] font-bold text-base tabular-nums">{INR(course[col.key])}</p>
                    <p className="text-[10px] text-slate-600 mt-0.5">per student</p>
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer note */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center">
        <p className="text-slate-500 text-xs leading-relaxed max-w-lg">
          💡 <span className="text-slate-300">All sessions are conducted at your campus.</span> Prices are per student per session duration.
          Group discounts available for batches of 30+ students. Just reach out and we'll sort it.
        </p>
        <GetStartedDialog
          trigger={
            <button className="shrink-0 px-6 py-3 rounded-xl bg-[#4ade80] text-[#1a1a2e] text-xs font-bold uppercase tracking-widest hover:shadow-[0_0_24px_rgba(74,222,128,0.4)] transition whitespace-nowrap">
              Book a session →
            </button>
          }
        />
      </div>
    </>
  );
}