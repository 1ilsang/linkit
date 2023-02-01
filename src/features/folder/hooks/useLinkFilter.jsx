import { useAtom } from "jotai";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { Keyboard } from "react-native";
import { folderListAtom } from "../../../shared/atoms";
import { folderDetailAtom } from "../atoms";
import { LOCAL_STORAGE_KEY, save } from "../../../shared/utils/localStorage";

const actionSheetOptions = {
  title: "링크 정렬",
  options: ["최신 등록 순", "가나다 순", "취소"],
  cancelButtonIndex: 2,
  destructiveButtonIndex: 0,
};

const useLinkFilter = () => {
  const { showActionSheetWithOptions } = useActionSheet();
  const [folderDetail] = useAtom(folderDetailAtom);
  const [, setFolderList] = useAtom(folderListAtom);

  const handleFilterClick = () => {
    showActionSheetWithOptions(actionSheetOptions, handleActionSheetClick);
  };
  const handleContainerClick = () => {
    Keyboard.dismiss();
  };
  const handleActionSheetClick = (filterIndex) => {
    if (![0, 1].includes(filterIndex)) return;
    setFolderList((prev) => {
      const targetFolder = prev.find((item) => item.id === folderDetail.id);
      targetFolder.linkList.sort((a, b) => {
        if (filterIndex === 0) {
          return new Date(b.date) - new Date(a.date);
        }
        return a.linkName < b.linkName ? -1 : 1;
      });
      const next = [...prev];
      save(LOCAL_STORAGE_KEY.folderList, next);
      return next;
    });
  };

  return {
    handleFilterClick,
    handleContainerClick,
  };
};

export default useLinkFilter;
