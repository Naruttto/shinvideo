import { getProjects } from "@/services/projects";

import React from "react";
import { SingleProject } from "./SingleProject";

export const Projects = async () => {
  const data = await getProjects();

  return (
    <div className="grid grid-cols-3 gap-8">
      {data.map((item) => {
        return <SingleProject key={item.id} {...item} />;
      })}
    </div>
  );
};
