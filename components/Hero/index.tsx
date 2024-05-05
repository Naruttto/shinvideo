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

      <p className="text-2xl mb-6">Я снимаю видики и хуидики</p>

      <div className="flex items-center gap-4">
        <a
          href="https://t.me/shin_videography"
          target="_blank"
          className="bg-primary py-4 pl-8 pr-6 text-xl font-semibold rounded-sm inline-flex items-center gap-3"
        >
          Написать мне <LiaTelegram className="text-2xl" />
        </a>

        <a
          href="https://www.youtube.com/@shin_videography716"
          target="_blank"
          className={
            "w-[60px] h-[60px] border-2 border-primary box-border rounded-sm text-primary inline-flex justify-center items-center text-3xl" +
            " hover:bg-primary hover:text-white transition"
          }
        >
          <RiYoutubeFill />
        </a>

        <a
          href="https://www.instagram.com/shin_videography/"
          target="_blank"
          className={
            "w-[60px] h-[60px] border-2 border-primary box-border rounded-sm text-primary inline-flex justify-center items-center text-3xl" +
            " hover:bg-primary hover:text-white transition"
          }
        >
          <AiFillInstagram />
        </a>
      </div>
    </div>
  );
};

export default Hero;
