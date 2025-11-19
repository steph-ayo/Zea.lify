import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PiPaintBrush, PiTShirt, PiHandshake } from "react-icons/pi";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={zeaLifyServices} />
    </div>
  );
}

export const zeaLifyServices = [
  {
    icon: (
      <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-4 rounded-full">
        <PiPaintBrush className="w-8 h-8 text-rose-600" />
      </div>
    ),
    title: "Custom Branding",
    description:
      "From concept to creation, we design visual identities that capture your brand’s energy and stand out in any crowd.",
  },
  {
    icon: (
      <div className="bg-gradient-to-br from-violet-100 to-indigo-100 p-4 rounded-full">
        <PiTShirt className="w-8 h-8 text-indigo-600" />
      </div>
    ),
    title: "Apparel Printing",
    description:
      "Premium t-shirts, hoodies, and merch designed and printed with precision. Perfect for brands, teams, and creators.",
  },

  {
    icon: (
      <div className="bg-gradient-to-br from-slate-100 to-gray-200 p-4 rounded-full">
        <PiHandshake className="w-8 h-8 text-gray-700" />
      </div>
    ),
    title: "Partnership & Support",
    description:
      "We don’t just serve clients, we build lasting partnerships. From launch to growth, Zea.Lify’s got your back.",
  },
];
