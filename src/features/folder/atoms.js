import { atomWithReset } from "jotai/utils";

export const initialFolderDetail = {
  id: undefined,
  title: "",
  description: "",
  defaultFolder: false,
  icon: undefined,
  color: undefined,
  mode: "normal",
  search: "",
  linkList: [],
};

export const folderDetailAtom = atomWithReset(initialFolderDetail);
