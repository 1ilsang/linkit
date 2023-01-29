import { useNavigation } from "@react-navigation/native";
import { useAtom } from "jotai";
import { useRef } from "react";
import { folderListAtom } from "../../shared/atoms";

import BottomSheet from "../../shared/bottomSheet/BottomSheet";
import PickerBottomSheet from "../../shared/bottomSheet/Picker";
import { linkAdderAtom } from "../linkAdder/atoms";
import { mainAtom } from "./atoms";
import MainContentsContainer from "./contents/Container";
import NavbarContainer from "./nav/Container";

const MainContainer = () => {
  const adderSheetRef = useRef(null);
  const scrollViewRef = useRef(null);

  const [main, setMain] = useAtom(mainAtom);
  const [folderList] = useAtom(folderListAtom);
  const [, setLinkAdder] = useAtom(linkAdderAtom);

  const navigation = useNavigation();

  const adderSheet = [
    {
      name: "링크 추가",
      onPress: () => {
        setMain((prev) => ({ ...prev, moreOpen: undefined }));
        navigation.push("LinkAdder");
      },
      icon: "Link",
    },
    {
      name: "폴더 생성",
      onPress: () => {
        setMain((prev) => ({ ...prev, moreOpen: undefined }));
        navigation.push("FolderCreateEdit", { type: "create" });
      },
      icon: "FolderSimplePlus",
    },
  ];

  const pickerList = folderList.map((item) => ({
    label: item.title,
    value: item.id,
  }));

  const handleDoneClick = (selectedFolderId) => {
    const target = pickerList.find((item) => item.value === selectedFolderId);
    if (!target) return;
    setLinkAdder((prev) => ({
      ...prev,
      targetFolder: { id: target.value, title: target.label },
    }));
    setMain((prev) => ({ ...prev, folderPickerOpen: false }));
  };
  const handleCancelClick = () => {
    setMain((prev) => ({ ...prev, folderPickerOpen: false }));
  };

  return (
    <>
      <MainContentsContainer scrollViewRef={scrollViewRef} />
      <NavbarContainer
        adderSheetRef={adderSheetRef}
        scrollViewRef={scrollViewRef}
      />
      <BottomSheet ref={adderSheetRef} list={adderSheet} />
      <PickerBottomSheet
        open={main.folderPickerOpen}
        list={pickerList}
        onDoneClick={handleDoneClick}
        onCancelClick={handleCancelClick}
      />
    </>
  );
};

export default MainContainer;
