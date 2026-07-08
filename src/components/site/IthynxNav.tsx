import { FeedbackForm } from "./FeedbackForm";
import { Link } from "@tanstack/react-router";
import { GetStartedDialog } from "@/components/site/GetStartedDialog";

export function IthynxNav() {
  return (
    <nav className="sticky top-0 z-40 glass-nav">
      <div className="flex items-center justify-between px-6 md:px-12 py-4 max-w-7xl mx-auto">
        <Link to="/" className="text-2xl tracking-tight flex items-center gap-2 font-serif-display">
          <img src="/logo.png" alt="iThynx Logo" className="w-8 h-8 object-contain" />
          iThynx<span className="text-[#4ade80]">.</span>
        </Link>
        <div className="hidden md:flex space-x-7 text-slate-400 text-xs font-medium uppercase tracking-[0.18em]">
          <a href="/#features" className="hover:text-white transition-colors duration-300 link-grow">Features</a>
          <a href="/#modules" className="hover:text-white transition-colors duration-300 link-grow">Modules</a>
          <a href="/#plans" className="hover:text-white transition-colors duration-300 link-grow">Plans</a>
          <a href="/#pricing" className="hover:text-white transition-colors duration-300 link-grow">Pricing</a>
          <a href="/#gallery" className="hover:text-white transition-colors duration-300 link-grow">Gallery</a>
          <a href="/#team" className="hover:text-white transition-colors duration-300 link-grow">Team</a>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <a href="/#pricing" className="hidden sm:block text-xs font-semibold px-4 py-2 border border-white/10 rounded-xl text-slate-200 hover:bg-white/5 transition">Sign In</a>
          <a
            href="/Ithynx_Proposal_final.pdf"
            download
            className="hidden sm:inline-flex items-center justify-center rounded-xl border border-[#4ade80]/30 bg-[#4ade80]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#4ade80] transition hover:bg-[#4ade80]/20"
          >
            Proposal
          </a>
          <GetStartedDialog
            trigger={
              <button suppressHydrationWarning className="text-xs font-bold px-4 py-2 bg-[#4ade80] text-[#1a1a2e] rounded-xl hover:shadow-[0_0_24px_rgba(74,222,128,0.45)] transition">
                Get Started
              </button>
            }
          />
        </div>
      </div>
    </nav>
  );
}

export function IthynxFooter() {
  return (
    <footer className="mt-24 border-t border-gray-900 pt-16 pb-10 bg-slate-950/50">
      <FeedbackForm />
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 text-xl font-bold mb-6">
            <img src="/logo.png" alt="iThynx Logo" className="w-6 h-6 object-contain" />
            iThynx
          </div>
          <p className="text-gray-500 text-xs leading-loose max-w-xs">The modern LMS built for teams who take learning seriously. Train smarter, grow faster.</p>
        </div>
        <div>
          <h4 className="text-sm font-bold mb-6 text-white">Product</h4>
          <ul className="text-gray-500 text-xs space-y-4 font-medium">
            <li><a href="/#features" className="hover:text-blue-400 transition">Features</a></li>
            <li><a href="/#pricing" className="hover:text-blue-400 transition">Pricing</a></li>
            <li><a href="/#plans" className="hover:text-blue-400 transition">Plans</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold mb-6 text-white">Team</h4>
          <ul className="text-gray-500 text-xs space-y-4 font-medium">
            <li><a href="/team/sumathi" className="hover:text-blue-400 transition">Dr. S. Sumathi</a></li>
            <li><a href="/team/karthi" className="hover:text-blue-400 transition">Karthi S</a></li>
            <li><a href="/team/kevin" className="hover:text-blue-400 transition">Kevin Jeyaraj</a></li>
            <li><a href="/team/larissh" className="hover:text-blue-400 transition">Larissh M Aro</a></li>
            <li><a href="/team/prakash" className="hover:text-blue-400 transition">Prakash S</a></li>
            <li><a href="/team/surya" className="hover:text-blue-400 transition">Surya Narayanan V</a></li>
            <li><a href="/team/pari" className="hover:text-blue-400 transition">Pari Arul</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold mb-6 text-white">Company</h4>
          <ul className="text-gray-500 text-xs space-y-4 font-medium">
            <li><a href="#" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
            <li><Link to="/terms" className="hover:text-blue-400 transition">Terms & Conditions</Link></li>
            <li className="leading-relaxed mt-4">
              <span className="block text-white mb-1">Address:</span>
              No.16, F1, Kanchi Kamakshi Nagar,<br />
              1st Street, Madipakkam,<br />
              Chennai-91
            </li>
            <li className="leading-relaxed mt-4">
              <span className="block text-white mb-1">Mail ID</span>
              contact@ithynx.co.in
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 font-bold uppercase tracking-widest gap-4">
        <p>© 2026 iThynx. All rights reserved.</p>
        <p>Human Intellect. Scalable Engineering.</p>
      </div>
    </footer>
  );
}