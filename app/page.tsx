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

export default function Home() {
  const websiteDesignRef = useRef<HTMLDivElement>(null);
  const graphicDesignRef = useRef<HTMLDivElement>(null);
  const shopifyStoresRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToWebsiteDesign = () => {
    websiteDesignRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToGraphicDesign = () => {
    graphicDesignRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToShopifyStores = () => {
    shopifyStoresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBrands = () => {
    brandsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Function to scroll to Services section
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full  md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
        scrollToWebsiteDesign={scrollToWebsiteDesign}
        scrollToGraphicDesign={scrollToGraphicDesign}
        scrollToShopifyStores={scrollToShopifyStores}
        scrollToBrands={scrollToBrands}
        scrollToServices={scrollToServices}
      />
      <Spotlight className="hidden md:flex md:left-80" fill="white" />
      <div className="mx-auto relative z-10 w-full px-2">
        <div>
          <Hero />
        </div>

        <div className="w-full pt-20">
          <SliderOne />
        </div>

        <div ref={websiteDesignRef}>
          <CustomBranding />
        </div>

        <div id="services">
          <Services />
        </div>

        <FAQS />

        <Footer />
      </div>
    </div>
  );
}
