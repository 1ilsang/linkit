import { atom } from "jotai";
import { colorSets } from "../../shared/constants/colors";

export const initialCreateEdit = {
  id: undefined,
  title: "",
  description: "",
  defaultFolder: false,
  icon: "Heart",
  color: colorSets[0],
  linkList: [],
};

export const createEditAtom = atom(initialCreateEdit);
