import { atom } from "jotai";

export const initialCreateEdit = {
  id: undefined,
  title: "",
  description: "",
  defaultFolder: false,
  icon: undefined,
  color: undefined,
};

export const createEditAtom = atom(initialCreateEdit);
