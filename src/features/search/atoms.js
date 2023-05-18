import { atomWithReset } from "jotai/utils";

// TODO: recentSearchList 로컬스토리지 필요
export const initialGlobalSearch = {
  searchWorld: "",
  recentSearchList: [],
  searchedList: [],
};

export const globalSearchAtom = atomWithReset(initialGlobalSearch);
