import Navbar from "@/components/navbar";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen md:itms-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar />
      <Spotlight
        className="hidden md:flex md:left-80 md:-top-80"
        fill="white"
      />
    </div>
  );
}
