import { getProjectsByTag } from "@/services/projects";

import React from "react";
import { ProjectCard } from "./SingleProject";
import { Projects as ProjectsType } from "@/types/services";
import { NoProjects } from "./NoProjects";

const ProjectsGrid = ({ data }: { data: ProjectsType }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {data.map((item, index) => {
        return <ProjectCard key={index} {...item} />;
      })}
    </div>
  );
};

export const ProjectsByTag = async ({ slug }: { slug: string }) => {
  const { projects, tagName, description } = await getProjectsByTag(slug);

  return (
    <>
      <div className="mb-8">
        <h1 className="text-4xl md:text-6xl font-black mb-6">
          <span className="bg-gray-800">#{tagName}</span>
        </h1>

        <p className="text-xl md:text-2xl">{description}</p>
      </div>

      {!Boolean(projects.length) && <NoProjects />}

      {Boolean(projects.length) && (
        <ProjectsGrid data={projects as ProjectsType} />
      )}
    </>
  );
};
