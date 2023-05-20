import { Pressable, StyleSheet, Text, View } from "react-native";
import IconFactory from "../../../shared/icons/IconFactory";
import { useAtom } from "jotai";
import { globalSearchAtom } from "../atoms";
import { folderListAtom } from "../../../shared/atoms";
import { handleLinkSearch } from "../helpers";

const Item = ({ keyword }) => {
  const [, setGlobalSearch] = useAtom(globalSearchAtom);
  const [folderList] = useAtom(folderListAtom);

  const handleKeywordClick = () => {
    const linkList = folderList.flatMap((item) => item.linkList);
    const filteredList = linkList.filter((link) =>
      handleLinkSearch(keyword, link)
    );
    setGlobalSearch((prev) => {
      const prevRecentSearchList = prev.recentSearchList.filter(
        (word) => word !== keyword
      );
      return {
        ...prev,
        recentSearchList: [keyword, ...prevRecentSearchList],
        searchWord: keyword,
        searchedList: [...filteredList],
      };
    });
  };

  const handleDeleteClick = () => {
    setGlobalSearch((prev) => ({
      ...prev,
      recentSearchList: [
        ...prev.recentSearchList.filter((word) => word !== keyword),
      ],
    }));
  };

  return (
    <View style={styles.itemContainer}>
      <Pressable onPress={handleKeywordClick} hitSlop={10}>
        <Text>{keyword}</Text>
      </Pressable>
      <Pressable hitSlop={10} onPress={handleDeleteClick}>
        <IconFactory icon="X" color="#C8C8C8" size={16} />
      </Pressable>
    </View>
  );
};

const RecentSearchArea = ({ list }) => {
  const [, setGlobalSearch] = useAtom(globalSearchAtom);

  const handleDeleteAllClick = () => {
    // TODO: 모달 떠야함
    setGlobalSearch((prev) => ({ ...prev, recentSearchList: [] }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>최근 검색</Text>

        <Pressable onPress={handleDeleteAllClick}>
          <Text style={styles.deleteText}>전체 삭제</Text>
        </Pressable>
      </View>
      <View style={styles.listContainer}>
        {list.map((keyword) => (
          <Item key={keyword} keyword={keyword} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 18,
    paddingRight: 18,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 34,
    paddingBottom: 14,
  },
  title: {
    height: 19,
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: -1,
    color: "#1A1A1A",
  },
  deleteText: {
    color: "#A5A5A5",
    fontSize: 12,
  },
  listContainer: {},
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 14,
    paddingBottom: 14,
  },
  itemName: {
    height: 17,
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: -1,
    color: "#1A1A1A",
  },
});

export default RecentSearchArea;
