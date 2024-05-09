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
            ДАВАЙТЕ СОЗДАДИМ ЧТО-ТО ВМЕСТЕ!!!!
          </h2>

          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
            eligendi dolore, molestias omnis sint quas laudantium optio ad iure
            cum, iusto earum error maxime facilis. Optio qui quae provident.
            Necessitatibus minima voluptates accusamus!
          </p>
          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            possimus? Ab, molestiae perferendis! Quos, ullam.
          </p>
        </div>

        <div className="w-full ">
          <ImagesGallery />
        </div>
      </div>
    </main>
  );
}
