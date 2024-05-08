import { BASE_URL } from "@/consts";
import { HomeImage, Project, Projects, Tag } from "@/types/services";
import { client } from "./requestClient";
import {
  GetProjectBySlugDocument,
  GetProjectsByTagDocument,
} from "@/generates/gql/graphql";
import { notFound } from "next/navigation";

export const getProjectBySlug = async (slug: string) => {
  const { project } = await client.request(GetProjectBySlugDocument, { slug });

  if (project) {
    return project;
  }

  notFound();
};

export const getProjectsByTag = async (tagSlugName: string) => {
  const { tag } = await client.request(GetProjectsByTagDocument, {
    tagSlugName,
  });

  if (tag) {
    return tag;
  }

  notFound();
};

export const getTags = async () => {
  const result = await fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify({
      query: `
        query getTags {
          tags {
            tagName
            tagSlugName
            description
            image {
                blurUrl: url(
                  transformation: {image: {quality: {value: 1}, resize: {height: 300, width: 300}}}
                )
                url
              }
          }
        }
      `,
    }),
    headers: {
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
  });

  const json = await result.json();
  const { data } = json;

  return data.tags as Tag[];
};

export const getHomeImages = async () => {
  const result = await fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify({
      query: `
        query homeImages {
          homeImages {
            alt
            image {
              url
            }
          }
        }
      `,
    }),
    headers: {
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
  });

  const json = await result.json();
  const { data } = json;

  return data.homeImages as HomeImage[];
};
