import { atomWithReset } from "jotai/utils";

// TODO: recentSearchList 로컬스토리지 필요
export const initialGlobalSearch = {
  searchWord: "",
  recentSearchList: [],
  searchedList: [],
  webView: {
    url: undefined,
  },
};

export const globalSearchAtom = atomWithReset(initialGlobalSearch);
