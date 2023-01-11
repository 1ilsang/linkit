import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useActionSheet } from "@expo/react-native-action-sheet";
import Toast from "react-native-root-toast";
import MoreButton from "../../../shared/icons/MoreButton";
import IconFactory from "../../../shared/icons/IconFactory";
import { useAtom } from "jotai";
import { mainAtom } from "../atoms";
import { folderListAtom } from "../../../shared/atoms";
import { DEFAULT_SHORT_TOAST } from "../../../shared/constants/toast.js";
import { LOCAL_STORAGE_KEY, save } from "../../../shared/utils/localStorage";

const ContentBox = ({ id, title, description, defaultFolder, color, icon }) => {
  const navigation = useNavigation();

  const [main, setMain] = useAtom(mainAtom);
  const [, setFolderList] = useAtom(folderListAtom);

  const { showActionSheetWithOptions } = useActionSheet();

  const { moreOpen } = main;
  const IconComponent = IconFactory[icon];

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
    Toast.show("폴더가 삭제되었어요.", DEFAULT_SHORT_TOAST);
  };

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
        showActionSheetWithOptions(
          deleteActionSheetOptions,
          handleActionSheetClick
        );
      },
      icon: "Trash",
    },
  ];

  const handlePressClick = () => {
    setMain((prev) => ({ ...prev, moreOpen: undefined }));
    navigation.push("Folder", { id, title, description, color, icon });
  };
  const handleMoreClick = () => {
    if (!moreOpen || (moreOpen && moreOpen !== id)) {
      setMain((prev) => ({ ...prev, moreOpen: id }));
      return;
    }
    setMain((prev) => ({ ...prev, moreOpen: undefined }));
  };

  return (
    <Pressable
      style={{ ...styles.container, backgroundColor: color }}
      onPress={handlePressClick}
    >
      <View style={styles.top}>
        {IconComponent}
        <MoreButton
          size={16}
          open={id === moreOpen}
          list={moreList}
          onPress={handleMoreClick}
          defaultFolder={defaultFolder}
        />
      </View>
      <View style={styles.contents}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 20,
    paddingTop: 18,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 24,

    width: 160,
    height: 152,

    backgroundColor: "black",
    borderRadius: 16,
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
    zIndex: 300,
    width: 120,
    height: 24,
  },
  contents: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",

    width: 120,
    height: 76,
  },
  title: {
    width: 120,
    height: 38,

    fontWeight: "590",
    fontSize: 16,
    lineHeight: 19,

    color: "#FFFFFF",
  },
  description: {
    width: 120,
    height: 14,

    fontSize: 12,
    lineHeight: 14,

    color: "#FFFFFF",
  },
});

export default ContentBox;
