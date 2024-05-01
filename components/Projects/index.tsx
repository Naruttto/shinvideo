import { getProjects, getProjectsByTag } from "@/services/projects";

import React from "react";
import { SingleProject } from "./SingleProject";
import { Projects as ProjectsType } from "@/types/services";

const ProjectsGrid = ({ data }: { data: ProjectsType }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {data.map((item) => {
        return <SingleProject key={item.id} {...item} />;
      })}
    </div>
  );
};

export const Projects = async () => {
  const data = await getProjects();

  return <ProjectsGrid data={data} />;
};

export const ProjectsByTag = async ({ slug }: { slug: string }) => {
  const { projects, tagName, description } = await getProjectsByTag(slug);

  return (
    <>
      <div className="mb-6">
        <h1 className="text-6xl font-black mb-6">
          <span className="bg-slate-100">#{tagName}</span>
        </h1>

        <p className="text-2xl">{description}</p>
      </div>

      <ProjectsGrid data={projects} />
    </>
  );
};
