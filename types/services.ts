export type Tag = {
  tagName: string;
  tagSlugName: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  updatedAt: string;
  videoLink: string;
  description: {
    html: string;
  };
  tags: Tag[];
};

export type Projects = (Project & {
  image: { url: string; blurUrl: string };
})[];
