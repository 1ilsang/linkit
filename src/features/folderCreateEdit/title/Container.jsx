import { StyleSheet, Text } from "react-native";

import CommonTitleContainer from "../../../shared/navigation/CommonContainer";
import HeaderLeftButton from "../../../shared/navigation/HeaderLeftButton";

const FolderAdderTitleContainer = (props) => {
  const title =
    props.route.params.type === "create" ? "폴더 생성" : "폴더 편집";

  return (
    <CommonTitleContainer>
      <HeaderLeftButton {...props} />
      <Text style={styles.title}>{title}</Text>
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
