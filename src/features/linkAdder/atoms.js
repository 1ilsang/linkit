import { atomWithReset } from "jotai/utils";

const initialLinkAdder = {
  id: undefined,
  date: new Date(),
  autoLinkName: true,
  linkName: "",
  url: "",
};

export const linkAdderAtom = atomWithReset(initialLinkAdder);
