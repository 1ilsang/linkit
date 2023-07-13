import { atom } from "jotai";

const initialMain = {
  moreOpen: undefined,
  folderPickerId: undefined,
  folderPickerOpen: false,
  adderSheetRef: undefined,
  scrollViewRef: undefined,
};

export const mainAtom = atom(initialMain);
