import { StyleSheet, Text } from "react-native";

import CommonTitleContainer from "../../../shared/navigation/CommonContainer";
import HeaderLeftButton from "../../../shared/navigation/HeaderLeftButton";

const LinkAdderTitleContainer = (props) => {
  const title =
    props.route.params?.type === "edit" ? "링크 편집" : "링크 추가";

  return (
    <CommonTitleContainer>
      <HeaderLeftButton {...props} />
      <Text style={styles.title}>{title}</Text>
    </CommonTitleContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    width: 245,
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

export default LinkAdderTitleContainer;
