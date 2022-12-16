import { useRef } from "react";
import BottomSheet from "./BottomSheet";

import MainContentsContainer from "./contents/Container";
import NavbarContainer from "./nav/Container";

const MainContainer = () => {
  const bottomSheetRef = useRef(null);

  return (
    <>
      <MainContentsContainer bottomSheetRef={bottomSheetRef} />
      <NavbarContainer />
      <BottomSheet ref={bottomSheetRef} />
    </>
  );
};

export default MainContainer;
