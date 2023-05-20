import { atomWithReset } from "jotai/utils";
import { MODE } from "./constants";

export const initialFolderDetail = {
  id: undefined,
  mode: MODE.normal,
  search: "",
  searchLinkList: [],
  deleteLinkList: [],
  titleMoreOpen: undefined,
  bottomSheetRef: undefined,
  bottomSheetItem: undefined,
  webView: {
    url: undefined,
  },
};

export const folderDetailAtom = atomWithReset(initialFolderDetail);
