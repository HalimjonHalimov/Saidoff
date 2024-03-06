import React, { useCallback, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Fade,
  Reveal,
  Bounce,
  Flip,
  Hinge,
  JackInTheBox,
  Roll,
  Rotate,
  Slide,
  Zoom,
} from "react-awesome-reveal";
import Logo from "@/public/Logo_White.png";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import BackDrop from "./backDrop";
import { IoMdClose } from "react-icons/io";
import moment from "moment";
import { navItems, socialMedia } from "@/utils/data";

export default function Navbar() {
  const [navigation, setNavigation] = useState(false);

  const handleToggle = useCallback(() => {
    setNavigation((prev) => !prev);
  }, []);
  return (
    <>
      <>
        <div className="w-full h-[100px] flex flex-col items-center justify-center bg-[#000000] text-[#FFFFFF]  border-b border-[#FFFFFF33]">
          <div className="relative container mx-auto flex justify-between items-center">
            <Link href="/">
              <Image src={Logo} alt="" />
            </Link>
            <div className="flex gap-2">
              <button
                type="button"
                className="w-[200px] h-[50px] hover:text-black hover:bg-white flex justify-center items-center gap-1 border border-white rounded-full transition"
              >
                Давайте обсудим{" "}
                <span>
                  <GoArrowUpRight />
                </span>
              </button>
              <button
                type="button"
                onClick={handleToggle}
                className="w-[50px] h-[50px] hover:text-black hover:bg-white flex justify-center items-center gap-1 border border-white rounded-full transition"
              >
                <RxHamburgerMenu size={24} />
              </button>
            </div>
            <div
              className={`absolute w-[588px] h-auto ${
                navigation ? "top-0 opacity-100" : "top-40 opacity-0"
              } p-8 right-0 bg-white rounded-xl text-black transition-all duration-150 ease-in-out z-20`}
            >
              <div className="w-full h-auto flex justify-between items-center border-b border-black/25 py-4">
                <div className="text-lg font-medium text-[#7F7F7F]">
                  Ташкент, Узбекистан{" "}
                  <span className="text-black">
                    {moment(new Date()).format("LT")}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleToggle}
                  className="p-2 border border-black rounded-full"
                >
                  <IoMdClose size={24} />
                </button>
              </div>
              <ul className="w-full h-auto pt-4 flex flex-col justify-start items-start gap-2 text-xl font-bold text-black uppercase">
                {navItems.map((item, i) => (
                  <li
                    key={i}
                    className="border-white border-b hover:border-black transition-all"
                  >
                    <Link href={item.url}>{item.label}</Link>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-end">
                <Link
                  href={"/"}
                  className="w-44 h-auto py-2 flex flex-row justify-start items-center border-white border-b hover:border-black transition-all gap-2 italic text-base font-semibold "
                >
                  {"hello@saidoff.agency"} <GoArrowUpRight />
                </Link>
                <ul className="w-full h-auto flex flex-col justify-end items-end">
                  {socialMedia.map((item, i) => (
                    <li key={item.id}>
                      <Link
                        href={item.url}
                        className="flex capitalize flex-row justify-start items-center border-white border-b hover:border-black transition-all gap-2 w-24 h-8 italic text-base font-semibold "
                      >
                        {item.title} <GoArrowUpRight />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {navigation ? <BackDrop onClick={handleToggle} /> : null}
          </div>
        </div>
      </>
    </>
  );
}
