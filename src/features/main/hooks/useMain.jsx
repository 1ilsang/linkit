import { useNavigation } from "@react-navigation/native";
import { useAtom } from "jotai";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import Toast from "react-native-root-toast";
import { folderListAtom } from "../../../shared/atoms";
import { DEFAULT_SHORT_TOAST } from "../../../shared/constants/toast";
import { linkAdderAtom } from "../../linkAdder/atoms";
import { mainAtom } from "../atoms";

const useMain = () => {
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
        if (folderList.length === 10) {
          Toast.show(
            "폴더는 최대 10개까지 생성할 수 있어요.",
            DEFAULT_SHORT_TOAST
          );
          return;
        }
        setMain((prev) => ({ ...prev, moreOpen: undefined }));
        navigation.push("FolderCreateEdit", { type: "create" });
      },
      icon: "FolderSimplePlus",
    },
  ];

  useLayoutEffect(() => {
    if (!scrollViewRef || !adderSheetRef) return;
    setMain((prev) => ({ ...prev, scrollViewRef, adderSheetRef }));
  }, []);

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

  return {
    scrollViewRef,
    adderSheetRef,
    adderSheet,
    main,
    pickerList,
    handleDoneClick,
    handleCancelClick,
  };
};

export default useMain;
