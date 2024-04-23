import { Project, Projects } from "@/types/services";

const BASE_URL =
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clv50l5a80a4k07w7lt48qlio/master";

export const getProjects = async () => {
  const result = await fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify({
      query: `
        query baseDanyaQL {
          projects(stage: PUBLISHED) {
            id
            slug
            title
            updatedAt
            videoLink
            description {
              html
            }
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

  return data.projects as Projects;
};

export const getProject = async (slug: string) => {
  const result = await fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify({
      query: `
        query baseDanyaByIdQL($slug: String!) {
          project(where: {slug: $slug}, stage: PUBLISHED) {
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
        slug,
      },
    }),
    headers: {
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
  });

  const json = await result.json();
  const { data } = json;

  return data.project as Project;
};
