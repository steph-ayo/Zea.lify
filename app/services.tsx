"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { CardHoverEffectDemo } from "./snippets/card-hover-effect-snippet";

const Services = () => {
  return (
    <section className="relative overflow-hidden pt-5 pb-15 bg-[#090909] text-white">
      {/* Subtle Gradient Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-purple-900/10 to-black opacity-60 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2
            className="text-4xl md:text-6xl font-extrabold 
            bg-clip-text text-transparent bg-gradient-to-r
            from-blue-400 via-purple-400 to-sky-200"
          >
            Our Services
          </h2>
          <p
            className="mt-4 text-base md:text-lg text-neutral-400 
            max-w-2xl mx-auto"
          >
            At Zea.lify, we transform bold ideas into visual experiences — from
            custom wear design to full-scale brand storytelling. Every project
            is built to *look good, feel good,* and *inspire loyalty.*
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <CardHoverEffectDemo />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-10 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-neutral-100">
            Ready to bring your vision to life?
          </h3>
          <p className="text-neutral-400 mb-8 max-w-md mx-auto">
            Let’s craft something unforgettable — your brand, your style, your
            story.
          </p>

          {/* CTA button */}
          <Link href="/contact">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 40px rgba(147, 51, 234, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="relative group px-8 py-3 rounded-full overflow-hidden text-sm md:text-base font-semibold
    text-white border border-white/20
    transition-all duration-500"
            >
              {/* Outer animated ring */}
              {/* <span
                className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,_rgba(147,51,234,0.5),_rgba(59,130,246,0.3)_70%,_transparent_100%)]
      opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md"
              /> */}

              {/* Shiny gradient stroke */}
              {/* <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-[spin_6s_linear_infinite] opacity-30" /> */}

              {/* Button text */}
              <span className="relative z-10 flex items-center justify-center gap-2">
                Contact us
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
