import { getProjectsByTag } from "@/services/projects";

import React from "react";
import { ProjectCard } from "./SingleProject";
import { Projects as ProjectsType } from "@/types/services";
import { NoProjects } from "./NoProjects";

const ProjectsGrid = ({ data }: { data: ProjectsType }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-4">
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
        <h1 className="text-2xl sm:text-4xl  font-semibold font-mono mb-6">
          #{tagName}
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl">{description}</p>
      </div>

      {!Boolean(projects.length) && <NoProjects />}

      {Boolean(projects.length) && (
        <ProjectsGrid data={projects as ProjectsType} />
      )}
    </>
  );
};
