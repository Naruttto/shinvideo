type Img = { url: string; blurUrl: string };

export type Tag = {
  tagName: string;
  tagSlugName: string;
  description: string;
  image: Img;
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
  image: Img;
})[];

export type HomeImage = {
  alt: string;
  image: { url: string; blurUrl: string };
};
