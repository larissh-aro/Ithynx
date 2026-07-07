import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

interface FeedbackEntry {
  domain: string;
  rating: number;
  name: string;
  cohort: string;
  comment: string;
  at: number;
}

const KEY = "ithynx.feedback.v2";

const DOMAINS = [
  { id: "ai", label: "AI Sprint", accent: "violet" },
  { id: "modern-fullstack", label: "Modern Fullstack", accent: "emerald" },
  { id: "mern-stack", label: "MERN Stack", accent: "emerald" },
  { id: "data-engineering", label: "Data Engineering", accent: "sky" },
  { id: "java-enterprise", label: "Java Enterprise", accent: "amber" },
  { id: "dsa-java", label: "DSA in Java", accent: "violet" },
  { id: "interview-coaching", label: "Interview Coaching", accent: "emerald" },
  { id: "overall", label: "Overall experience", accent: "violet" },
] as const;

function readAll(): FeedbackEntry[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch { return []; }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export function FeedbackForm() {
  const [domain, setDomain] = useState<string>("overall");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState("");
  const [cohort, setCohort] = useState("");
  const [comment, setComment] = useState("");
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [recent, setRecent] = useState<FeedbackEntry[]>([]);

  useEffect(() => {
    setRecent(readAll().filter((f) => f.domain === domain).slice(-3).reverse());
  }, [domain, sent]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rating || !comment.trim()) return;
    
    setSubmitting(true);
    
    try {
      const scriptUrl = import.meta.env.VITE_GOOGLE_SHEET_URL;
      const activeDomainObj = DOMAINS.find((d) => d.id === domain) ?? DOMAINS[DOMAINS.length - 1];
      
      if (scriptUrl) {
        const formData = new FormData();
        formData.append("Domain", activeDomainObj.label);
        formData.append("Rating", rating.toString());
        formData.append("Name", name.trim() || "Anonymous");
        formData.append("Cohort", cohort.trim() || "Not specified");
        formData.append("Feedback", comment.trim());
        formData.append("Date", new Date().toISOString());

        await fetch(scriptUrl, {
          method: "POST",
          body: formData,
          mode: "no-cors"
        });
      }
      
      const entry: FeedbackEntry = { 
        domain, 
        rating, 
        name: name.trim() || "Anonymous", 
        cohort: cohort.trim(),
        comment: comment.trim(), 
        at: Date.now() 
      };
      
      const all = readAll();
      all.push(entry);
      localStorage.setItem(KEY, JSON.stringify(all));
      
      setSent(true);
      setTimeout(() => {
        setSent(false); setRating(0); setName(""); setCohort(""); setComment("");
      }, 3000);
    } catch (error) {
      console.error("Failed to submit feedback", error);
    } finally {
      setSubmitting(false);
    }
  };

  const active = hover || rating;
  const activeDomain = DOMAINS.find((d) => d.id === domain) ?? DOMAINS[DOMAINS.length - 1];

  return (
    <section id="feedback" className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
      <div className="grid lg:grid-cols-5 gap-10 items-start">
        <div className="lg:col-span-2 space-y-3">
          <p className="text-[10px] font-mono tracking-[0.2em] text-violet-300 uppercase font-bold">// Feedback Loop</p>
          <h3 className="text-3xl md:text-4xl font-serif-display leading-tight">
            Tell us about your <span className="bg-gradient-to-r from-violet-300 to-emerald-300 bg-clip-text text-transparent italic">{activeDomain.label}</span> experience.
          </h3>
          <p className="text-sm text-gray-400 max-w-sm">Pick the domain you want to rate — your review shapes the next cohort and lands on our roadmap board.</p>
        </div>

        <motion.form 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onSubmit={submit} 
          className="lg:col-span-3 glass-card rounded-3xl p-6 md:p-8 space-y-5 relative overflow-hidden"
        >
          {/* Animated glow background */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-emerald-500/5 pointer-events-none" />
          
          <motion.div variants={itemVariants} className="relative z-10">
            <label className="text-[10px] uppercase font-mono tracking-widest text-gray-500">Domain</label>
            <div className="flex flex-wrap gap-2 mt-2">
              {DOMAINS.map((d) => {
                const on = d.id === domain;
                return (
                  <button key={d.id} type="button" onClick={() => setDomain(d.id)}
                    className={`text-[11px] font-mono px-3 py-1.5 rounded-full border transition-all duration-300 ${on ? "bg-white text-[#1a1a2e] border-white shadow-[0_0_15px_rgba(255,255,255,0.4)] scale-105" : "bg-white/[0.03] text-gray-400 border-white/10 hover:text-white hover:border-white/30"}`}>
                    {d.label}
                  </button>
                );
              })}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative z-10">
            <label className="text-[10px] uppercase font-mono tracking-widest text-gray-500">Rating</label>
            <div className="flex gap-2 mt-2" onMouseLeave={() => setHover(0)}>
              {[1,2,3,4,5].map((n) => (
                <button
                  key={n} type="button"
                  onMouseEnter={() => setHover(n)}
                  onClick={() => setRating(n)}
                  aria-label={`Rate ${n} star${n>1?"s":""}`}
                  className={`w-11 h-11 flex items-center justify-center rounded-xl border transition-all duration-300 text-xl ${n <= active ? "bg-gradient-to-br from-violet-400/30 to-emerald-400/20 border-violet-300/50 text-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.3)] scale-110 -translate-y-1" : "bg-white/[0.02] border-white/10 text-gray-600 hover:text-gray-400 hover:scale-105"}`}
                >
                  <FaStar />
                </button>
              ))}
              <span className="ml-3 self-center text-xs font-mono text-gray-500 transition-all">{active ? `${active}/5` : "Tap a star"}</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-4 relative z-10">
            <div>
              <label className="text-[10px] uppercase font-mono tracking-widest text-gray-500">Name (optional)</label>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name"
                className="mt-2 w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-400/40 focus:bg-white/[0.05] transition-all" />
            </div>
            <div>
              <label className="text-[10px] uppercase font-font-mono tracking-widest text-gray-500">Cohort / Role</label>
              <input value={cohort} onChange={(e) => setCohort(e.target.value)} placeholder="e.g. CSE Batch 2027"
                className="mt-2 w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-400/40 focus:bg-white/[0.05] transition-all" />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative z-10">
            <label className="text-[10px] uppercase font-mono tracking-widest text-gray-500">What worked, what didn't?</label>
            <textarea value={comment} onChange={(e) => setComment(e.target.value)} rows={4} placeholder="The stream processing lab was intense — loved the Kafka + Spark combo…"
              className="mt-2 w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-400/40 focus:bg-white/[0.05] transition-all resize-none" />
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 relative z-10">
            <span className="text-[10px] font-mono text-gray-500">Submits to internal Google Sheet</span>
            <button type="submit" disabled={!rating || !comment.trim() || submitting}
              className="px-6 py-3 rounded-xl bg-white text-[#1a1a2e] font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-emerald-300 hover:shadow-[0_0_20px_rgba(52,211,153,0.4)] transition-all disabled:opacity-40 disabled:cursor-not-allowed transform active:scale-95 flex items-center justify-center gap-2">
              {submitting ? "Sending..." : "Send feedback →"}
            </button>
          </motion.div>

          <AnimatePresence>
            {sent && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute inset-x-6 bottom-6 z-20 rounded-xl bg-emerald-400/20 border border-emerald-300/50 text-emerald-100 text-xs font-mono px-4 py-4 backdrop-blur-xl shadow-2xl flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-400/20 flex items-center justify-center text-emerald-300">✓</div>
                Feedback successfully submitted to Google Sheets!
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>

      {recent.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <p className="text-[10px] font-mono tracking-[0.2em] text-emerald-300/80 uppercase font-bold mb-4">// Recent reviews · {activeDomain.label}</p>
          <div className="grid md:grid-cols-3 gap-4">
            {recent.map((r) => (
              <div key={r.at} className="glass-card rounded-2xl p-5 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-serif-display text-white">{r.name}</span>
                  <span className="text-yellow-400 text-xs flex gap-0.5">
                    {[1,2,3,4,5].map(n => <FaStar key={n} className={n <= r.rating ? "text-yellow-400" : "text-gray-700"} />)}
                  </span>
                </div>
                {r.cohort && <p className="text-[10px] font-mono text-gray-500 mb-2">{r.cohort}</p>}
                <p className="text-xs text-gray-300 leading-relaxed line-clamp-4">{r.comment}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
}