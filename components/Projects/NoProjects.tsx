"use server";

import Image from "next/image";

export const NoProjects = () => {
  return (
    <div className="mt-20 flex justify-center">
      <div className="max-w-full w-[350px] sm:w-[500px] inline-flex flex-col items-center">
        <Image
          src="/images/windBlowing.png"
          alt="wind blowing..."
          width={400}
          height={300}
          className="mb-8"
        />
        <div className="text-xl sm:text-2xl font-semibold text-center text-gray-400">
          Проектов в данной категории <br /> пока что нет...
        </div>
      </div>
    </div>
  );
};
