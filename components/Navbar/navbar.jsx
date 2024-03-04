import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Fade, Zoom } from "react-reveal";
import Logo from "@/public/Logo_White.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <Zoom cascade>
      <div className="w-full h-[100px] flex flex-col items-center justify-center bg-[#000000] text-[#FFFFFF]  border-b border-[#FFFFFF33]">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <Image src={Logo} alt="" />
          </Link>
          <div className="flex gap-2">
            <button
              type="button"
              className="w-[200px] h-[50px] hover:text-black hover:bg-white flex justify-center items-center gap-1 border border-white rounded-full transition"
            >
              Давайте обсудим <span>1</span>
            </button>
            <button
              type="button"
              className="w-[50px] h-[50px] hover:text-black hover:bg-white flex justify-center items-center gap-1 border border-white rounded-full transition"
            >
              <RxHamburgerMenu size={24} />
            </button>
          </div>
        </div>
      </div>
    </Zoom>
  );
}
