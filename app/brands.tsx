"use client";

import Image from "next/image";
import { Lora } from "next/font/google";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const font = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

const logos = [
  { image: "/logo/logo.png" },
  { image: "/logo/logo.png" },
  { image: "/logo/logo.png" },
  { image: "/logo/logo.png" },
  { image: "/logo/logo.png" },
  { image: "/logo/logo.png" },
];

const Brands = () => {
  return (
    <div className="relative overflow-hidden py-20">
      {/* ✨ Subtle gradient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(88,28,135,0.25),_transparent_70%)] blur-3xl" />

      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20">
        {/* 🩵 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl text-center font-semibold bg-clip-text text-transparent bg-gradient-to-b from-purple-400 via-blue-300 to-sky-100"
        >
          The best brands <br /> choose us
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-base md:text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto"
        >
          From small startups to global giants — we help brands scale, inspire,
          and connect.
        </motion.p>

        {/* 🌀 Animated Logo Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center mx-auto mt-16 md:w-4/5"
        >
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="flex items-center justify-center"
            >
              <div className="relative group">
                {/* Floating Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  priority
                  src={logo.image}
                  width={500}
                  height={500}
                  alt="brand logo"
                  className="w-24 md:w-28 xl:w-32 opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 💬 Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div
            className={cn(
              "text-lg md:text-xl xl:text-2xl text-white/90 max-w-2xl mx-auto italic leading-relaxed",
              font.className
            )}
          >
            “We replaced nearly a dozen different tools after switching to Bird.
            The results were instant — and stunning.”
          </div>

          <div className="mt-6 flex flex-col items-center justify-center text-white">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={1000}
              height={1000}
              className="w-10 xl:w-12 opacity-90"
            />
            <div className="pt-3">
              <div className="text-sm font-semibold">Carlos Hernandez</div>
              <div className="text-xs text-neutral-400">
                Marketing Director, Palium Software
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Brands;
