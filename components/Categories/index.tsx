import { getTags } from "@/services/projects";
import React from "react";
import { CategoriesCard } from "./CategoriesCard";

const Categories = async () => {
  const categories = await getTags();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {categories.map((item) => {
        return <CategoriesCard key={item.tagSlugName} {...item} />;
      })}
    </div>
  );
};

export default Categories;
