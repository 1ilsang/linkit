import { useNavigation, StackActions } from "@react-navigation/native";
import { useResetAtom } from "jotai/utils";
import { useAtom } from "jotai";
import { folderListAtom, toastAtom } from "../../../shared/atoms";
import { LOCAL_STORAGE_KEY, save } from "../../../shared/utils/localStorage";
import { folderDetailAtom } from "../atoms";
import { MODE } from "../constants";
import { Alert } from "react-native";

const useFolderTitle = (props) => {
  const { title, id, defaultFolder } = props.route.params;

  const [folderList, setFolderList] = useAtom(folderListAtom);
  const [folderDetail, setFolderDetail] = useAtom(folderDetailAtom);
  const { titleMoreOpen, mode, deleteLinkList } = folderDetail;
  const [, setToast] = useAtom(toastAtom);

  const navigation = useNavigation();
  const resetFolderDetail = useResetAtom(folderDetailAtom);

  const handleMoreClick = () => {
    setFolderDetail((prev) => ({
      ...prev,
      titleMoreOpen: !prev.titleMoreOpen,
    }));
  };

  const handleLinkDeleteClick = () => {
    setFolderList((prev) => {
      const next = prev.filter((item) => item.id !== id);
      save(LOCAL_STORAGE_KEY.folderList, next);
      return [...next];
    });
    resetFolderDetail();
    setToast({ message: "폴더가 삭제되었어요." });
    navigation.navigate("Main");
  };
  const handleLinkAllDeleteClick = () => {
    setFolderDetail((prev) => ({ ...prev, mode: MODE.normal }));
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
    setToast({ message: "링크가 삭제되었어요." });
  };

  const moreList = [
    {
      name: "목록 편집",
      onPress: () => {
        const { linkList } = folderList.find((item) => item.id === id);
        setFolderDetail((prev) => ({
          ...prev,
          titleMoreOpen: undefined,
          search: "",
          searchLinkList: linkList ?? [],
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
        }));
        Alert.alert(
          `${title} 폴더를 삭제하시겠어요? 폴더 내 링크도 함께 삭제되며, 삭제 후엔 복구할 수 없어요.`,
          "",
          [
            { text: "취소", style: "cancel" },
            { text: "삭제", onPress: handleLinkDeleteClick },
          ]
        );
      },
      icon: "Trash",
    },
  ];

  const handleTitleAreaPress = () => {
    setFolderDetail((prev) => ({
      ...prev,
      titleMoreOpen: undefined,
    }));
  };
  const handleCancelEditPress = () => {
    setFolderDetail((prev) => ({ ...prev, mode: MODE.normal }));
  };
  const handleDeleteLinkPress = () => {
    Alert.alert(
      `${title}의 링크 ${deleteLinkList.length}건을 삭제하시겠어요?`,
      "",
      [
        { text: "취소", style: "cancel" },
        { text: "삭제", onPress: handleLinkAllDeleteClick },
      ]
    );
  };

  return {
    id,
    title,
    titleMoreOpen,
    moreList,
    deleteLinkList,
    defaultFolder,
    mode,
    handleTitleAreaPress,
    handleMoreClick,
    handleCancelEditPress,
    handleDeleteLinkPress,
  };
};

export default useFolderTitle;
