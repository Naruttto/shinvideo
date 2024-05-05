import Link from "next/link";
import Player from "@/components/Player";

import { getProject } from "@/services/projects";
import { Tags } from "@/components/Tags";
import { VideoSkeleton } from "@/components/Skeleton";

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { description, title, videoLink, tags } = await getProject(params.slug);

  return (
    <>
      <Link
        className="text-xl font-bold mb-10 inline-block border-b-2 border-b-white hover:border-b-black"
        href="/"
      >
        {"<"} Назад
      </Link>

      <h1 className="text-5xl font-black">{title}</h1>

      <Player videoLink={videoLink} />

      <div className="mb-6 bg-gray-700 p-6 rounded-2xl">
        <h3 className="text-2xl font-bold mb-2">Тэги:</h3>
        <Tags tags={tags} />
      </div>

      <div
        className="prose prose-invert prose-p:text-slate-100 lg:prose-p:my-2 lg:prose-2xl"
        dangerouslySetInnerHTML={{ __html: description.html }}
      />
    </>
  );
}
