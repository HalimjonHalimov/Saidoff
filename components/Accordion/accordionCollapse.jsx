import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";

const AccordionCollapse = ({ title, answer, i }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <Fade>
      <div
        className={`group ${
          accordionOpen
            ? "hover:bg-black hover:text-white "
            : "hover:bg-slate-50 text-black"
        } pt-2  transition-all border-black/40 border rounded-xl`}
      >
        <button
          onClick={() => setAccordionOpen(!accordionOpen)}
          className="group container py-6 mx-auto flex justify-around transition-all"
        >
          <span className="font-medium text-2xl">{title}</span>
          <svg
            className={`${
              accordionOpen
                ? "group-hover:fill-white group-hover:fill-white"
                : "group-hover:fill-black fill-black"
            }    shrink-0 ml-8`}
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
          <div className={"overflow-hidden"}>
            <div className="w-full h-auto py-4 px-10 text-lg font-normal text-balance text-black group-hover:text-white/80 transition">
              Porttitor rhoncus dolor purus non enim. Purus viverra accumsan in
              nisl nisi scelerisque eu. Etiam erat velit scelerisque in dictum
              non consectetur. Enim sed faucibus turpis in eu. At quis risus sed
              vulputate odio ut enim blandit volutpat. Amet aliquam id diam
              maecenas ultricies mi eget mauris. Vel elit scelerisque mauris
              pellentesque pulvinar pellentesque habitant. Aliquam sem et tortor
              consequat id porta.
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default AccordionCollapse;
