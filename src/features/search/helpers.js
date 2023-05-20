export const getSearchedText = (targetText, searchText) => {
  const startIndex = targetText.toLowerCase().indexOf(searchText.toLowerCase());
  const endIndex = startIndex + searchText.length;
  return {
    searched: startIndex !== -1,
    prevText: targetText.slice(0, startIndex),
    searchedText: targetText.slice(startIndex, endIndex),
    nextText: targetText.slice(endIndex),
    originText: targetText,
  };
};
export const handleLinkSearch = (search, { linkName, memo, url }) => {
  const regExp = new RegExp(search, "gi");
  return regExp.test(linkName) || regExp.test(memo) || regExp.test(url);
};
