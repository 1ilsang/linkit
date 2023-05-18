export const getOgData = async (url) => {
  try {
    const response = await fetch(url);
    const html = await response.text();

    const ogImageRegex = /<meta[^>]*property=["']og:image["'][^>]*>/g;
    const titleRegex = /<title[^>]*>([^<]+)<\/title>/i;

    const ogImageTags = html.match(ogImageRegex);
    const titleTag = html.match(titleRegex);

    const ogImageUrl = ogImageTags
      ? ogImageTags[0].match(/content=["'](.*?)["']/)[1]
      : "";
    const ogTitle = titleTag && titleTag.length >= 2 ? titleTag[1] : "";

    return { ogImageUrl, ogTitle };
  } catch (error) {
    return { ogImageUrl: "", ogTitle: "" };
  }
};
