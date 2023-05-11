import { Pressable, StyleSheet, Text, View } from "react-native";

import FilterButton from "../../../../../shared/icons/FilterButton";
import useLinkFilter from "../../../hooks/useLinkFilter";
import { Link } from "phosphor-react-native";

const FilterArea = () => {
  const { handleFilterClick, handleContainerClick, linkCount } =
    useLinkFilter();

  return (
    <Pressable onPress={handleContainerClick} style={styles.container}>
      <View style={styles.linkContainer}>
        <Link size={17} />
        <Text style={styles.linkText}>{linkCount}</Text>
      </View>
      <View style={styles.filterContainer}>
        <Text style={styles.text}>정렬</Text>
        <FilterButton onPress={handleFilterClick} />
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
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 18,
    paddingRight: 18,
  },
  linkContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  linkText: {
    paddingLeft: 2,
  },
  filterContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    width: 26,
    height: 17,
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 17,
    paddingRight: 5,
    letterSpacing: -0.005,
    color: "#2D264B",
  },
});

export default FilterArea;
