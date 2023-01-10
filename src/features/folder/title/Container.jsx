import { StyleSheet, Text, View } from "react-native";

import MoreButton from "../../../shared/icons/MoreButton";
import CommonTitleContainer from "../../../shared/navigation/CommonContainer";
import HeaderLeftButton from "../../../shared/navigation/HeaderLeftButton";

const FolderTitleContainer = (props) => {
  const handleMoreClick = () => {};

  return (
    <CommonTitleContainer>
      <View style={styles.container}>
        <HeaderLeftButton {...props} />
        <View style={styles.content}>
          <Text style={styles.title}>{props.route.params.title}</Text>
          <MoreButton onPress={handleMoreClick} />
        </View>
      </View>
    </CommonTitleContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 41,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 14,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 41,
    letterSpacing: 0.374,
    color: "#2D264B",
  },
});

export default FolderTitleContainer;
