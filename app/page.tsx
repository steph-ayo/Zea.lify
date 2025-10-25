"use client";

import Navbar from "@/components/navbar";
import { Spotlight } from "@/components/ui/spotlight";

import Hero from "./hero";
import SliderOne from "@/components/ui/slider";
import CustomBranding from "./customBranding";
import Services from "./services";
import FAQS from "./faq";
import { useRef } from "react";
import Footer from "./footer";
import Reviews from "./reviews";

export default function Home() {
  const customBrandingRef = useRef<HTMLDivElement>(null);

  const scrollToCustomBranding = () => {
    customBrandingRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full  md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar scrollToCustomBranding={scrollToCustomBranding} />
      <Spotlight className="hidden md:flex md:left-80" fill="white" />
      <div className="mx-auto relative z-10 w-full px-2">
        <div>
          <Hero scrollToCustomBranding={scrollToCustomBranding} />
        </div>

        <div className="w-full pt-10">
          <SliderOne />
        </div>

        <div ref={customBrandingRef}>
          <CustomBranding />
        </div>

        <div id="services">
          <Services />
        </div>

        <Reviews />

        <FAQS />

        <Footer />
      </div>
    </div>
  );
}
