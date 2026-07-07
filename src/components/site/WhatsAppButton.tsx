import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/916369983585"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] bg-[#25D366] hover:bg-[#128C7E] text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-[0_0_24px_rgba(37,211,102,0.6)] transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-30"></div>
      <FaWhatsapp className="w-6 h-6 md:w-8 md:h-8 relative z-10" />
      <span className="absolute -top-12 right-0 bg-slate-900 text-slate-200 text-[10px] uppercase tracking-widest font-bold px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-700 shadow-xl pointer-events-none">
        Chat with us!
        <span className="absolute -bottom-1.5 right-6 w-3 h-3 bg-slate-900 border-b border-r border-slate-700 rotate-45" />
      </span>
    </a>
  );
}
