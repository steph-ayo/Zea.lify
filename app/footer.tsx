"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-black/95 border-t border-neutral-800 text-neutral-400 py-16 px-6 md:px-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[400px] h-[400px] bg-blue-600/10 blur-[120px] top-0 left-0" />
        <div className="absolute w-[400px] h-[400px] bg-purple-600/10 blur-[120px] bottom-0 right-0" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        {/* Left: Brand */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo/zea.lify.jpeg"
              alt="Zealify Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="text-white font-semibold text-xl tracking-wide">
              Zealify
            </span>
          </div>
          <p className="text-sm max-w-xs text-neutral-400 leading-relaxed">
            Where creativity meets craftsmanship. Premium custom apparel
            designed to help you wear your story with pride.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-medium text-lg mb-2">Quick Links</h4>
          <Link
            href="/"
            className="hover:text-white transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/custom-branding"
            className="hover:text-white transition-colors duration-300"
          >
            Custom Branding
          </Link>
          <Link
            href="/shop"
            className="hover:text-white transition-colors duration-300"
          >
            Shop
          </Link>
          <Link
            href="/contact"
            className="hover:text-white transition-colors duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Right: Contact & Socials */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-medium text-lg mb-2">Get in touch</h4>
          <p className="text-sm text-neutral-400">hello@zealify.com</p>
          <p className="text-sm text-neutral-400">+234 801 234 5678</p>

          {/* Social Icons */}
          <div className="flex gap-5 pt-4">
            <motion.a
              href="https://wa.me/2348065893230"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] p-2 rounded-full hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] transition-all duration-300"
              whileHover={{ scale: 1.2 }}
            >
              <MessageCircle size={20} className="text-white" />
            </motion.a>

            <motion.a
              href="https://www.instagram.com/zea.lify/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:shadow-[0_0_25px_rgba(255,100,100,0.6)] transition-all duration-300"
              whileHover={{ scale: 1.2 }}
            >
              <Instagram size={20} className="text-white" />
            </motion.a>

            <motion.a
              href="https://web.facebook.com/p/Zealify-61579608185347/?_rdc=1&_rdr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1877F2] p-2 rounded-full hover:shadow-[0_0_25px_rgba(24,119,242,0.6)] transition-all duration-300"
              whileHover={{ scale: 1.2 }}
            >
              <Facebook size={20} className="text-white" />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-neutral-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500 relative z-10">
        <p>© {new Date().getFullYear()} Zealify. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
