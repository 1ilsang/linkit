import { StyleSheet, Text } from "react-native";

import CommonTitleContainer from "../../../shared/navigation/CommonContainer";
import HeaderLeftButton from "../../../shared/navigation/HeaderLeftButton";

const FolderAdderTitleContainer = (props) => {
  return (
    <CommonTitleContainer>
      <HeaderLeftButton {...props} />
      <Text style={styles.title}>폴더 생성</Text>
    </CommonTitleContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    height: 41,

    paddingLeft: 10,
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 41,
    letterSpacing: 0.374,

    color: "#2D264B",
  },
  search: { paddingRight: 24 },
});

export default FolderAdderTitleContainer;
