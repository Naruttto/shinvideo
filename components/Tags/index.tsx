import { Tag } from "@/types/services";
import Link from "next/link";
import React from "react";

export const Tags = ({ tags }: { tags: Tag[] }) => {
  return (
    <>
      {tags && Boolean(tags.length) && (
        <div className="flex flex-wrap gap-2">
          {tags.map(({ tagName, tagSlugName }) => {
            return (
              <Link
                href={`/projects/${tagSlugName}`}
                key={tagName}
                className="py-2 px-4 bg-black text-white font-semibold text-sm rounded-lg hover:bg-orange-500"
              >
                {tagName}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};
