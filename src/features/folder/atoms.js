import { atomWithReset } from "jotai/utils";
import { MODE } from "./constants";

export const initialFolderDetail = {
  id: undefined,
  title: "",
  description: "",
  defaultFolder: false,
  icon: undefined,
  color: undefined,
  mode: MODE.normal,
  search: "",
  linkList: [],
  titleMoreOpen: undefined,
  itemMoreOpen: undefined,
};

export const folderDetailAtom = atomWithReset(initialFolderDetail);
