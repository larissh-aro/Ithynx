import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  trigger: React.ReactNode;
  defaultPlan?: string;
};

const TRACKS = [
  { id: "ai-ml", label: "AI & Machine Learning", hint: "ML, DL, RL, GenAI, LLMs, Agentic AI" },
  { id: "full-stack", label: "Full Stack Development", hint: "MERN, React/Next.js, Node, Full Stack AI" },
  { id: "languages", label: "Programming Languages", hint: "Python, Java, DSA in Java, Enterprise" },
  { id: "data", label: "Data Engineering & Science", hint: "Pipelines, ETL, Data Science" },
  { id: "multiple", label: "Multiple Courses", hint: "We'll figure out the right combo together" },
];

export function GetStartedDialog({ trigger, defaultPlan }: Props) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [plan, setPlan] = useState(defaultPlan ?? "ai-ml");
  const [role, setRole] = useState("Faculty");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const reset = () => {
    setStep(1);
    setSubmitted(false);
    setName("");
    setEmail("");
    setOrg("");
    setNotes("");
    setIsSubmitting(false);
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !org) return;
    
    setIsSubmitting(true);
    
    try {
      const scriptUrl = import.meta.env.VITE_GOOGLE_SHEET_URL;
      
      if (scriptUrl) {
        const formData = new FormData();
        formData.append("FormType", "GetStarted");
        formData.append("Plan", TRACKS.find(t => t.id === plan)?.label || plan);
        formData.append("Name", name);
        formData.append("Email", email);
        formData.append("Institution", org);
        formData.append("Role", role);
        formData.append("Notes", notes);
        formData.append("Date", new Date().toISOString());

        await fetch(scriptUrl, {
          method: "POST",
          body: formData,
          mode: "no-cors"
        });
      }
      
      setSubmitted(true);
    } catch (error) {
      console.error("Failed to submit form", error);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
        if (!v) setTimeout(reset, 300);
      }}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-lg bg-[#0f1426] border-white/10 text-slate-200">
        <DialogHeader>
          <DialogDescription className="text-[10px] uppercase tracking-[0.28em] text-[#4ade80] font-bold">
            Step {submitted ? 3 : step} of 3
          </DialogDescription>
          <DialogTitle className="font-serif-display text-3xl text-white">
            {submitted
              ? "You're all set!"
              : step === 1
                ? "What are you looking for?"
                : "Tell us a bit about yourself."}
          </DialogTitle>
        </DialogHeader>

        {/* Progress bar */}
        <div className="h-1 w-full rounded-full bg-white/5 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#4ade80] to-[#a78bfa]"
            initial={false}
            animate={{ width: submitted ? "100%" : step === 1 ? "33%" : "66%" }}
            transition={{ duration: 0.4 }}
          />
        </div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="done"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-6 text-center"
            >
              <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-[#4ade80]/15 border border-[#4ade80]/40 flex items-center justify-center text-2xl">
                ✓
              </div>
              <p className="text-slate-300">
                Our team will reach out within 24 hours with a tailored proposal for{" "}
                <span className="text-[#4ade80] font-semibold">
                  {TRACKS.find((t) => t.id === plan)?.label}
                </span>
                .
              </p>
            </motion.div>
          ) : step === 1 ? (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2"
            >
              {TRACKS.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setPlan(t.id)}
                  className={`text-left p-4 rounded-xl border transition ${
                    plan === t.id
                      ? "border-[#4ade80] bg-[#4ade80]/10 shadow-[0_0_20px_rgba(74,222,128,0.18)]"
                      : "border-white/10 bg-white/[0.03] hover:border-white/25"
                  }`}
                >
                  <p className="font-semibold text-white">{t.label}</p>
                  <p className="text-xs text-slate-400 mt-1">{t.hint}</p>
                </button>
              ))}
            </motion.div>
          ) : (
            <motion.form
              key="step2"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="space-y-4 py-2"
              onSubmit={submitForm}
              id="getstarted-form"
            >
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="name" className="text-xs text-slate-400">Name</Label>
                  <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required className="bg-white/5 border-white/10 mt-1" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-xs text-slate-400">Email</Label>
                  <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="bg-white/5 border-white/10 mt-1" />
                </div>
              </div>
              <div>
                <Label htmlFor="org" className="text-xs text-slate-400">Institution / Company</Label>
                <Input id="org" value={org} onChange={(e) => setOrg(e.target.value)} required className="bg-white/5 border-white/10 mt-1" />
              </div>
              <div>
                <Label className="text-xs text-slate-400">I am a…</Label>
                <div className="grid grid-cols-3 gap-2 mt-1">
                  {["Faculty", "Admin", "Student"].map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRole(r)}
                      className={`text-xs py-2 rounded-md border transition ${
                        role === r
                          ? "border-[#a78bfa] bg-[#a78bfa]/15 text-white"
                          : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/25"
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <Label htmlFor="notes" className="text-xs text-slate-400">Anything we should know?</Label>
                <Textarea id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} rows={2} className="bg-white/5 border-white/10 mt-1" />
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        {!submitted && (
          <DialogFooter className="flex sm:justify-between gap-2">
            <button
              type="button"
              onClick={() => (step === 1 ? setOpen(false) : setStep(1))}
              className="px-4 py-2 rounded-lg text-xs uppercase tracking-widest text-slate-400 hover:text-white transition"
            >
              {step === 1 ? "Cancel" : "← Back"}
            </button>
            {step === 1 ? (
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-6 py-2.5 rounded-lg bg-[#4ade80] text-[#1a1a2e] text-xs font-bold uppercase tracking-widest hover:shadow-[0_0_24px_rgba(74,222,128,0.45)] transition"
              >
                Continue →
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                form="getstarted-form"
                className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#4ade80] to-[#a78bfa] text-[#1a1a2e] text-xs font-bold uppercase tracking-widest hover:opacity-95 transition disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Request callback"}
              </button>
            )}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}