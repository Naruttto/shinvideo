import { Project } from "@/types/services";
import Link from "next/link";
import React from "react";

export const SingleProject = ({ title, slug }: Project) => {
  return (
    <div className="border border-slate-100 p-6 rounded-2xl shadow-md">
      <h3 className="text-3xl font-black hover:text-orange-600">
        <Link href={`/${slug}`}>{title}</Link>
      </h3>
    </div>
  );
};
