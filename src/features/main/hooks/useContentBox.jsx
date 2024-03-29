import { useNavigation } from "@react-navigation/native";
import { useAtom } from "jotai";
import { mainAtom } from "../atoms";
import { folderListAtom, toastAtom } from "../../../shared/atoms";
import { useResetAtom } from "jotai/utils";
import { folderDetailAtom } from "../../folder/atoms";
import { LOCAL_STORAGE_KEY, save } from "../../../shared/utils/localStorage";
import { Alert } from "react-native";

const useContentBox = ({
  id,
  title,
  description,
  defaultFolder,
  color,
  icon,
}) => {
  const navigation = useNavigation();

  const [main, setMain] = useAtom(mainAtom);
  const [, setFolderList] = useAtom(folderListAtom);

  const resetFolderDetail = useResetAtom(folderDetailAtom);
  const [, setToast] = useAtom(toastAtom);

  const { moreOpen } = main;

  const moreList = [
    {
      name: "폴더 편집",
      onPress: () => {
        setMain((prev) => ({ ...prev, moreOpen: undefined }));
        navigation.push("FolderCreateEdit", { type: "edit", id });
      },
      icon: "PencilSimple",
    },
    {
      name: "폴더 삭제",
      onPress: () => {
        setMain((prev) => ({ ...prev, moreOpen: undefined }));
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

  const handleLinkDeleteClick = () => {
    setFolderList((prev) => {
      const next = prev.filter((item) => item.id !== id);
      save(LOCAL_STORAGE_KEY.folderList, next);
      return [...next];
    });
    resetFolderDetail();
    setToast({ message: "폴더가 삭제되었어요." });
  };

  const handlePressClick = () => {
    setMain((prev) => ({ ...prev, moreOpen: undefined }));
    navigation.push("Folder", {
      id,
      title,
      description,
      color,
      icon,
      defaultFolder,
    });
  };

  const handleMoreClick = () => {
    if (!moreOpen || (moreOpen && moreOpen !== id)) {
      setMain((prev) => ({ ...prev, moreOpen: id }));
      return;
    }
    setMain((prev) => ({ ...prev, moreOpen: undefined }));
  };

  return {
    handleMoreClick,
    handlePressClick,
    moreList,
    moreOpen,
  };
};

export default useContentBox;
