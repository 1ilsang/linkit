import {
  Alert,
  Keyboard,
  Pressable,
  Share,
  StyleSheet,
  View,
} from "react-native";
import FolderContentContainer from "./contents/Container";
import BottomSheet from "../../../shared/bottomSheet/BottomSheet";
import { useAtom } from "jotai";
import { folderDetailAtom } from "../atoms";
import { useLayoutEffect, useRef } from "react";
import { folderListAtom } from "../../../shared/atoms";
import { LOCAL_STORAGE_KEY, save } from "../../../shared/utils/localStorage";
import Toast from "react-native-root-toast";
import { DEFAULT_SHORT_TOAST } from "../../../shared/constants/toast";
import WebViewContainer from "../../../shared/WebViewContainer";

const FolderContainer = (props) => {
  const bottomSheetRef = useRef(null);

  const [folderDetail, setFolderDetail] = useAtom(folderDetailAtom);
  const [, setFolderList] = useAtom(folderListAtom);
  const { bottomSheetItem, webView } = folderDetail;

  useLayoutEffect(() => {
    if (!bottomSheetRef) return;
    setFolderDetail((prev) => ({ ...prev, bottomSheetRef }));
  }, []);

  const handleLinkDeleteClick = () => {
    setFolderList((prev) => {
      const targetFolder = prev.find((item) => item.id === folderDetail.id);
      const refinedLinkList = targetFolder.linkList.filter(
        (item) => item.id !== bottomSheetItem.id
      );
      targetFolder.linkList = refinedLinkList;
      const next = [...prev];
      save(LOCAL_STORAGE_KEY.folderList, next);
      return next;
    });
    Toast.show("링크가 삭제되었어요.", DEFAULT_SHORT_TOAST);
  };

  const bottomSheetList = [
    {
      name: "링크 공유",
      icon: "Share",
      onPress: async () => {
        await Share.share({
          message: bottomSheetItem.url,
        });
      },
    },
    {
      name: "링크 편집(미구현)",
      icon: "PencilSimple",
      onPress: () => {
        // TODO: 편집 창으로 가야함.
      },
    },
    {
      name: "링크 삭제",
      icon: "Trash",
      onPress: () => {
        Alert.alert(`${bottomSheetItem.linkName} 링크를 삭제하시겠어요?`, "", [
          { text: "취소", style: "cancel" },
          { text: "삭제", onPress: handleLinkDeleteClick },
        ]);
      },
    },
  ];

  const handleWebViewClose = () => {
    setFolderDetail((prev) => ({ ...prev, webView: {} }));
  };

  return (
    <View style={styles.container}>
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <FolderContentContainer {...props} />
      </Pressable>
      <BottomSheet ref={bottomSheetRef} list={bottomSheetList} />
      <WebViewContainer uri={webView.url} onClose={handleWebViewClose} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FolderContainer;
