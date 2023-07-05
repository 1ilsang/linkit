export const getOgData = async (url) => {
  const fallbackTitle = "(제목 없음)";
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
    const title =
      titleTag && titleTag.length >= 2 ? titleTag[1] : fallbackTitle;
    const ogTitle = title.length > 20 ? `${title.slice(0, 20)}...` : title;

    return { ogImageUrl, ogTitle };
  } catch (error) {
    return { ogImageUrl: "", ogTitle: fallbackTitle };
  }
};
