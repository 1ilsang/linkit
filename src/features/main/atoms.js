import { atom } from "jotai";

const initialMain = {
  moreOpen: undefined,
  folderPickerOpen: false,
};

export const mainAtom = atom(initialMain);
