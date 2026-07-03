import { createFileRoute } from "@tanstack/react-router";
import { IthynxNav, IthynxFooter } from "@/components/site/IthynxNav";
import { motion } from "framer-motion";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — iThynx" },
      { name: "description", content: "Terms and conditions governing the use of iThynx platform and services." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="text-slate-200 selection:bg-[#4ade80]/30 aurora-bg min-h-screen relative overflow-x-hidden">
      {/* Page-wide aurora blobs */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-0">
        <div className="aurora-blob animate-aurora" style={{ top: "-10%", left: "-10%", width: "55%", height: "55%", background: "rgba(167,139,250,0.12)" }} />
        <div className="aurora-blob animate-aurora" style={{ bottom: "-15%", right: "-10%", width: "55%", height: "55%", background: "rgba(74,222,128,0.08)", animationDelay: "-6s" }} />
      </div>

      <IthynxNav />

      <main className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#4ade80] text-[10px] font-bold tracking-[0.25em] uppercase mb-4">// Legal Framework</p>
          <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl mb-6 headline-gradient">
            Terms & Conditions
          </h1>
          <p className="text-slate-400 text-xs mb-12 uppercase tracking-wider font-mono">
            Last Updated: July 3, 2026
          </p>

          <div className="space-y-10 text-slate-300 text-sm sm:text-base leading-relaxed">
            <section className="glass-card p-8 rounded-3xl glow-border">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-[#4ade80]">01.</span> Agreement to Terms
              </h2>
              <p>
                Welcome to iThynx. By accessing or using our platform, website, learning management systems, and workshops (collectively, the "Services"), you agree to be bound by these Terms & Conditions. If you do not agree, please do not access or use our Services. These terms govern the relationship between iThynx and individual users, students, and partner academic institutions.
              </p>
            </section>

            <section className="glass-card p-8 rounded-3xl glow-border">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-[#4ade80]">02.</span> Professional Mentorship & Scope
              </h2>
              <p>
                iThynx provides high-performance, practitioner-led training programs, Elective tracks, and hands-on bootcamps. Our curriculum is mapped directly to systems engineering, modern web technologies, full stack databases, and infrastructure. We act as facilitators of human software craftsmanship; all instruction is conducted by active industry professionals. While we strive to align modules with institutional credit requirements, final credit transfer validation remains at the discretion of partner departments.
              </p>
            </section>

            <section className="glass-card p-8 rounded-3xl glow-border">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-[#4ade80]">03.</span> Intellectual Property Rights
              </h2>
              <p>
                All materials, curricula, lesson structures, slides, sandbox codebases, labs, and interactive platform telemetry provided by iThynx remain the exclusive intellectual property of iThynx Labs. You are granted a limited, personal, non-transferable, and revocable license to access course materials for your educational growth. No content may be reproduced, distributed, or resold without prior written consent from our management.
              </p>
            </section>

            <section className="glass-card p-8 rounded-3xl glow-border">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-[#4ade80]">04.</span> Student Conduct & Academic Integrity
              </h2>
              <p>
                To maintain the integrity of our program, participants must adhere to the highest standards of academic honesty. Plagiarism, copying project repositories without active contribution, or falsifying execution logs inside containerized labs will result in immediate suspension from the program without refund. Collaboration is encouraged during sandbox challenges, but final evaluation gates must represent individual effort.
              </p>
            </section>

            <section className="glass-card p-8 rounded-3xl glow-border">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-[#4ade80]">05.</span> Financial Terms & Refunds
              </h2>
              <p>
                Partner institutions are billed according to signed Service Level Agreements (SLAs) on a weekly or semester basis. Individual seats purchased for workshops or specialized tracks are final and non-refundable unless specified otherwise in writing. Rates are exclusive of applicable government taxes. Failure to complete payments in a timely manner may result in sandbox environment de-provisioning.
              </p>
            </section>

            <section className="glass-card p-8 rounded-3xl glow-border">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-[#4ade80]">06.</span> Limitation of Liability
              </h2>
              <p>
                In no event shall iThynx, its founders, directors, employees, or mentors be held liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation loss of profits, data misuse, server interruptions, or academic placement outcomes. The Services are provided on an "AS IS" and "AS AVAILABLE" basis.
              </p>
            </section>

            <section className="glass-card p-8 rounded-3xl glow-border">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-[#4ade80]">07.</span> Governing Law & Disputes
              </h2>
              <p>
                These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Chennai, Tamil Nadu, India.
              </p>
            </section>

            <section className="glass-card p-8 rounded-3xl glow-border">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-[#4ade80]">08.</span> Contact & Support
              </h2>
              <p>
                If you have questions regarding these terms, or if you need legal clarifications, please reach out to our administration office or submit a query through our feedback platform.
              </p>
            </section>
          </div>
        </motion.div>
      </main>

      <IthynxFooter />
    </div>
  );
}
