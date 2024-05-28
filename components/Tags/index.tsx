import { GetProjectBySlugQuery } from "@/generates/gql/graphql";
import { Tag } from "@/types/services";
import Link from "next/link";
import React from "react";

export const Tags = ({
  tags,
}: {
  tags: NonNullable<GetProjectBySlugQuery["project"]>["tags"];
}) => {
  return (
    <>
      {tags && Boolean(tags.length) && (
        <div className="flex flex-wrap gap-2">
          {tags.map(({ tagName, tagSlugName }) => {
            return (
              <Link
                href={`/projects/${tagSlugName}`}
                key={tagName}
                className="px-2 border border-slate-50 text-slate-50 font-mono font-semibold text-sm rounded-xl hover:bg-primary"
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
