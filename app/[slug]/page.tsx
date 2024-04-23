import Link from "next/link";
import Container from "@/components/Container";
import Player from "@/components/Player";

import { getProject } from "@/services/projects";

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { description, title, videoLink } = await getProject(params.slug);

  return (
    <Container>
      <div className="py-24">
        <Link
          className="text-xl font-bold mb-10 inline-block border-b-2 border-b-white hover:border-b-black"
          href="/"
        >
          {"<"} Назад
        </Link>

        <h1 className="text-5xl font-black">{title}</h1>

        <Player videoLink={videoLink} />

        <div
          className="prose lg:prose-p:my-2 lg:prose-2xl"
          dangerouslySetInnerHTML={{ __html: description.html }}
        />
      </div>
    </Container>
  );
}
