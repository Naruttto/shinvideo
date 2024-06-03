import { BASE_URL } from "@/consts";

export const getLogoImage = async () => {
  const result = await fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify({
      query: `query getLogoImage {
        assets(where: {fileName: "logo.jpg"}) {
          url
        }
      }`,
    }),
    headers: {
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
  });

  const json = await result.json();
  const { data } = json;

  return (data.assets[0] || { url: "" }) as { url: string };
};
