import { Project } from "@/types/services";

const BASE_URL =
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clv50l5a80a4k07w7lt48qlio/master";

export const getProjects = async () => {
  const result = await fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify({
      query: `
        query baseDanyaQL {
          values: projects {
            id
            slug
            title
            updatedAt
            videoLink
            description {
              html
            }
          }
        }
      `,
    }),
  });

  const json = await result.json();
  const { data } = json;

  console.log({ dataaaaaaaaaaaa: data });
  return data.values as Project[];
};

export const getProject = async (id: string) => {
  const result = await fetch(BASE_URL, {
    body: JSON.stringify({
      query: `
        query baseDanyaByIdQL($id: ID!) {
          values: project(where: {id: $id}, stage: PUBLISHED) {
            id
            slug
            title
            updatedAt
            videoLink
            description {
              html
            }
          }
        }
      `,
      variables: {
        id,
      },
    }),
  });
};
