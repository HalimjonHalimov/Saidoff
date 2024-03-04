import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";

const Accordion = ({ title, answer, i }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <Fade>
      <div className="pt-2 hover:bg-slate-50 transition-all border-slate-100 border-t border-b">
        <button
          onClick={() => setAccordionOpen(!accordionOpen)}
          className="group container py-6 mx-auto flex justify-between transition-all"
        >
          <span className="text-[#999999] font-medium text-2xl">0{i}</span>
          <span className="text-black font-bold text-3xl">{title}</span>
          <svg
            className="fill-black shrink-0 ml-8"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
          </svg>
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
            accordionOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="bg-red-50 overflow-hidden">
            <div className="w-full h-[400px]"></div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Accordion;
