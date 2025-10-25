"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

interface HeroProps {
  scrollToCustomBranding: () => void;
}

const Hero = ({ scrollToCustomBranding }: HeroProps) => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="/videos/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 z-0" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6">
        {/* Hero header text */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Wear Your Zeal.
        </motion.h1>

        {/* Hero Subtitle text */}
        <motion.p
          className="mt-4 text-lg text-neutral-300 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Premium custom tees, hoodies & caps for creators, teams, and brands
          that move with purpose.
        </motion.p>

        <motion.p
          className="mt-2 text-md text-neutral-400 max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          ...crafted with comfort, built for style, made to inspire.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-4 justify-center mt-10 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="cursor-pointer flex justify-center items-center border-2 border-white/50 rounded-full w-48 p-3 text-white font-medium hover:bg-white hover:text-black transition-all duration-300"
            >
              Shop Ready-Made
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              onClick={scrollToCustomBranding}
              className="cursor-pointer flex justify-center items-center border-2 border-white/50 rounded-full w-48 p-3 text-white font-medium hover:bg-white hover:text-black transition-all duration-300"
            >
              Customize Yours
            </button>
          </motion.div>
        </motion.div>

        {/* Floating Social Icons */}
        <motion.div
          className="flex gap-8 justify-center mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/2348065893230"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] p-3 rounded-full hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] transition-all duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <MessageCircle size={26} className="text-white" />
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/zea.lify/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:shadow-[0_0_25px_rgba(255,100,100,0.6)] transition-all duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <Instagram size={26} className="text-white" />
          </motion.a>

          {/* Facebook */}
          <motion.a
            href="https://web.facebook.com/p/Zealify-61579608185347/?_rdc=1&_rdr"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1877F2] p-3 rounded-full hover:shadow-[0_0_25px_rgba(24,119,242,0.6)] transition-all duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <Facebook size={26} className="text-white" />
          </motion.a>
        </motion.div>
      </div>

      {/* Optional Floating Glow Effects */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[150px] top-0 left-0 animate-pulse" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[150px] bottom-0 right-0 animate-pulse" />
    </section>
  );
};

export default Hero;
