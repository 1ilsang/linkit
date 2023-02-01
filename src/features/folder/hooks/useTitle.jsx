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

  const [, setFolderList] = useAtom(folderListAtom);
  const [folderDetail, setFolderDetail] = useAtom(folderDetailAtom);
  const { titleMoreOpen } = folderDetail;

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

  const deleteActionSheetOptions = {
    title: `${title} 폴더를 삭제하시겠어요? 폴더 내 링크도 함께 삭제되며, 삭제 후엔 복구할 수 없어요.`,
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

  const moreList = [
    {
      name: "목록 편집",
      onPress: () => {
        setFolderDetail((prev) => ({
          ...prev,
          titleMoreOpen: undefined,
          itemMoreOpen: undefined,
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
          deleteActionSheetOptions,
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

  return {
    handleTitleAreaPress,
    title,
    titleMoreOpen,
    moreList,
    handleMoreClick,
    defaultFolder,
  };
};

export default useFolderTitle;
