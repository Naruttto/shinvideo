"use client";
import { Pagination, EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { HomeImage } from "@/types/services";

import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

const Slider = ({ imagesData }: { imagesData: HomeImage[] }) => {
  return (
    <div className="rounded-md overflow-hidden">
      <Swiper
        effect={"cards"}
        modules={[Pagination, EffectCards]}
        spaceBetween={50}
        slidesPerView={1}
        pagination
      >
        {imagesData.map((item) => {
          return (
            <SwiperSlide key={item.image.url}>
              <div className="w-full h-[450px] relative">
                <Image
                  className="object-cover rounded-md"
                  alt={item.alt}
                  src={item.image.url}
                  fill
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
