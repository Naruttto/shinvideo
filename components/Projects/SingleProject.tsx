import { Projects } from "@/types/services";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tags } from "../Tags";
import { shimmer } from "@/utils/shimmer";

export const ProjectCard = ({ title, slug, image, tags }: Projects[0]) => {
  return (
    <div className="transition group relative">
      <Link href={`/${slug}`}>
        <div className="relative w-full h-64 sm:h-80 mb-4 overflow-hidden">
          <Image
            placeholder={`data:image/svg+xml;base64,${shimmer(632, 320)}`}
            src={image.url}
            alt={title}
            fill
            className="object-cover transition group-hover:scale-105"
          />
        </div>
      </Link>

      <h3 className="text-xl font-mono font-bold hover:text-primary inline-block mb-2">
        <Link href={`/${slug}`}>{title}</Link>
      </h3>

      <Tags tags={tags} />
    </div>
  );
};
