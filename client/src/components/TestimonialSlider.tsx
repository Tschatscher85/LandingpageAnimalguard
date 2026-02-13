import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { name: "Sarah M.", tierart: "Hundebesitzerin", text: "Sven hat uns super beraten und den perfekten Tarif gefunden. Unser Golden Retriever ist jetzt rundum geschützt. Die Schadensabwicklung ging blitzschnell!", rating: 5 },
  { name: "Thomas K.", tierart: "Katzenbesitzer", text: "Endlich eine Versicherung, bei der man nicht ewig in Warteschleifen hängt. Per WhatsApp war alles in 5 Minuten geklärt. Top!", rating: 5 },
  { name: "Julia & Stefan R.", tierart: "Pferdebesitzer", text: "Wir waren skeptisch, ob sich eine Pferdeversicherung lohnt. Nach der OP unseres Wallachs waren wir mehr als froh. 100% Erstattung!", rating: 5 },
  { name: "Andrea B.", tierart: "Hundebesitzerin", text: "Mein Dackel hatte eine Kreuzband-OP — über 3.000€. Dank AnimalGuard musste ich mir keine Sorgen machen. Schnelle Erstattung, super Service.", rating: 5 },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % reviews.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const review = reviews[current];

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10 text-center transition-all">
        <div className="flex justify-center mb-4">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 italic">
          "{review.text}"
        </p>
        <div>
          <p className="font-bold text-[#003781]">{review.name}</p>
          <p className="text-sm text-gray-500">{review.tierart}</p>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-[#097E92] w-6" : "bg-gray-300"}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button onClick={() => setCurrent((c) => (c - 1 + reviews.length) % reviews.length)} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-all text-gray-400 hover:text-[#097E92]">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={() => setCurrent((c) => (c + 1) % reviews.length)} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-all text-gray-400 hover:text-[#097E92]">
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
