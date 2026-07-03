export function HeroBackdrop() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid-bg" />
      <div className="orb orb-blue animate-orb" style={{ width: 460, height: 460, top: -120, left: -120 }} />
      <div className="orb orb-emerald animate-orb" style={{ width: 380, height: 380, top: 80, right: -100, animationDelay: "-4s" }} />
      <div className="orb orb-amber animate-orb" style={{ width: 320, height: 320, top: 520, left: "30%", animationDelay: "-8s", opacity: 0.35 }} />
    </div>
  );
}