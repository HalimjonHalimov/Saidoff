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
import Input from "../Input/input";
import Textarea from "../Input/textarea";

export default function Navbar() {
  const [navigation, setNavigation] = useState(false);
  const [discuss, setDiscuss] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [checkBox, setCheckBox] = useState(false);

  const handleToggle = useCallback((setState) => {
    setState((prev) => !prev);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, phone, message };
    console.log(data);
    handleToggle(setDiscuss);
    setName("");
    setPhone("");
    setMessage("");
    setCheckBox(false)
  };

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
                onClick={() => handleToggle(setDiscuss)}
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
                onClick={() => handleToggle(setNavigation)}
                className="w-[50px] h-[50px] hover:text-black hover:bg-white flex justify-center items-center gap-1 border border-white rounded-full transition"
              >
                <RxHamburgerMenu size={24} />
              </button>
            </div>
            <div
              className={`absolute w-[588px] h-auto ${
                navigation ? "right-0  opacity-100" : "-right-[50%]  opacity-0"
              } p-8  top-0  bg-white rounded-xl text-black transition-all duration-150 ease-in-out z-20`}
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
                  onClick={() => handleToggle(setNavigation)}
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
            <div
              className={`fixed container h-auto p-[70px] rounded-t-xl ${
                discuss ? "right-[50%] opacity-100" : "-right-[50%] opacity-0"
              }  translate-x-[50%] bottom-0 z-20 bg-white text-black grid grid-cols-2 gap-2 transition-all duration-200`}
            >
              <div className="flex flex-col justify-between items-start">
                <div className="text-5xl font-bold uppercase leading-[60px]">
                  мы ради что <br /> выбрали команду
                  <Link
                    className="block w-[220px] h-auto pb-1 mt-2 border-b-4 border-black"
                    href={"/"}
                  >
                    saidoff
                  </Link>
                </div>
                <button
                  onClick={() => handleToggle(setDiscuss)}
                  type="button"
                  className="w-[200px] h-[50px] hover:text-white hover:bg-black flex justify-center items-center gap-1 border border-black rounded-full transition"
                >
                  Оставить заявку
                  <span>
                    <GoArrowUpRight />
                  </span>
                </button>
              </div>
              <form
                onSubmit={handleSubmit}
                action="#"
                className="w-full h-auto flex flex-col items-start justify-start gap-4"
              >
                <Input
                  type="name"
                  label="Имя"
                  placeHolder="Ваше имя"
                  state={name}
                  seTState={setName}
                />
                <Input
                  type="tel"
                  label="Номер телефона"
                  placeHolder="+998 99 989 88  99"
                  state={phone}
                  seTState={setPhone}
                />
                <Textarea
                  type="text"
                  label="Сообщение"
                  placeHolder="Сообщение"
                  state={message}
                  setState={setMessage}
                />
                <label
                  htmlFor="chechbox"
                  className="text-base font-normal text-[#484D52] flex justify-start items-center gap-2"
                >
                  <input
                    type="checkbox"
                    className="accent-black"
                    checked={checkBox}
                    onClick={() => setCheckBox((prev) => !prev)}
                    required
                  />
                  Вы соглашаетесь с политикой конфиденциальности.
                </label>
                <button
                  type="submit"
                  className="w-[200px] h-[50px] capitalize hover:text-white hover:bg-black flex justify-center items-center gap-1 border border-black rounded-full transition"
                >
                  отправлять
                  <span>
                    <GoArrowUpRight />
                  </span>
                </button>
              </form>
            </div>
            {navigation ? (
              <BackDrop onClick={() => handleToggle(setNavigation)} />
            ) : null}
            {discuss ? (
              <BackDrop onClick={() => handleToggle(setDiscuss)} />
            ) : null}
            {}
          </div>
        </div>
      </>
    </>
  );
}
