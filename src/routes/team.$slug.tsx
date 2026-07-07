import { createFileRoute, notFound } from "@tanstack/react-router";
import { DevFolioPage } from "@/components/site/DevFolio";
import { TEAM_DATA } from "@/data/team";
import { PROFILE_IMAGES } from "@/data/profileImages";
import { AnimatePresence, motion } from "framer-motion";

export const Route = createFileRoute("/team/$slug")({
  head: ({ params }) => {
    const t = TEAM_DATA[params.slug];
    const title = t ? `${t.fullName} — DevFolio` : "DevFolio";
    return {
      meta: [
        { title },
        { name: "description", content: t?.intro ?? "" },
        { property: "og:title", content: title },
        { property: "og:description", content: t?.intro ?? "" },
      ],
    };
  },
  component: TeamPage,
});

function TeamPage() {
  const { slug } = Route.useParams();
  const data = TEAM_DATA[slug];
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
        <DevFolioPage {...data} profileImage={PROFILE_IMAGES[slug]} />
      </motion.div>
    </AnimatePresence>
  );
}