import { useNavigation, StackActions } from "@react-navigation/native";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { useResetAtom } from "jotai/utils";
import Toast from "react-native-root-toast";
import { useAtom } from "jotai";
import { folderListAtom } from "../../../shared/atoms";
import { LOCAL_STORAGE_KEY, save } from "../../../shared/utils/localStorage";
import { DEFAULT_SHORT_TOAST } from "../../../shared/constants/toast";
import { folderDetailAtom } from "../atoms";
import { MODE } from "../constants";

const useFolderTitle = (props) => {
  const { title, id, defaultFolder } = props.route.params;

  const [folderList, setFolderList] = useAtom(folderListAtom);
  const [folderDetail, setFolderDetail] = useAtom(folderDetailAtom);
  const { titleMoreOpen, mode, deleteLinkList } = folderDetail;

  const navigation = useNavigation();
  const { showActionSheetWithOptions } = useActionSheet();
  const resetFolderDetail = useResetAtom(folderDetailAtom);

  const handleMoreClick = () => {
    setFolderDetail((prev) => ({
      ...prev,
      titleMoreOpen: !prev.titleMoreOpen,
      itemMoreOpen: undefined,
    }));
  };

  const deleteFolderActionSheetOptions = {
    title: `${title} 폴더를 삭제하시겠어요? 폴더 내 링크도 함께 삭제되며, 삭제 후엔 복구할 수 없어요.`,
    options: ["취소", "삭제"],
    cancelButtonIndex: 0,
    destructiveButtonIndex: 1,
  };
  const deleteLinkActionSheetOptions = {
    title: `${title}의 링크 ${deleteLinkList.length}건을 삭제하시겠어요?`,
    options: ["취소", "삭제"],
    cancelButtonIndex: 0,
    destructiveButtonIndex: 1,
  };

  const handleActionSheetClick = (actionIndex) => {
    if (actionIndex !== 1) return;
    setFolderList((prev) => {
      const next = prev.filter((item) => item.id !== id);
      save(LOCAL_STORAGE_KEY.folderList, next);
      return next;
    });
    resetFolderDetail();
    Toast.show("폴더가 삭제되었어요.", DEFAULT_SHORT_TOAST);
    navigation.navigate("Main");
  };
  const handleLinkActionSheetClick = (actionIndex) => {
    if (actionIndex !== 1) return;
    setFolderList((prev) => {
      const targetFolder = prev.find((item) => item.id === id);
      const refinedLinkList = targetFolder.linkList.filter(
        (item) => !deleteLinkList.includes(item.id)
      );
      targetFolder.linkList = refinedLinkList;
      const next = [...prev];
      save(LOCAL_STORAGE_KEY.folderList, next);
      return next;
    });
    Toast.show("링크가 삭제되었어요.", DEFAULT_SHORT_TOAST);
  };

  const moreList = [
    {
      name: "목록 편집",
      onPress: () => {
        const { linkList: searchLinkList } = folderList.find(
          (item) => item.id === id
        );
        setFolderDetail((prev) => ({
          ...prev,
          titleMoreOpen: undefined,
          itemMoreOpen: undefined,
          search: "",
          searchLinkList,
          mode: MODE.edit,
        }));
      },
      icon: "FolderSimpleDotted",
    },
    {
      name: "폴더 편집",
      onPress: () => {
        setFolderDetail((prev) => ({
          ...prev,
          titleMoreOpen: undefined,
          itemMoreOpen: undefined,
        }));
        const pushAction = StackActions.push("FolderCreateEdit", {
          type: "edit",
          id,
        });
        navigation.dispatch(pushAction);
      },
      icon: "PencilSimple",
    },
    {
      name: "폴더 삭제",
      onPress: () => {
        setFolderDetail((prev) => ({
          ...prev,
          titleMoreOpen: undefined,
          itemMoreOpen: undefined,
        }));
        showActionSheetWithOptions(
          deleteFolderActionSheetOptions,
          handleActionSheetClick
        );
      },
      icon: "Trash",
    },
  ];

  const handleTitleAreaPress = () => {
    setFolderDetail((prev) => ({
      ...prev,
      titleMoreOpen: undefined,
      itemMoreOpen: undefined,
    }));
  };
  const handleCancelEditPress = () => {
    setFolderDetail((prev) => ({ ...prev, mode: MODE.normal }));
  };
  const handleDeleteLinkPress = () => {
    showActionSheetWithOptions(
      deleteLinkActionSheetOptions,
      handleLinkActionSheetClick
    );
  };

  return {
    id,
    title,
    titleMoreOpen,
    moreList,
    defaultFolder,
    mode,
    handleTitleAreaPress,
    handleMoreClick,
    handleCancelEditPress,
    handleDeleteLinkPress,
  };
};

export default useFolderTitle;
