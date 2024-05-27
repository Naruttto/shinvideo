"use client";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { HomeImage } from "@/types/services";

import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

const Slider = ({ imagesData }: { imagesData: HomeImage[] }) => {
  return (
    <div className="rounded-md overflow-hidden">
      <Swiper
        modules={[Pagination]}
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
                  blurDataURL={item.image.blurUrl}
                  src={item.image.url}
                  alt={item.alt}
                  fill
                  placeholder="blur"
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
