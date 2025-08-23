"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import DropDownMenu from "./drop-down-menu";

const Navbar = () => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };

  return (
    <div>
      <div className="p-6 md:p-10 flex items-center justify-between z-50">
        {/* LOGO */}
        <div>
          <Link className="cursor-pointer" href="/">
            <Image
              priority
              src="/logo/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="w-10 h-10 md:w-14"
            ></Image>
          </Link>
        </div>
        {/* NAV LINKS */}
        <div className="cursor-pointer hidden md:flex space-x-10 items-center text-slate-300 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          <div className="hover:text-gray-50">Website design</div>
          <div className="hover:text-gray-50">Graphic design</div>
          <div className="hover:text-gray-50">Shopify Stores</div>
          <div className="hover:text-gray-50">Brands</div>

          <Link href="/pricing" className="hover:text-gray-50">
            Pricing
          </Link>
        </div>

        {/* NAV BURGER ICON */}
        <div className="flex md:hidden">
          (isDropDownVisible ?(
          {/* Display an x when dropdown is visible */}
          <div
            onClick={toggleDropDown}
            className="w-8 h-8 text-slate-300 cursor-pointer"
          >
            <X />
            <DropDownMenu onClose={closeDropDown} />
          </div>
          ) : (
          <AlignJustify
            onClick={toggleDropDown}
            className="w-8 h-8 text-slate-300 cursor-pointer"
          />
          ) )
        </div>
      </div>
    </div>
  );
};

export default Navbar;
