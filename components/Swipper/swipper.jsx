import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import SwiperCore, { EffectFade, Autoplay } from "swiper";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { data } from "@/utils/data";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

SwiperCore.use([EffectFade, Autoplay]);

const Slider = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideToPrev = () => {
    if (swiperInstance && activeIndex > 0) {
      swiperInstance.slidePrev();
    }
  };

  const handleSlideToNext = () => {
    if (swiperInstance && activeIndex < 3) {
      swiperInstance.slideNext();
    }
  };

  const handleSlideChangeTransitionStart = () => {
    setActiveIndex(swiperInstance.realIndex);
  };

  return (
    <Fade cascade>
      <div className="container mx-auto">
        <div className="w-full h-auto my-8 flex justify-between items-center ">
          <h4 className="font-bold text-4xl text-black mb-2 uppercase">
            отзывы наших клиентов
          </h4>
          <div className="flex items-start justify-center gap-2">
            <button
              className={`p-2 border ${
                activeIndex === 0
                  ? "border-[#BEBEBE] text-[#BEBEBE]"
                  : "border-black text-black"
              }  rounded-full transition-all`}
              onClick={handleSlideToPrev}
              disabled={activeIndex === 0}
            >
              <IoIosArrowBack size={24} />
            </button>
            <button
              className={`p-2 border ${
                activeIndex === data.length - 1
                  ? "border-[#BEBEBE] text-[#BEBEBE]"
                  : "border-black text-black"
              }  rounded-full transition-all`}
              onClick={handleSlideToNext}
              disabled={activeIndex === data.length - 1}
            >
              <IoIosArrowForward size={24} />
            </button>
          </div>
        </div>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSwiper={setSwiperInstance}
          onSlideChangeTransitionStart={handleSlideChangeTransitionStart}
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div>
                <div className="text-xl font-medium text-black text-balance border-b pb-8">
                  {item.reviews}
                </div>
                <div className="flex justify-between items-center my-8">
                  <div className="flex justify-start items-center gap-4">
                    <Image
                      src={item.user.avatar}
                      alt=""
                      className="w-[80px] h-[80px] rounded-full object-cover"
                    />
                    <div>
                      <div className="text-base font-semibold text-black">
                        {item.user.username}
                      </div>
                      <div className="text-base font-medium text-[#999999]">
                        {item.user.description}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="py-2 px-4 flex items-center justify-center gap-2 bg-white text-black border border-black rounded-full hover:bg-black hover:text-white transition-all"
                  >
                    Все отзывы
                    <span>
                      <GoArrowUpRight />
                    </span>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Fade>
  );
};

export default Slider;
