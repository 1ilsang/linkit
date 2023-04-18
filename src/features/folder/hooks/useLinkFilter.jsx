import { useAtom } from "jotai";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { Keyboard } from "react-native";
import { folderListAtom } from "../../../shared/atoms";
import { folderDetailAtom } from "../atoms";
import { LOCAL_STORAGE_KEY, save } from "../../../shared/utils/localStorage";
import { sortLinkList } from "../../../shared/utils/helpers";
import { FOLDER_SORT } from "../../../shared/constants/folder";

const actionSheetOptions = {
  title: "링크 정렬",
  options: ["최신 등록 순", "가나다 순", "취소"],
  cancelButtonIndex: 2,
  destructiveButtonIndex: 0,
};

const useLinkFilter = () => {
  const { showActionSheetWithOptions } = useActionSheet();
  const [folderDetail, setFolderDetail] = useAtom(folderDetailAtom);
  const [, setFolderList] = useAtom(folderListAtom);

  const handleFilterClick = () => {
    setFolderDetail((prev) => ({
      ...prev,
      titleMoreOpen: undefined,
    }));
    showActionSheetWithOptions(actionSheetOptions, handleActionSheetClick);
  };
  const handleContainerClick = () => {
    Keyboard.dismiss();
    setFolderDetail((prev) => ({
      ...prev,
      titleMoreOpen: undefined,
    }));
  };
  const handleActionSheetClick = (filterIndex) => {
    if (![0, 1].includes(filterIndex)) return;
    const nextLinkList = [];
    setFolderList((prev) => {
      const targetFolder = prev.find((item) => item.id === folderDetail.id);
      const sortType = filterIndex === 0 ? FOLDER_SORT.DATE : FOLDER_SORT.NAME;
      targetFolder.linkList.sort(sortLinkList(sortType));
      nextLinkList.push(...targetFolder.linkList);
      targetFolder.sort = sortType;
      const next = [...prev];
      save(LOCAL_STORAGE_KEY.folderList, next);
      return next;
    });
    setFolderDetail((prev) => ({ ...prev, searchLinkList: nextLinkList }));
  };

  return {
    handleFilterClick,
    handleContainerClick,
  };
};

export default useLinkFilter;
