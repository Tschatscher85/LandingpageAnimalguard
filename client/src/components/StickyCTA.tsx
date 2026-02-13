import { MessageCircle } from "lucide-react";

interface StickyCTAProps {
  whatsappLink: string;
  onContact: () => void;
}

export default function StickyCTA({ whatsappLink, onContact }: StickyCTAProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] pb-safe">
      <div className="flex gap-2 p-3 max-w-lg mx-auto">
        <button
          onClick={onContact}
          className="flex-1 h-12 bg-[#097E92] hover:bg-[#076b7d] text-white font-bold rounded-xl text-sm transition-all active:scale-95"
        >
          Jetzt informieren
        </button>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="h-12 w-12 flex items-center justify-center bg-[#25D366] hover:bg-[#1eb851] rounded-xl transition-all active:scale-95"
          aria-label="WhatsApp Beratung"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </a>
      </div>
    </div>
  );
}
