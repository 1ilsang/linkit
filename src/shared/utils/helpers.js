import { FOLDER_SORT } from "../constants/folder";

export const sortLinkList =
  (orderType = FOLDER_SORT.DATE) =>
  (a, b) => {
    if (a.pin) return -1;
    if (b.pin) return 1;

    if (orderType === FOLDER_SORT.DATE) {
      return new Date(b.date) - new Date(a.date);
    }
    return a.linkName < b.linkName ? -1 : 1;
  };
