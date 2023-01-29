import { atomWithReset } from "jotai/utils";

const initialLinkAdder = {
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
