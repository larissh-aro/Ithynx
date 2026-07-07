import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const REVIEWS = [
  { name: "Rahul S.", role: "Placed at Amazon", text: "The DSA in Java module completely changed how I approach problem-solving. The pattern-based learning is unreal.", rating: 5, domain: "DSA in Java" },
  { name: "Sneha M.", role: "Full Stack Engineer", text: "I went from not knowing how to connect a database to building a full-scale deployed app with Next.js and Postgres.", rating: 5, domain: "Modern Fullstack" },
  { name: "Arjun K.", role: "Data Analyst", text: "The Data Engineering track is heavily practical. Building actual ETL pipelines with Spark and Airflow gave me the confidence to ace my interviews.", rating: 5, domain: "Data Engineering" },
  { name: "Priya V.", role: "SDE I", text: "The mock interview sessions in the Interview Pro module were eye-opening. Learned exactly how to frame my thoughts using STAR method.", rating: 5, domain: "Interview Coaching" },
  { name: "Karthik R.", role: "Backend Developer", text: "Java Enterprise was intense but incredibly rewarding. Learning JVM internals and Spring Boot at this depth is rare in college.", rating: 5, domain: "Java Enterprise" },
  { name: "Ananya T.", role: "Software Engineer", text: "The AWS Cloud module was phenomenal. Actually deploying CI/CD pipelines instead of just reading about them was the best part.", rating: 5, domain: "AWS Cloud" },
];

export function StudentReviews() {
  return (
    <section id="reviews" className="w-full max-w-7xl mx-auto px-4 py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="text-center mb-16 relative z-10">
        <p className="text-[#4ade80] text-[10px] font-bold tracking-[0.25em] uppercase mb-4">// Student Outcomes</p>
        <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl headline-gradient">
          Don't just take our <span className="text-[#a78bfa]">word</span> for it.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {REVIEWS.map((r, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 200, damping: 20 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass-card glow-border p-8 rounded-[2rem] flex flex-col h-full hover:shadow-[0_20px_50px_rgba(74,222,128,0.15)] transition-all duration-300 relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="flex gap-1.5 mb-6">
              {[...Array(r.rating)].map((_, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0, rotate: -45 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: i * 0.1 + idx * 0.1, type: "spring", stiffness: 300 }}
                >
                  <FaStar className="text-yellow-400 text-lg drop-shadow-[0_0_8px_rgba(250,204,21,0.5)] group-hover:scale-110 transition-transform duration-300" />
                </motion.div>
              ))}
            </div>
            
            <p className="text-slate-300 text-[15px] leading-relaxed mb-8 flex-grow font-medium relative z-10 italic">"{r.text}"</p>
            
            <div className="pt-6 border-t border-white/10 relative z-10">
              <p className="font-serif-display text-2xl text-white mb-2 group-hover:text-[#4ade80] transition-colors">{r.name}</p>
              <div className="flex justify-between items-center">
                <p className="text-[#a78bfa] text-[10px] font-bold uppercase tracking-wider">{r.role}</p>
                <span className="px-2 py-1 bg-white/5 rounded border border-white/10 text-[9px] uppercase tracking-widest text-slate-400">{r.domain}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
