import { Pressable, StyleSheet, Text, View } from "react-native";
import IconFactory from "../../../shared/icons/IconFactory";
import { useAtom } from "jotai";
import { globalSearchAtom } from "../atoms";

const Item = ({ keyword }) => {
  const [, setGlobalSearch] = useAtom(globalSearchAtom);

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
      <Text>{keyword}</Text>
      <Pressable hitSlop={10} onPress={handleDeleteClick}>
        <IconFactory icon="X" color="#C8C8C8" size={16} />
      </Pressable>
    </View>
  );
};

const RecentSearchArea = ({ list }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>최근 검색</Text>
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
