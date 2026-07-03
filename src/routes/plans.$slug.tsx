import { createFileRoute, notFound } from "@tanstack/react-router";
import { PlanLayout } from "@/components/site/PlanLayout";
import { PLAN_DATA } from "@/data/plans";
import { AnimatePresence, motion } from "framer-motion";

export const Route = createFileRoute("/plans/$slug")({
  head: ({ params }) => {
    const p = PLAN_DATA[params.slug];
    const title = p ? `${p.title} — iThynx Plan` : "Plan — iThynx";
    return {
      meta: [
        { title },
        { name: "description", content: p?.description ?? "iThynx learning plan." },
        { property: "og:title", content: title },
        { property: "og:description", content: p?.description ?? "" },
      ],
    };
  },
  component: PlanPage,
});

function PlanPage() {
  const { slug } = Route.useParams();
  const data = PLAN_DATA[slug];
  if (!data) throw notFound();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={slug}
        initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <PlanLayout {...data} />
      </motion.div>
    </AnimatePresence>
  );
}