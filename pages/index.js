import Image from "next/image";
import { Inter } from "next/font/google";
import { Accordion, Layout } from "@/components";
import imageOne from "@/public/image1.png";
import imageTwo from "@/public/image2.png";
import imageThree from "@/public/image3.png";
import telegramCloud from "@/public/telegram-cloud.png";
import { FaPlayCircle } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div className="w-full h-auto bg-hero bg-black/95 text-white">
        <div className="container mx-auto  py-[70px]">
          <div className="grid grid-cols-2">
            <div className="text-start text-4xl font-bold">
              МЫ СОЗДАЕМ <br /> ЗАМЕЧАТЕЛЬНЫЕ
              <br /> ЦИФРОВЫЕ ТЕХНОЛОГИИ
            </div>
            <div className="flex justify-end items-center gap-16">
              <div>
                <Image src={telegramCloud} alt="" />
              </div>
              <div className="text-end text-4xl font-bold">
                КОТОРЫЕ ДЕЛАЮТ <br /> ДОЛГОВЕЧНЫЙ <br /> ВПЕЧАТЛЕНИЕ
              </div>
            </div>
          </div>
          <h2 className="w-full h-auto my-10 text-center text-9xl uppercase font-semibold">
            digital solutions
          </h2>
          <div className="grid grid-cols-3">
            <div className="w-[409px] h-[365px] rounded-3xl cursor-pointer group overflow-hidden ">
              <Image
                src={imageOne}
                alt=""
                className="w-full h-full object-cover group-hover:scale-125 transition duration-700 ease-in-out "
              />
            </div>
            <div className="w-full h-full flex flex-col justify-between items-center">
              <button
                type="button"
                className="w-[175px] h-[56px] flex gap-2 justify-center items-center hover:bg-white hover:text-[#353535] bg-[#353535] border rounded-full text-base font-medium transition"
              >
                SHOWREEL
                <FaPlayCircle />
              </button>
              <div className="w-[411px] h-[277px] rounded-3xl cursor-pointer group overflow-hidden">
                <Image
                  src={imageTwo}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-125 transition duration-700 ease-in-out "
                />
              </div>
            </div>
            <div className="w-[409px] h-[365px] rounded-3xl cursor-pointer group overflow-hidden">
              <Image
                src={imageThree}
                alt=""
                className="w-full h-full object-cover group-hover:scale-125 transition duration-700 ease-in-out "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto my-4 bg-white py-4 border-t border-b border-slate-200">
        <div className="container mx-auto ">
          <div>
            <h4>Наши услуги & кейсы</h4>
            <p>Мы предлагаем комплексное создание и настройку HR-системы для вашего бизнеса, начиная с нуля.</p>
          </div>
          <button type="button">Все услуги</button>
        </div>
        <Accordion
          title="Do you prefer Android or iOS"
          answer="I like to use iOS products"
        />
      </div>
    </Layout>
  );
}
