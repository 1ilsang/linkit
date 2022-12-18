import { useNavigation } from "@react-navigation/native";
import { useRef } from "react";

import BottomSheet from "../shared/BottomSheet";
import MainContentsContainer from "./contents/Container";
import NavbarContainer from "./nav/Container";

const MainContainer = () => {
  const adderSheetRef = useRef(null);
  const folderMoreSheetRef = useRef(null);
  const scrollViewRef = useRef(null);

  const navigation = useNavigation();

  const adderSheet = [
    { name: "링크 추가", onPress: () => navigation.push("LinkAdder") },
    { name: "폴더 생성", onPress: () => navigation.push("FolderAdder") },
  ];
  const folderMoreSheet = [
    { name: "폴더 편집", onPress: () => navigation.push("FolderEdit") },
    { name: "폴더 삭제", onPress: () => navigation.push("FolderAdder") },
  ];

  return (
    <>
      <MainContentsContainer
        adderSheetRef={adderSheetRef}
        scrollViewRef={scrollViewRef}
      />
      <NavbarContainer
        folderMoreSheetRef={folderMoreSheetRef}
        scrollViewRef={scrollViewRef}
      />
      <BottomSheet ref={adderSheetRef} list={adderSheet} />
      <BottomSheet ref={folderMoreSheetRef} list={folderMoreSheet} />
    </>
  );
};

export default MainContainer;
