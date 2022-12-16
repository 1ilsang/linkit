import { Pressable, StyleSheet, Text, View } from "react-native";
import { useActionSheet } from "@expo/react-native-action-sheet";

import FilterButton from "../../../shared/icons/FilterButton";

const actionSheetOptions = {
  title: "링크 정렬",
  options: ["최신 등록 순", "가나다 순", "취소"],
  cancelButtonIndex: 2,
  destructiveButtonIndex: 0,
};

const FilterArea = () => {
  const { showActionSheetWithOptions } = useActionSheet();

  const handleFilterClick = () => {
    showActionSheetWithOptions(actionSheetOptions, handleActionSheetClick);
  };
  const handleActionSheetClick = (data) => console.log(data);

  return (
    <View style={styles.container}>
      <Pressable onPress={handleFilterClick}>
        <Text style={styles.text}>정렬</Text>
      </Pressable>
      <FilterButton onPress={handleFilterClick} />
    </View>
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
