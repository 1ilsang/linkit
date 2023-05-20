import { Alert, Linking, Pressable, StyleSheet, View } from "react-native";
import Thumbnail from "./Thumbnail";
import LinkItemTitle from "./Title";
import LinkItemDescription from "./Description";
import MoreButton from "../../../../../../../shared/buttons/More";
import { appEnvAtom } from "../../../../../../../shared/atoms";
import { useAtom } from "jotai";
import { folderDetailAtom } from "../../../../../atoms";

const LinkItemBodyContainer = ({
  onBodyClick,
  linkName,
  search,
  pin,
  url,
  onMoreClick,
}) => {
  const [appEnv] = useAtom(appEnvAtom);
  const [, setFolderDetail] = useAtom(folderDetailAtom);

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
    onBodyClick?.();
  };
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Thumbnail url={url} />
        <Pressable style={styles.content} onPress={handleBodyClick}>
          <LinkItemTitle pin={pin} linkName={linkName} search={search} />
          <LinkItemDescription url={url} search={search} />
        </Pressable>
        {onMoreClick && <MoreButton onClick={onMoreClick} />}
      </View>
    </View>
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
    backgroundColor: "#FFFFFF",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 54,
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
});

export default LinkItemBodyContainer;
