import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Photo = {
  src: string;
  caption: string;
  rotate: number;
  accent: string;
};

const PHOTOS: Photo[] = [
  { src: "/ph1.jpeg", caption: "Theory session", rotate: -8, accent: "bg-emerald-400" },
  { src: "/ph2.jpeg", caption: "Meeting", rotate: 5, accent: "bg-blue-400" },
  { src: "/ph3.jpeg", caption: "Class", rotate: -4, accent: "bg-amber-400" },
  { src: "/ph4.jpeg", caption: "Trainer-Student Interaction", rotate: 9, accent: "bg-blue-400" },
  { src: "/ph5.jpeg", caption: "Project Review", rotate: -3, accent: "bg-emerald-400" },
  { src: "/ph6.jpeg", caption: "Workshop", rotate: 7, accent: "bg-amber-400" },
];

export function GalleryScatter() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIsPaused(true);
      window.setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % PHOTOS.length);
        setIsPaused(false);
      }, 5000);
    }, 5500);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="gallery" className="w-full max-w-7xl mx-auto px-4 py-20 text-left">
      <p className="text-emerald-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">// In the room</p>
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Moments from <span className="text-emerald-400">Our Classrooms</span>
      </h2>
      <p className="text-gray-400 max-w-xl mb-10">
        Snapshots of live sessions, sprint demos, and the cohorts we ship with — pinned to the board.
      </p>

      <div className="relative hidden md:block w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(52,211,153,0.08),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.09),transparent_60%)] py-10">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />

        <div className="relative h-[340px] overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            {PHOTOS.map((p, index) => {
              const offset = (index - activeIndex + PHOTOS.length) % PHOTOS.length;
              const normalizedOffset = offset > PHOTOS.length / 2 ? offset - PHOTOS.length : offset;
              const isCenter = normalizedOffset === 0;
              const x = normalizedOffset * 320;

              return (
                <motion.figure
                  key={p.src}
                  initial={{ opacity: 0.4, scale: 0.9, x: 320, rotate: 0 }}
                  animate={{
                    opacity: isCenter ? 1 : 0.7,
                    scale: isPaused && isCenter ? 1.06 : 0.92,
                    x,
                    rotate: 0,
                  }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="absolute top-1/2 left-1/2 w-[280px] -translate-x-1/2 -translate-y-1/2 bg-white p-3 pb-12 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.45)]"
                  style={{ zIndex: isCenter ? 30 : 10 }}
                >
                  <span className={`absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full ${p.accent} shadow-[0_0_12px_currentColor] z-10`} />
                  <div className="overflow-hidden bg-gray-900">
                    <img src={p.src} alt={p.caption} loading="lazy" className="w-full h-64 object-cover" />
                  </div>
                  <figcaption className="absolute bottom-3 left-0 right-0 text-center text-gray-700 text-xs font-bold tracking-wide font-mono">
                    {p.caption}
                  </figcaption>
                </motion.figure>
              );
            })}
          </div>
        </div>
      </div>

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
    </section >
  );
}