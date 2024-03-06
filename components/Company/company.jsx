import { Inter } from "next/font/google";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { GoArrowUpRight } from "react-icons/go";
import { Title } from "..";

const inter = Inter({ subsets: ["latin"] });
export default function Company() {
  return (
    <Fade cascade>
      <div className="w-full h-auto my-16 py-[80px] bg-[#f1f1f1]">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex flex-col gap-2 items-start justify-center">
          <Title title="О компании"/>
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
            Мы предлагаем комплексное создание и настройку HR-системы для вашего
            бизнеса, начиная с нуля. Это включаетв себя разработку стратегии
            управления персоналом, формирование ключевых HR-процессов, внедрение
            эффективныхинструментов оценки и развития сотрудников. Наша цель -
            создать сильную основу для роста и развитиявашей компании.
          </div>
        </div>
      </div>
    </Fade>
  );
}
