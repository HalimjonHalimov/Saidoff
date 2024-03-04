import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper CSS
import 'swiper/css/navigation'; // Navigation CSS

SwiperCore.use([Navigation]);

const Slider = () => {
    return (
        <Swiper navigation={true}>
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
    );
}

export default Slider;

