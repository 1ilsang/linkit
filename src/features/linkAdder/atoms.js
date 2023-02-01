import { atomWithReset } from "jotai/utils";

const initialLinkAdder = {
  id: undefined,
  date: new Date(),
  autoLinkName: true,
  linkName: "",
  url: "",
  targetFolder: {
    id: undefined,
    title: "",
  },
  memo: "",
};

export const linkAdderAtom = atomWithReset(initialLinkAdder);
