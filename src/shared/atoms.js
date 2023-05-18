import { atom } from "jotai";

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

const initialApp = {
  pushNotification: true,
  defaultBrowser: true,
  clipboardLinkAutoPaste: true,
};

export const appEnvAtom = atom(initialApp);
export const folderListAtom = atom(initialData);
