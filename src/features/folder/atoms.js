import { atom } from "jotai";

export const initialFolderDetail = {
  id: undefined,
  search: "",
  linkList: [],
};

export const folderDetailAtom = atom(initialFolderDetail);
