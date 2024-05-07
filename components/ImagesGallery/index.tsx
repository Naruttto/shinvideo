"use server";

import { getHomeImages } from "@/services/projects";
import Slider from "./Slider";

const ImagesGallery = async () => {
  const imagesData = await getHomeImages();

  return <Slider imagesData={imagesData} />;
};

export default ImagesGallery;
