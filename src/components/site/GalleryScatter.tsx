import { motion } from "framer-motion";

type Photo = {
  src: string;
  caption: string;
  rotate: number;
  top: string;
  left: string;
  width: string;
  z: number;
  accent: string;
};

const PHOTOS: Photo[] = [
  { src: "/ph1.jpeg", caption: "Live Code Along", rotate: -8, top: "0%", left: "2%", width: "260px", z: 2, accent: "bg-emerald-400" },
  { src: "/ph2.jpeg", caption: "Lab Sprint Day ", rotate: 5, top: "8%", left: "30%", width: "320px", z: 4, accent: "bg-blue-400" },
  { src: "/ph3.jpeg", caption: "Class", rotate: -4, top: "4%", left: "62%", width: "280px", z: 3, accent: "bg-amber-400" },
  { src: "/ph4.jpeg", caption: "Capstone Review", rotate: 9, top: "48%", left: "8%", width: "240px", z: 3, accent: "bg-blue-400" },
  { src: "/ph5.jpeg", caption: "Cohort 2025 · AI Sprint", rotate: -3, top: "52%", left: "36%", width: "340px", z: 5, accent: "bg-emerald-400" },
  { src: "/ph6.jpeg", caption: "Workshop · LLM Stack", rotate: 7, top: "56%", left: "70%", width: "240px", z: 2, accent: "bg-amber-400" },
];

export function GalleryScatter() {
  return (
    <section id="gallery" className="w-full max-w-7xl mx-auto px-4 py-20 text-left">
      <p className="text-emerald-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">// In the room</p>
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Moments from <span className="text-emerald-400">Our Classrooms</span>
      </h2>
      <p className="text-gray-400 max-w-xl mb-12">
        Snapshots of live sessions, sprint demos, and the cohorts we ship with — pinned to the board.
      </p>

      {/* Desktop scattered board */}
      <div className="relative hidden md:block w-full h-[760px] rounded-3xl border border-white/5 bg-[radial-gradient(circle_at_20%_20%,rgba(52,211,153,0.06),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.08),transparent_60%)] overflow-hidden">
        {/* corkboard dots */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />

        {PHOTOS.map((p, i) => (
          <motion.figure
            key={p.src}
            initial={{ opacity: 0, y: 40, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: p.rotate }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.08, duration: 0.6, type: "spring", stiffness: 70 }}
            whileHover={{ rotate: 0, scale: 1.06, zIndex: 30 }}
            style={{ top: p.top, left: p.left, width: p.width, zIndex: p.z }}
            className="absolute bg-white p-3 pb-12 shadow-[0_25px_50px_-15px_rgba(0,0,0,0.6)] cursor-pointer group"
          >
            <span className={`absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full ${p.accent} shadow-[0_0_12px_currentColor] z-10`} />
            <div className="overflow-hidden bg-gray-900">
              <img
                src={p.src}
                alt={p.caption}
                loading="lazy"
                className="w-full h-56 object-cover grayscale-[20%] group-hover:grayscale-0 transition duration-500"
              />
            </div>
            <figcaption className="absolute bottom-3 left-0 right-0 text-center text-gray-700 text-xs font-bold tracking-wide font-mono">
              {p.caption}
            </figcaption>
          </motion.figure>
        ))}
      </div>

      {/* Mobile: clean vertical stack with tilt */}
      <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
        {PHOTOS.map((p, i) => (
          <motion.figure
            key={p.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -2 : 2 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-white p-2 pb-8 shadow-xl relative"
          >
            <span className={`absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full ${p.accent}`} />
            <img src={p.src} alt={p.caption} loading="lazy" className="w-full h-48 object-cover" />
            <figcaption className="absolute bottom-2 left-0 right-0 text-center text-gray-700 text-[11px] font-bold font-mono">
              {p.caption}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}