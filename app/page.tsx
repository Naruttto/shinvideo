import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import { ProjectsSkeleton } from "@/components/Skeleton";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Hero />

      <Suspense fallback={<ProjectsSkeleton projectCount={3} />}>
        <Categories />
      </Suspense>

      <div className="gap-16 mb-48 items-center py-8 px-4 lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-100 sm:text-lg dark:text-gray-200">
          <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-gray-100">
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
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image
            className="w-full h-full object-cover rounded-lg"
            src="/images/danya.jpg"
            alt="office content 1"
            width={285}
            height={435}
          />

          <Image
            className="mt-4 w-full h-full object-cover lg:mt-10 rounded-lg"
            src="/images/danya.jpg"
            alt="office content 2"
            width={285}
            height={435}
          />
        </div>
      </div>
    </main>
  );
}
