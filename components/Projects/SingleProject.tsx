import { Projects } from "@/types/services";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tags } from "../Tags";

export const ProjectCard = ({ title, slug, image, tags }: Projects[0]) => {
  return (
    <div className="transition hover:border-gray-700 group relative border border-gray-800 p-4 rounded-[32px] shadow-md">
      <Link href={`/${slug}`}>
        <div className="relative w-full h-64 mb-4 rounded-2xl overflow-hidden">
          <Image
            blurDataURL={image.blurUrl}
            src={image.url}
            alt={title}
            fill
            className="object-cover transition group-hover:scale-105"
          />
        </div>
      </Link>

      <h3 className="text-3xl font-black hover:text-primary mb-4 inline-block">
        <Link href={`/${slug}`}>{title}</Link>
      </h3>

      <Tags tags={tags} />
    </div>
  );
};
