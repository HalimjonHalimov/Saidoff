import Image from "next/image";
import { Inter } from "next/font/google";
import { Accordion, Layout } from "@/components";
import imageOne from "@/public/image1.png";
import imageTwo from "@/public/image2.png";
import imageThree from "@/public/image3.png";
import telegramCloud from "@/public/telegram-cloud.png";
import { FaPlayCircle } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { Fade } from "react-awesome-reveal";
import Swipper from "@/components/Swipper/swipper";
import Slider from "@/components/Swipper/swipper";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Fade cascade>
        <div
          className={`${inter.className}w-full h-auto bg-hero bg-black/95 text-white`}
        >
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
      </Fade>

      <div className="w-full h-auto my-4 bg-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="w-[550px] h-auto my-4">
            <h4 className="font-bold text-4xl text-black mb-2">
              Наши услуги & кейсы
            </h4>
            <p className="font-normal text-base text-gray-400 text-balance">
              Мы предлагаем комплексное создание и настройку HR-системы для
              вашего бизнеса, начиная с нуля.
            </p>
          </div>
          <button
            type="button"
            className="py-2 px-4 flex items-center justify-center gap-2 bg-white text-black border border-black rounded-full hover:bg-black hover:text-white transition-all"
          >
            Все услуги
            <span>
              <GoArrowUpRight />
            </span>
          </button>
        </div>
        <Accordion title="Бизнес под ключ" answer="" i={1} />
        <Accordion title="Маркетинговые услуги" answer="" i={2} />
        <Accordion title="Таргетированная Реклама" answer="" i={3} />
        <Accordion title="Контекстная Реклама" answer="" i={4} />
        <Accordion title="SEO. Поисковое Продвижение" answer="" i={5} />
      </div>
      <Fade cascade>
        <div className="w-full h-auto my-16 py-[80px] bg-[#f1f1f1]">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex flex-col gap-2 items-start justify-center">
              <h4 className="font-bold text-4xl text-black mb-2 uppercase">О компании</h4>
              <button
                type="button"
                className="py-2 px-4 flex items-center justify-center gap-2 bg-white text-black border border-black rounded-full hover:bg-black hover:text-white transition-all"
              >
                Подробнее
                <span>
                  <GoArrowUpRight />
                </span>
              </button>
            </div>
            <div
              className={`w-[600px] h-auto ${inter.className} text-base font-medium text-black`}
            >
              Мы предлагаем комплексное создание и настройку HR-системы для
              вашего бизнеса, начиная с нуля. Это включаетв себя разработку
              стратегии управления персоналом, формирование ключевых
              HR-процессов, внедрение эффективныхинструментов оценки и развития
              сотрудников. Наша цель - создать сильную основу для роста и
              развитиявашей компании.
            </div>
          </div>
        </div>
      </Fade>
      <Slider />
    </Layout>
  );
}
