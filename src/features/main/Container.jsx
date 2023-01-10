import { useNavigation } from "@react-navigation/native";
import { useRef } from "react";

import BottomSheet from "../shared/BottomSheet";
import MainContentsContainer from "./contents/Container";
import NavbarContainer from "./nav/Container";

const MainContainer = () => {
  const adderSheetRef = useRef(null);
  const scrollViewRef = useRef(null);

  const navigation = useNavigation();

  const adderSheet = [
    {
      name: "링크 추가",
      onPress: () => navigation.push("LinkAdder"),
      icon: "Link",
    },
    {
      name: "폴더 생성",
      onPress: () => navigation.push("FolderAdder"),
      icon: "FolderSimplePlus",
    },
  ];

  return (
    <>
      <MainContentsContainer scrollViewRef={scrollViewRef} />
      <NavbarContainer
        adderSheetRef={adderSheetRef}
        scrollViewRef={scrollViewRef}
      />
      <BottomSheet ref={adderSheetRef} list={adderSheet} />
    </>
  );
};

export default MainContainer;
