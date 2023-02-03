import { useAtom } from "jotai";
import { Pressable, StyleSheet, Text, View } from "react-native";
import MoreButton from "../../../../../shared/icons/MoreButton";
import NoImage from "../../../../../shared/icons/NonImage";
import { folderDetailAtom } from "../../../atoms";

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

const FolderContentItem = ({ linkName, url, id }) => {
  const [folderDetail, setFolderDetail] = useAtom(folderDetailAtom);
  const { search, itemMoreOpen } = folderDetail;

  const linkText = getText(linkName, search);
  const urlText = getText(url, search);

  const handleMorePress = () => {
    setFolderDetail((prev) => ({
      ...prev,
      itemMoreOpen: prev.itemMoreOpen === id ? undefined : id,
    }));
  };

  const moreList = [
    // TODO: start detail
    {
      name: "링크 공유",
      icon: "Share",
      onPress: () => {},
    },
    {
      name: "링크 편집",
      icon: "PencilSimple",
      onPress: () => {},
    },
    {
      name: "링크 삭제",
      icon: "Trash",
      onPress: () => {},
    },
  ];

  return (
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
        <MoreButton
          style={{ color: "#262424" }}
          open={itemMoreOpen === id}
          list={moreList}
          onPress={handleMorePress}
        />
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
});

export default FolderContentItem;
