import { Projects } from "@/types/services";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const SingleProject = ({ title, slug, image }: Projects[0]) => {
  return (
    <div className="relative border border-slate-100 p-4 rounded-[32px] shadow-md">
      {image && (
        <div className="relative w-full h-64 mb-4">
          <Image
            blurDataURL={image.blurUrl}
            src={image.url}
            alt={title}
            fill
            className="object-cover rounded-2xl"
          />
        </div>
      )}

      <h3 className="text-3xl font-black hover:text-orange-600">
        <Link href={`/${slug}`}>{title}</Link>
      </h3>
    </div>
  );
};
