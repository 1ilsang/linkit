import { Pressable, StyleSheet, Text } from "react-native";

import FilterButton from "../../../../../shared/icons/FilterButton";
import useLinkFilter from "../../../hooks/useLinkFilter";

const FilterArea = () => {
  const { handleFilterClick, handleContainerClick } = useLinkFilter();

  return (
    <Pressable onPress={handleContainerClick} style={styles.container}>
      <Text style={styles.text}>정렬</Text>
      <FilterButton onPress={handleFilterClick} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 18,
    paddingRight: 18,
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
