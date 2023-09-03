import { useAtom } from "jotai";
import { folderDetailAtom } from "../../../../atoms";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import {
  appEnvAtom,
  folderListAtom,
  toastAtom,
} from "../../../../../../shared/atoms";
import {
  LOCAL_STORAGE_KEY,
  save,
} from "../../../../../../shared/utils/localStorage";
import { useRef } from "react";
import { sortLinkList } from "../../../../../../shared/utils/helpers";
import renderLeftActions from "./swipe/LeftAction";
import renderRightActions from "./swipe/RightAction";
import LinkItemBodyContainer from "./body/Container";
import { Alert, Linking } from "react-native";

const FolderContentItemContainer = (props) => {
  const swipeableRef = useRef(null);

  const [folderDetail, setFolderDetail] = useAtom(folderDetailAtom);
  const [, setFolderList] = useAtom(folderListAtom);
  const [appEnv] = useAtom(appEnvAtom);
  const [, setToast] = useAtom(toastAtom);

  const { linkName, url, pin } = props;
  const { search } = folderDetail;

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
    setToast({ message: "링크가 삭제되었어요." });
  };

  const handlePinClick = (linkId) => {
    setFolderList((prev) => {
      const targetFolder = prev.find((item) => item.id === folderDetail.id);
      const targetLink = targetFolder.linkList.find(
        (item) => item.id === linkId
      );
      targetLink.pin = !targetLink.pin;
      targetFolder.linkList.sort(sortLinkList(targetFolder.sort));
      const next = [...prev];
      save(LOCAL_STORAGE_KEY.folderList, next);
      swipeableRef.current?.close();
      return next;
    });
  };

  const handleBodyClick = () => {
    if (appEnv.defaultBrowser) {
      Linking.openURL(url).catch(() => {
        Alert.alert("Error", "웹사이트를 열수 없어요. URL을 확인해 주세요.");
      });
    } else {
      setFolderDetail((prev) => ({
        ...prev,
        webView: {
          url,
        },
      }));
    }
  };

  return (
    <GestureHandlerRootView>
      <Swipeable
        ref={swipeableRef}
        renderLeftActions={(dragX) =>
          renderLeftActions({ dragX, props, pin, handlePinClick })
        }
        renderRightActions={(dragX) =>
          renderRightActions({ dragX, props, handleLinkDeleteClick })
        }
      >
        <LinkItemBodyContainer
          pin={pin}
          linkName={linkName}
          search={search}
          url={url}
          onBodyClick={handleBodyClick}
          onMoreClick={handleMorePress}
        />
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default FolderContentItemContainer;
