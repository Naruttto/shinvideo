import { ContactButtons } from "../ContactButtons";

const Hero = () => {
  return (
    <div className="pb-16">
      <h1 className="text-3xl mb-4 sm:text-5xl md:text-6xl xl:text-8xl xl:mb-8 font-black ">
        Вы не понимаете, я&nbsp;и&nbsp;есть <br /> Даня Шинкаренко
      </h1>

      <p className="text-2xl mb-6">
        Создаю видео с 2017 года. Всегда стремлюсь к искренности и простоте
        визуального языка.
        <br />
        Работаю с профессиональным кинооборудованием и имею большой съемочный
        опыт.
        <br />
        Снимаю в Ростове-на-Дону и Санкт-Петербурге
      </p>

      <ContactButtons />
    </div>
  );
};

export default Hero;
