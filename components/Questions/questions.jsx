import React from "react";
import { Fade } from "react-awesome-reveal";
import { GoArrowUpRight } from "react-icons/go";
import { Accordion, Title } from "..";
import AccordionCollapse from "../Accordion/accordionCollapse";

export default function Questions() {
  return (
    <Fade cascade>
      <div className="w-full h-auto my-[70px]  bg-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="w-[550px] h-auto my-4">
            <Title title="вопросы и ответы" />
            <p className="font-normal text-base text-gray-400 text-balance">
              Мы предлагаем комплексное создание и настройку HR-системы для
              вашего бизнеса, начиная с нуля.
            </p>
          </div>
          <button
            type="button"
            className="py-2 px-4 flex items-center justify-center gap-2 bg-white text-black border border-black rounded-full hover:bg-black hover:text-white transition-all"
          >
            Все
            <span>
              <GoArrowUpRight />
            </span>
          </button>
        </div>
        <div className="container mx-auto flex flex-col gap-2">
          <AccordionCollapse
            title="IT компания предоставляет широкий спектр услуг и продуктов в области информационных"
            answer=""
          />
          <AccordionCollapse
            title="IT компания предоставляет широкий спектр услуг и продуктов в области информационных"
            answer=""
          />
          <AccordionCollapse
            title="IT компания предоставляет широкий спектр услуг и продуктов в области информационных"
            answer=""
          />
        </div>
      </div>
    </Fade>
  );
}
