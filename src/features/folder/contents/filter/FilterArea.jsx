import { Pressable, StyleSheet, Text, View } from "react-native";
import { useActionSheet } from "@expo/react-native-action-sheet";

import FilterButton from "../../../../shared/icons/FilterButton";
import { useAtom } from "jotai";
import { folderListAtom } from "../../../../shared/atoms";
import { folderDetailAtom } from "../../atoms";
import { LOCAL_STORAGE_KEY, save } from "../../../../shared/utils/localStorage";

const actionSheetOptions = {
  title: "링크 정렬",
  options: ["최신 등록 순", "가나다 순", "취소"],
  cancelButtonIndex: 2,
  destructiveButtonIndex: 0,
};

const FilterArea = () => {
  const { showActionSheetWithOptions } = useActionSheet();
  const [folderDetail] = useAtom(folderDetailAtom);
  const [, setFolderList] = useAtom(folderListAtom);

  const handleFilterClick = () => {
    showActionSheetWithOptions(actionSheetOptions, handleActionSheetClick);
  };
  const handleActionSheetClick = (filterIndex) => {
    if (![0, 1].includes(filterIndex)) return;
    setFolderList((prev) => {
      const targetFolder = prev.find((item) => item.id === folderDetail.id);
      targetFolder.linkList.sort((a, b) => {
        if (filterIndex === 0) {
          return new Date(b.date) - new Date(a.date);
        }
        return a.linkName < b.linkName ? -1 : 1;
      });
      const next = [...prev];
      save(LOCAL_STORAGE_KEY.folderList, next);
      return next;
    });
  };

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
