import { StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import CommonTitleContainer from "../../shared/navigation/CommonContainer";

const MainTitleContainer = ({ navigation }) => {
  const handleSearchClick = () => {
    navigation.push("Folder");
  };

  return (
    <CommonTitleContainer>
      <Text style={styles.title}>Linkit</Text>
      <AntDesign
        name="search1"
        size={24}
        color="#2D264B"
        onPress={handleSearchClick}
      />
    </CommonTitleContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    width: 291,
    height: 41,

    fontFamily: "System",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 34,
    lineHeight: 41,

    letterSpacing: "0.374",

    color: "#2D264B",

    flex: "none",
    order: 0,
    flexGrow: 1,
  },
});

export default MainTitleContainer;
