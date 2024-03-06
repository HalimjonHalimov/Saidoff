import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";
import footer from "../../public/footer.png";

export default function Footer() {
  return (
    <Fade cascade>
      <div className="w-full h-auto pt-[70px] bg-black text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-2  w-full h-auto flex justify-start items-baseline gap-4">
              <div className="text-xl font-medium text-[#999]">
                Наши социальные сети:
              </div>
              <ul className="grid grid-cols-3 gap-4 text-2xl font-semibold ">
                <li>
                  <Link href={"/"}>Instagram</Link>
                </li>
                <li>
                  <Link href={"/"}>Facebook</Link>
                </li>
                <li>
                  <Link href={"/"}>Tiktok</Link>
                </li>
                <li>
                  <Link href={"/"}>Linkedin</Link>
                </li>
                <li>
                  <Link href={"/"}>Youtube</Link>
                </li>
                <li>
                  <Link href={"/"}>Behance</Link>
                </li>
              </ul>
            </div>
            <div className="w-full h-auto grid grid-cols-3 justify-start items-baseline ">
              <div className="text-xl font-medium text-[#999]">Наш адрес:</div>
              <div className="col-span-2 text-end text-balance text-2xl font-semibold">
                Г. Ташент, улица Самарканд Дарвоза, <br /> 33
              </div>
            </div>
          </div>
          <div className="w-full h-auto py-8 flex flex-col justify-center items-center gap-4">
            <Image src={footer} alt="" className="object-cover" />
            <div className="text-center text-3xl font-semibold text-balance">
              Давайте разработаем план и добьемся реальных результатов. Давайте
              сделаем это по-крупному
            </div>
          </div>
          <div className="w-full h-auto border-t border-[#ffffff3a] flex justify-between items-center py-8 text-base font-medium text-[#999]">
            <div> &copy; {new Date().getFullYear()}, Saidoff</div>
            <div className="text-[#fff]">Вернуться к началу</div>
            <div>Все права зашищены</div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
