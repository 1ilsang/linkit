import { atomWithReset } from "jotai/utils";

export const initialFolderDetail = {
  id: undefined,
  mode: "normal",
  search: "",
  linkList: [],
};

export const folderDetailAtom = atomWithReset(initialFolderDetail);
