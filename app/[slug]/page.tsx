import Container from "@/components/Container";
import { getProject } from "@/services/projects";
import Link from "next/link";
import ReactPlayer from "react-player";

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { description, title } = await getProject(params.slug);

  return (
    <Container>
      <div className="py-24">
        <Link
          className="text-xl font-bold mb-10 inline-block border-b-2 border-b-white hover:border-b-black"
          href="/"
        >
          {"<"} Back
        </Link>

        <h1 className="text-5xl font-black mb-8">{title}</h1>

        <ReactPlayer url="https://www.youtube.com/watch?v=LXb3EKWsInQ" />

        <div
          className="prose lg:prose-p:my-2 lg:prose-2xl"
          dangerouslySetInnerHTML={{ __html: description.html }}
        />
      </div>
    </Container>
  );
}
