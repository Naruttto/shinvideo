import { ProjectsByTag } from "@/components/Projects";
import { Suspense } from "react";
import Link from "next/link";
import {
  HeadingSkeleton,
  ProjectsSkeleton,
  TextSkeleton,
} from "@/components/Skeleton";
import { getProjectsByTag } from "@/services/projects";
import { Metadata } from "next";
import { AUTHOR_NAME } from "@/consts";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tagName, description, image } = await getProjectsByTag(params.slug);
  const title = `${tagName} - ${AUTHOR_NAME}`;

  return {
    title,
    description: description || "",
    openGraph: {
      title,
      description: description || "",
      images: [image.ogImage],
    },
  };
}

export default async function ProjectsByTagPage({ params }: Props) {
  return (
    <>
      <Link
        className="text-xl font-bold mb-10 inline-block border-b-2 border-b-white hover:border-b-black outline-none"
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
