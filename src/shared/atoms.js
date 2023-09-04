import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";

/**
 * {
 *   id: Number(new Date()),
 *   title: "기본 폴더",
 *   description: "기본 폴더에요.",
 *   defaultFolder: true,
 *   icon: "Heart",
 *   color: colorSets[selectedIndex],
 *   sort: FOLDER_SORT.DATE
 *   linkList: [],
 * },
 */
const initialData = [];

export const initialApp = {
  defaultBrowser: true,
  onBoarding: false,
};

const initialToast = {
  message: "",
  coloredMessage: "",
  navigateInfo: {
    path: "",
    id: 0,
    title: "",
  },
};

export const appEnvAtom = atom(initialApp);
export const folderListAtom = atom(initialData);

export const toastAtom = atomWithReset(initialToast);
