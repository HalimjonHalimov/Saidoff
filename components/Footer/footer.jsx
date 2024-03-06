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
                <li className="hover:border-b hover:border-white border-black border-b transition-all">
                  <Link href={"/"}>Instagram</Link>
                </li>
                <li className="hover:border-b hover:border-white border-black border-b transition-all">
                  <Link href={"/"}>Facebook</Link>
                </li>
                <li className="hover:border-b hover:border-white border-black border-b transition-all">
                  <Link href={"/"}>Tiktok</Link>
                </li>
                <li className="hover:border-b hover:border-white border-black border-b transition-all">
                  <Link href={"/"}>Linkedin</Link>
                </li>
                <li className="hover:border-b hover:border-white border-black border-b transition-all">
                  <Link href={"/"}>Youtube</Link>
                </li>
                <li className="hover:border-b hover:border-white border-black border-b transition-all">
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
            <div className="w-[1062] h-[450px]">
              <Image src={footer} alt="" className="w-full h-full object-cover" />
            </div>
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
