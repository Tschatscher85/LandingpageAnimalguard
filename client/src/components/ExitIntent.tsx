import { useState, useEffect } from "react";
import { X, MessageCircle, Gift } from "lucide-react";

export default function ExitIntent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("exitIntentDismissed");
    if (dismissed) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShow(true);
        document.removeEventListener("mouseout", handleMouseLeave);
      }
    };

    // Only on desktop
    const timer = setTimeout(() => {
      if (window.innerWidth >= 768) {
        document.addEventListener("mouseout", handleMouseLeave);
      }
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  const dismiss = () => {
    setShow(false);
    sessionStorage.setItem("exitIntentDismissed", "true");
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={dismiss}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={dismiss} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <div className="bg-[#097E92]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift className="w-8 h-8 text-[#097E92]" />
          </div>
          <h3 className="text-2xl font-extrabold text-[#003781] mb-2">Warte kurz!</h3>
          <p className="text-gray-600 mb-6">
            Lass dir von uns <strong>kostenlos & unverbindlich</strong> ein individuelles Angebot für dein Tier erstellen.
          </p>
          <a
            href="https://wa.me/4973319460350?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Tierversicherung."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-lg font-bold px-6 h-14 rounded-xl shadow-lg transition-all hover:scale-[1.02]"
            onClick={dismiss}
          >
            <MessageCircle className="w-5 h-5" />
            Kostenlos beraten lassen
          </a>
          <button onClick={dismiss} className="mt-4 text-sm text-gray-400 hover:text-gray-600 transition-colors">
            Nein danke, ich schaue mich nur um
          </button>
        </div>
      </div>
    </div>
  );
}
