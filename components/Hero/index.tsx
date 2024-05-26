import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { LiaTelegram } from "react-icons/lia";
import { RiYoutubeFill } from "react-icons/ri";

const Hero = () => {
  return (
    <div className="pb-16">
      <h1 className="text-3xl mb-4 sm:text-5xl md:text-6xl xl:text-8xl xl:mb-8 font-black ">
        Вы не понимаете, я&nbsp;и&nbsp;есть <br /> Даня Шинкаренко
      </h1>

      <p className="text-2xl mb-6">
        Создаю видео с 2017 года. Всегда стремлюсь к искренности и простоте
        визуального языка. Работаю в Ростове-на-Дону и Санкт-Петербурге
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <a
          href="https://t.me/shin_videography"
          target="_blank"
          className="bg-primary h-[50px] sm:h-[60px] pl-8 pr-6 text-xl font-semibold rounded-sm inline-flex items-center gap-3"
        >
          Написать мне <LiaTelegram className="text-2xl" />
        </a>

        <div className="flex items-center gap-4">
          <a
            href="https://www.youtube.com/@shin_videography716"
            target="_blank"
            className={
              "w-[50px] h-[50px] text-2xl sm:w-[60px] sm:h-[60px] sm:text-3xl border-2 border-primary box-border rounded-sm text-primary inline-flex justify-center items-center" +
              " hover:bg-primary hover:text-white transition"
            }
          >
            <RiYoutubeFill />
          </a>

          <a
            href="https://www.instagram.com/shin_videography/"
            target="_blank"
            className={
              "w-[50px] h-[50px] text-2xl sm:w-[60px] sm:h-[60px] sm:text-3xl border-2 border-primary box-border rounded-sm text-primary inline-flex justify-center items-center" +
              " hover:bg-primary hover:text-white transition"
            }
          >
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
