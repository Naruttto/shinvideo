import React from "react";
import { BsCardImage } from "react-icons/bs";

export const HeadingSkeleton = () => {
  return (
    <div className="w-[250px] sm:w-[500px] max-w-full h-12 bg-gray-700 animate-fast-pulse mb-6"></div>
  );
};

export const TextSkeleton = () => {
  return (
    <div className="w-full max-w-full h-6 bg-gray-700 animate-fast-pulse my-4"></div>
  );
};

export const ButtonSkeleton = () => {
  return (
    <div className="bg-gray-700 animate-fast-pulse w-[230px] h-[60px]"></div>
  );
};

export const BackButtonSkeleton = () => {
  return (
    <div className="animate-fast-pulse bg-gray-700 w-[80px] h-[30px] mb-10"></div>
  );
};

export const VideoSkeleton = ({
  width,
  height,
}: {
  width?: string;
  height?: string;
}) => {
  return (
    <div
      className={`${width ? width : "w-full"} ${
        height ? height : "h-full"
      } bg-gray-700 animate-fast-pulse flex justify-center items-center rounded-2xl`}
    >
      <svg
        className="w-10 h-10 text-primary"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 20"
      >
        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
      </svg>
    </div>
  );
};

export const ProjectsSkeleton = ({
  projectCount = 4,
}: {
  projectCount?: number;
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {Array.from(Array(projectCount).keys()).map((key) => {
        return (
          <div key={key} className="transition group relative shadow-md">
            <div className="relative w-full h-64 mb-4  bg-gray-700 animate-fast-pulse flex justify-center items-center">
              <BsCardImage className="text-5xl text-slate-400" />
            </div>

            <div className="h-9 w-[400px] max-w-full  bg-gray-700 animate-fast-pulse mb-4"></div>

            <div className="flex flex-wrap gap-2">
              {Array.from(Array(3).keys()).map((tagKey) => {
                return (
                  <span
                    key={tagKey}
                    className="h-7 w-24 bg-gray-700 text-white font-semibold text-sm  animate-fast-pulse"
                  ></span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const ProjectSkeleton = () => {
  return (
    <>
      <BackButtonSkeleton />
      <HeadingSkeleton />

      <VideoSkeleton height="h-[450px]" />

      <TextSkeleton />
      <TextSkeleton />
      <TextSkeleton />

      <ButtonSkeleton />
    </>
  );
};
