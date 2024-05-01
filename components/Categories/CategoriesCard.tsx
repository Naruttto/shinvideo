import { Tag } from "@/types/services";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const CategoriesCard = ({
  tagName,
  tagSlugName,
  image,
  description,
}: Tag) => {
  return (
    <div className="transition hover:border-slate-200 group relative border border-slate-100 p-4 rounded-t-[32px] rounded-b-2xl shadow-md">
      <Link href={`/projects/${tagSlugName}`}>
        <div className="relative w-full h-64 mb-4 rounded-2xl overflow-hidden">
          <Image
            blurDataURL={image.blurUrl}
            src={image.url}
            alt={tagName}
            fill
            className="object-cover transition group-hover:scale-105"
          />
        </div>
      </Link>

      <h3 className="text-3xl font-black hover:text-orange-600 mb-4">
        <Link href={`/projects/${tagSlugName}`}>{tagName}</Link>
      </h3>

      <p className="text-xl mb-2">{description}</p>
    </div>
  );
};
