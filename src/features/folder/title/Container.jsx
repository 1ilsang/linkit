import { StyleSheet, Text, View } from "react-native";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { useResetAtom } from "jotai/utils";
import MoreButton from "../../../shared/icons/MoreButton";
import CommonTitleContainer from "../../../shared/navigation/CommonContainer";
import HeaderLeftButton from "../../../shared/navigation/HeaderLeftButton";
import { useNavigation, StackActions } from "@react-navigation/native";
import { useAtom } from "jotai";
import { folderListAtom } from "../../../shared/atoms";
import { LOCAL_STORAGE_KEY, save } from "../../../shared/utils/localStorage";
import Toast from "react-native-root-toast";
import { DEFAULT_SHORT_TOAST } from "../../../shared/constants/toast";
import { folderDetailAtom } from "../atoms";
import { MODE } from "../constants";

const FolderTitleContainer = (props) => {
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

  return (
    <CommonTitleContainer onPress={handleTitleAreaPress}>
      <View style={styles.container}>
        <HeaderLeftButton {...props} />
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <MoreButton
            style={{ color: "#262424" }}
            open={titleMoreOpen}
            list={moreList}
            onPress={handleMoreClick}
            defaultFolder={defaultFolder}
          />
        </View>
      </View>
    </CommonTitleContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 41,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 14,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 41,
    letterSpacing: 0.374,
    color: "#2D264B",
  },
});

export default FolderTitleContainer;
