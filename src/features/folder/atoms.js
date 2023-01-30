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
  titleMoreOpen: undefined,
  itemMoreOpen: undefined,
};

export const folderDetailAtom = atomWithReset(initialFolderDetail);
