import { FOLDER_SORT } from "../constants/folder";

export const sortLinkList =
  (orderType = FOLDER_SORT.DATE) =>
  (a, b) => {
    if (orderType === FOLDER_SORT.DATE) {
      return new Date(b.date) - new Date(a.date);
    }
    return a.linkName < b.linkName ? -1 : 1;
  };
