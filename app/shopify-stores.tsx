"use client";

import Image from "next/image";

const reviews = [
  {
    image: "/images/review1.png",
    quote:
      "Zea.lify brought our brand vision to life — the hoodies came out exactly how we imagined. Quality and detail on point.",
    name: "Tunde A.",
  },
  {
    image: "/images/review2.png",
    quote:
      "The design team understood our vibe from day one. From logo to merch, everything screams our identity.",
    name: "Sarah M.",
  },
  {
    image: "/images/review3.png",
    quote:
      "Our staff uniforms turned out insane. Clean prints, premium fabric, fast delivery — Zea.lify really doesn’t miss.",
    name: "Lex Studios",
  },
];

const ShopifyStores = () => {
  return (
    <section className="mt-10 md:py-16 bg-black text-white w-full rounded-3xl">
      <div className="p-6 md:p-10 mx-auto max-w-5xl relative z-10">
        {/* Title */}
        <div className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
          What Our Clients Say
        </div>

        <p className="mt-3 text-neutral-400 text-center max-w-md mx-auto">
          Real experiences from brands, teams, and creators who trusted Zea.lify
          with their vision.
        </p>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-zinc-800 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-white/20 transition-all"
            >
              <p className="text-neutral-200 italic leading-relaxed">
                “{review.quote}”
              </p>
              <p className="text-neutral-400 font-semibold mt-4">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopifyStores;
