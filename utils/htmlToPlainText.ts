export const htmlToPlainText = (html: string | undefined) => {
  if (!html) {
    return "";
  }

  return html.replace(/<[^>]*>/g, "");
};
