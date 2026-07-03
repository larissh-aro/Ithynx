const ITEMS = [
  "Python", "PyTorch", "LangChain", "Docker", "Kubernetes", "FastAPI",
  "AWS", "Databricks", "Airflow", "RAG", "LLMOps", "Vector DBs",
  "React", "Next.js", "Postgres", "Redis", "Kafka", "MLflow",
  "Node.js", "TypeScript", "Tailwind", "Prisma", "GraphQL", "tRPC",
  "Express", "NestJS", "MongoDB", "Supabase", "Vercel", "CI/CD",
];

export function Marquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="w-full border-y border-gray-900 bg-slate-950/60 py-5 marquee-mask overflow-hidden">
      <div className="flex gap-10 marquee-track whitespace-nowrap w-max">
        {loop.map((t, i) => (
          <span key={i} className="text-[11px] font-mono uppercase tracking-[0.25em] text-gray-500 flex items-center gap-10">
            {t}
            <span className="w-1 h-1 rounded-full bg-emerald-500/60" />
          </span>
        ))}
      </div>
    </div>
  );
}