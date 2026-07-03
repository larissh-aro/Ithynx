import { useRef, type ReactNode, type MouseEvent } from "react";

/** Wraps a child with magnetic pointer-follow motion. */
export function MagneticButton({ children, strength = 0.35, className = "" }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0,0)";
  };

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`inline-block ${className}`}
      style={{ willChange: "transform" }}
    >
      <div ref={ref} style={{ transition: "transform .25s cubic-bezier(.2,.7,.2,1)" }}>
        {children}
      </div>
    </div>
  );
}