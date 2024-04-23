export type Project = {
  id: string;
  slug: string;
  title: string;
  updatedAt: string;
  videoLink: string;
  description: {
    html: string;
  };
};

export type Projects = (Project & {image: {url: string, blurUrl: string}})[]