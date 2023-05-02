import { useAtom } from "jotai";
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import NoImage from "../../../../../shared/icons/NonImage";
import { folderDetailAtom } from "../../../atoms";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { PushPin, Trash } from "phosphor-react-native";
import { folderListAtom } from "../../../../../shared/atoms";
import Toast from "react-native-root-toast";
import { DEFAULT_SHORT_TOAST } from "../../../../../shared/constants/toast";
import {
  LOCAL_STORAGE_KEY,
  save,
} from "../../../../../shared/utils/localStorage";

const getText = (targetText, searchText) => {
  const startIndex = targetText.indexOf(searchText);
  const endIndex = startIndex + searchText.length;
  return {
    searched: startIndex !== -1,
    prevText: targetText.slice(0, startIndex),
    nextText: targetText.slice(endIndex),
    originText: targetText,
  };
};

const FolderContentItem = (props) => {
  const [folderDetail, setFolderDetail] = useAtom(folderDetailAtom);
  const [, setFolderList] = useAtom(folderListAtom);

  const { linkName, url } = props;
  const { search } = folderDetail;

  const linkText = getText(linkName, search);
  const urlText = getText(url, search);

  const handleMorePress = () => {
    folderDetail.bottomSheetRef?.current?.open();
    setFolderDetail((prev) => ({
      ...prev,
      bottomSheetItem: { ...props },
    }));
  };
  const handleLinkDeleteClick = (linkId) => {
    setFolderList((prev) => {
      const targetFolder = prev.find((item) => item.id === folderDetail.id);
      const refinedLinkList = targetFolder.linkList.filter(
        (item) => item.id !== linkId
      );
      targetFolder.linkList = refinedLinkList;
      const next = [...prev];
      save(LOCAL_STORAGE_KEY.folderList, next);
      return next;
    });
    Toast.show("링크가 삭제되었어요.", DEFAULT_SHORT_TOAST);
  };

  return (
    <GestureHandlerRootView>
      <Swipeable
        renderLeftActions={(dragX) => renderLeftActions(dragX, props)}
        renderRightActions={(dragX) =>
          renderRightActions(dragX, props, handleLinkDeleteClick)
        }
      >
        <Pressable style={styles.container}>
          <View style={styles.contentContainer}>
            <View style={styles.thumbnail}>
              <NoImage size={40} />
            </View>
            <View style={styles.content}>
              <Text style={styles.linkName}>
                {linkText.searched ? (
                  <>
                    {linkText.prevText}
                    <Text style={styles.search}>{search}</Text>
                    {linkText.nextText}
                  </>
                ) : (
                  linkText.originText
                )}
              </Text>
              <Text style={styles.url}>
                {urlText.searched ? (
                  <>
                    {urlText.prevText}
                    <Text style={styles.search}>{search}</Text>
                    {urlText.nextText}
                  </>
                ) : (
                  urlText.originText
                )}
              </Text>
            </View>
            <Pressable onPress={handleMorePress} hitSlop={10}>
              <Feather
                style={{ color: "#262424" }}
                name="more-vertical"
                size={22}
              />
            </Pressable>
          </View>
        </Pressable>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const renderLeftActions = (dragX) => {
  const trans = dragX.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 0],
  });
  return (
    <Pressable onPress={() => console.log("1")}>
      <View style={styles.pin}>
        <Animated.Text
          style={[
            {
              transform: [{ translateX: trans }],
            },
          ]}
        >
          <PushPin color="#FFFFFF" />
        </Animated.Text>
      </View>
    </Pressable>
  );
};

const renderRightActions = (dragX, { linkName, id }, handleLinkDeleteClick) => {
  const trans = dragX.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 0],
  });
  const handleDeleteClick = () => {
    Alert.alert(`${linkName} 링크를 삭제하시겠어요?`, "", [
      { text: "취소", style: "cancel" },
      { text: "삭제", onPress: () => handleLinkDeleteClick(id) },
    ]);
  };
  return (
    <Pressable onPress={handleDeleteClick}>
      <View style={styles.delete}>
        <Animated.Text
          style={[
            {
              transform: [{ translateX: trans }],
            },
          ]}
        >
          <Trash color="#FFFFFF" />
        </Animated.Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 18,
    paddingRight: 18,
  },
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 54,
  },
  thumbnail: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 54,
    height: 54,
    marginRight: 12,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: 244,
    height: 54,
    marginRight: 16,
  },
  linkName: {
    height: 19,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: -0.005,
    color: "#2D264B",
  },
  url: {
    height: 17,
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: -0.005,
    color: "#A5A5A5",
  },
  search: {
    color: "#3583F0",
  },
  pin: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: "100%",
    backgroundColor: "#007AFF",
  },
  delete: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: "100%",
    backgroundColor: "#FF3B30",
  },
});

export default FolderContentItem;
