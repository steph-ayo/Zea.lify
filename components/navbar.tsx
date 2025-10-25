"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { AlignJustify, X, Play, Pause } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import DropDownMenu from "./drop-down-menu";

interface NavbarProps {
  scrollToCustomBranding: () => void;
}

const Navbar = ({ scrollToCustomBranding }: NavbarProps) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleDropDown = () => setIsDropDownVisible(!isDropDownVisible);
  const closeDropDown = () => setIsDropDownVisible(false);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error("Audio play failed:", err);
        });
    }
  };

  return (
    <div>
      {/* Hidden Audio */}
      <audio ref={audioRef} preload="auto">
        <source src="/music/zea.lify.mp3" type="audio/mpeg" />
      </audio>

      <div className="p-6 md:p-10 flex items-center justify-between z-50">
        {/* LOGO */}
        <div>
          <Link href="/" className="cursor-pointer">
            <Image
              priority
              src="/logo/zea.lify.jpeg"
              alt="logo"
              width={100}
              height={100}
              className="w-10 h-10 md:w-14"
            />
          </Link>
        </div>

        {/* NAV LINKS */}
        <div className="cursor-pointer hidden md:flex space-x-10 items-center text-slate-300 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          <div className="hover:text-gray-50">
            <Link href="/">Home</Link>
          </div>
          <div className="hover:text-gray-50">
            <Link href="/contact">Shop</Link>
          </div>
          <div onClick={scrollToCustomBranding} className="hover:text-gray-50">
            Custom Branding
          </div>
          <Link href="/" className="hover:text-gray-50">
            Pricing
          </Link>
        </div>

        {/* MUSIC TOGGLE SWITCH */}
        <div className="hidden md:flex items-center mr-4">
          <motion.div
            onClick={toggleMusic}
            className="relative w-20 h-10 bg-neutral-800 border border-neutral-700 rounded-full flex items-center cursor-pointer overflow-hidden"
            animate={{
              backgroundColor: isPlaying ? "#2e2e2e" : "#1e1e1e",
            }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="absolute flex items-center justify-center w-8 h-8 bg-neutral-300 rounded-full shadow-md"
              initial={false}
              animate={{
                x: isPlaying ? 40 : 0,
                rotate: isPlaying ? 360 : 0,
                scale: isPlaying ? 1.1 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.8,
              }}
            >
              {isPlaying ? (
                <Pause className="text-neutral-700 w-5 h-5" />
              ) : (
                <Play className="text-neutral-700 w-5 h-5 ml-[2px]" />
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* MOBILE: Music Toggle + Burger */}
        <div className="flex md:hidden items-center space-x-4">
          {/* Music Switch for Mobile */}
          <motion.div
            onClick={toggleMusic}
            className="relative w-16 h-8 bg-neutral-800 border border-neutral-700 rounded-full flex items-center cursor-pointer overflow-hidden"
            animate={{
              backgroundColor: isPlaying ? "#2e2e2e" : "#1e1e1e",
            }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="absolute flex items-center justify-center w-6 h-6 bg-neutral-300 rounded-full shadow-md"
              initial={false}
              animate={{
                x: isPlaying ? 32 : 0,
                rotate: isPlaying ? 360 : 0,
                scale: isPlaying ? 1.1 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.8,
              }}
            >
              {isPlaying ? (
                <Pause className="text-neutral-700 w-4 h-4" />
              ) : (
                <Play className="text-neutral-700 w-4 h-4 ml-[1px]" />
              )}
            </motion.div>
          </motion.div>

          {/* Burger / Close Icon */}
          {isDropDownVisible ? (
            <div
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            >
              <X />
              <DropDownMenu
                onClose={closeDropDown}
                scrollToCustomBranding={scrollToCustomBranding}
              />
            </div>
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            />
          )}
        </div>

        {/* CONTACT BUTTON */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
