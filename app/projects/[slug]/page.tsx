import { ProjectsByTag } from "@/components/Projects";
import { Suspense } from "react";
import Link from "next/link";
import { ProjectsSkeleton } from "@/components/Skeleton";

export default async function ProjectsByTagPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="py-24">
      <Link
        className="text-xl font-bold mb-10 inline-block border-b-2 border-b-white hover:border-b-black"
        href="/"
      >
        {"<"} Назад
      </Link>

      <Suspense fallback={<ProjectsSkeleton />}>
        <ProjectsByTag slug={params.slug} />
      </Suspense>
    </div>
  );
}
