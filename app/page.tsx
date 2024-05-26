import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import ImagesGallery from "@/components/ImagesGallery";
import { ProjectsSkeleton } from "@/components/Skeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Hero />

      <Suspense fallback={<ProjectsSkeleton projectCount={3} />}>
        <Categories />
      </Suspense>

      <div className="gap-16 mb-48 items-center lg:grid lg:grid-cols-2 py-8 lg:py-16 ">
        <div className="font-light text-gray-100 sm:text-lg dark:text-gray-200">
          <h2 className="mb-4 text-4xl sm:text-6xl tracking-tight font-extrabold text-gray-100">
            ДАВАЙТЕ СОЗДАВАТЬ ВИДЕО ВМЕСТЕ
          </h2>

          <p className="mb-4">
            Меня зовут Даниил. Свой путь я начал снимая вечеринки и поездки с
            друзьями. Затем обрел навыки в ВУЗовском кружке и с 2021 года
            официально принимаю заказы. За моими плечами съемка бекстейджа
            крупного продакшн-проекта с бюджетом более 500к, рекламный проекты
            для крупной строительной компании с бюджетом свыше 100к, несколько
            личных документалок о танцорах, художниках и других людей искусства.
            Совместно со своим братом продвигаю dj культуру Ростова-на-Дону,
            записывая подкасты в барах, кофейнях и клубах. Обладаю большим
            обпытом работы с профессиональными кино оборудованием и всегда
            совершенствуюсь.
          </p>
          <p className="mb-6">
            В своих работах делаю упор на атмосферу и посыл. Для меня съемка -
            это не метод монетизации, а возможность транслировать свои
            творческие идеи
          </p>
        </div>

        <div className="w-full ">
          <ImagesGallery />
        </div>
      </div>
    </main>
  );
}
