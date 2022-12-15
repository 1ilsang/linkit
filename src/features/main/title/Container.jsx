import { StyleSheet, Text } from "react-native";
import SearchButton from "../../shared/icons/SearchButton";

import CommonTitleContainer from "../../shared/navigation/CommonContainer";

const MainTitleContainer = ({ navigation }) => {
  const handleSearchClick = () => {
    navigation.push("Folder");
  };

  return (
    <CommonTitleContainer>
      <Text style={styles.title}>Linkit</Text>
      <SearchButton onPress={handleSearchClick} />
    </CommonTitleContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    width: 308,
    height: 41,

    fontWeight: "700",
    fontSize: 34,
    lineHeight: 41,

    letterSpacing: "0.374",

    color: "#2D264B",
  },
});

export default MainTitleContainer;
