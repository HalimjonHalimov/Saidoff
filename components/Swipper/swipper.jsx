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
    <div className="container mx-auto">
      <div className="w-full h-auto flex justify-between items-center ">
        <h4 className="font-bold text-4xl text-black mb-2 uppercase">
          отзывы наших клиентов
        </h4>
        <div className="flex items-start justify-center gap-2">
          <button className="p-2 border border-black rounded-full" onClick={handleSlideToPrev} disabled={activeIndex === 0}>
           <IoIosArrowBack />
          </button>
          <button className="p-2 border border-black rounded-full" onClick={handleSlideToNext} disabled={activeIndex === data.length - 1}>
           <IoIosArrowForward />
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
          <SwiperSlide key={i}>{item.reviews}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
