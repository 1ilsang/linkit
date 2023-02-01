import { atomWithReset } from "jotai/utils";
import { MODE } from "./constants";

export const initialFolderDetail = {
  id: undefined,
  mode: MODE.normal,
  search: "",
  deleteLinkList: [],
  titleMoreOpen: undefined,
  itemMoreOpen: undefined,
};

export const folderDetailAtom = atomWithReset(initialFolderDetail);
