import { Metadata, ResolvingMetadata } from "next";
import Player from "@/components/Player";

import { getProjectBySlug } from "@/services/projects";
import { Tags } from "@/components/Tags";
import BackButton from "@/components/BackButton/BackButton";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { title, tags, description, image } = await getProjectBySlug(
    params.slug
  );

  return {
    title,
    description: description?.text,
    keywords: tags
      .map(({ tagName }) => {
        return tagName;
      })
      .join(", "),
    openGraph: {
      title,
      description: description?.text,
      images: [image.ogImage],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { title, description, tags, videoLink } = await getProjectBySlug(
    params.slug
  );

  return (
    <>
      <BackButton />

      <h1 className="text-2xl sm:text-5xl font-black">{title}</h1>

      <Player videoLink={videoLink} />

      {tags && <Tags tags={tags} />}

      {description?.html && (
        <div
          className="prose prose-invert prose-p:text-slate-100 lg:prose-p:my-2 lg:prose-2xl"
          dangerouslySetInnerHTML={{ __html: description.html }}
        />
      )}
    </>
  );
}
