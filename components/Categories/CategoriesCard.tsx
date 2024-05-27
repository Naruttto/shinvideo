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
    <div className="transition hover:border-gray-700 group relative shadow-md">
      <Link href={`/projects/${tagSlugName}`}>
        <div className="relative w-full h-64 mb-4 overflow-hidden">
          <Image
            blurDataURL={image.blurUrl}
            src={image.url}
            alt={tagName}
            fill
            placeholder="blur"
            className="object-cover transition group-hover:scale-105"
          />
        </div>
      </Link>

      <h3 className="text-2xl font-black hover:text-primary mb-2 inline-block font-mono">
        <Link href={`/projects/${tagSlugName}`}>{tagName}</Link>
      </h3>

      <p className="text-xl mb-2 line-clamp-2 font-mono">{description}</p>
    </div>
  );
};
