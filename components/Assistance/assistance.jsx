import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Accordion, Title } from "..";

export default function Assistance() {
  return (
    <div className="w-full h-auto my-4 bg-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-[550px] h-auto my-4">
        <Title title="Наши услуги & кейсы"/>
          <p className="font-normal text-base text-gray-400 text-balance">
            Мы предлагаем комплексное создание и настройку HR-системы для вашего
            бизнеса, начиная с нуля.
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
  );
}
