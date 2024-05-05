import { ProjectsByTag } from "@/components/Projects";
import { Suspense } from "react";
import Link from "next/link";
import {
  HeadingSkeleton,
  ProjectsSkeleton,
  TextSkeleton,
} from "@/components/Skeleton";

export default async function ProjectsByTagPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <>
      <Link
        className="text-xl font-bold mb-10 inline-block border-b-2 border-b-white hover:border-b-black"
        href="/"
      >
        {"<"} Назад
      </Link>

      <Suspense
        fallback={
          <>
            <HeadingSkeleton />
            <TextSkeleton />
            <TextSkeleton />
            <ProjectsSkeleton />
          </>
        }
      >
        <ProjectsByTag slug={params.slug} />
      </Suspense>
    </>
  );
}
