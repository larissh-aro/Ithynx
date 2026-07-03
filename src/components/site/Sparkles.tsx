import { useEffect, useState } from "react";

/** Decorative twinkling dots layer. Cheap, CSS-only animation. */
export function Sparkles({ count = 28, className = "" }: { count?: number; className?: string }) {
  const [dots, setDots] = useState<Array<{ top: number; left: number; size: number; delay: number; dur: number; color: string; key: number }>>([]);

  useEffect(() => {
    const generated = Array.from({ length: count }).map((_, i) => {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const size = Math.random() * 2 + 1; // 1-3px
      const delay = Math.random() * 3;
      const dur = 2.5 + Math.random() * 2.5;
      const color = i % 3 === 0 ? "#a78bfa" : i % 3 === 1 ? "#4ade80" : "#60a5fa";
      return { top, left, size, delay, dur, color, key: i };
    });
    setDots(generated);
  }, [count]);

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {dots.map((d) => (
        <span
          key={d.key}
          className="absolute rounded-full twinkle"
          style={{
            top: `${d.top}%`,
            left: `${d.left}%`,
            width: d.size,
            height: d.size,
            background: d.color,
            boxShadow: `0 0 ${d.size * 3}px ${d.color}`,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.dur}s`,
            willChange: "opacity",
          }}
        />
      ))}
    </div>
  );
}