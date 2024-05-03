import { Project, Projects, Tag } from "@/types/services";

const BASE_URL =
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clv50l5a80a4k07w7lt48qlio/master";

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
            tags {
              tagName
              tagSlugName
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
    cache: "no-cache",
  });

  const json = await result.json();
  const { data } = json;

  return data.project as Project;
};

export const getProjectsByTag = async (tagSlugName: string) => {
  const result = await fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify({
      query: `
        query getProjectsByTag($tagSlugName: String!) {
          tag(where: {tagSlugName: $tagSlugName}, stage: PUBLISHED) {
            tagName
            description
            projects {
              slug
              title
              tags {
                tagName
                tagSlugName
              }
              image {
                blurUrl: url(
                  transformation: {image: {quality: {value: 1}, resize: {height: 300, width: 300}}}
                )
                url
              }
            }
          }
        }
      `,
      variables: {
        tagSlugName,
      },
    }),
    headers: {
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
  });

  const json = await result.json();
  const { data } = json;

  return data.tag as Tag & { projects: Projects };
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
