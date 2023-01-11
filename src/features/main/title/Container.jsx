import { useAtom } from "jotai";
import { Pressable, StyleSheet, Text } from "react-native";
import SearchButton from "../../../shared/icons/SearchButton";
import CommonTitleContainer from "../../../shared/navigation/CommonContainer";
import { mainAtom } from "../atoms";

const MainTitleContainer = ({ navigation }) => {
  const [, setMain] = useAtom(mainAtom);

  const handleSearchClick = () => {
    setMain((prev) => ({ ...prev, moreOpen: undefined }));
    navigation.push("Search");
  };
  const handleTitleContainerPress = () => {
    setMain((prev) => ({ ...prev, moreOpen: undefined }));
  };

  return (
    <Pressable onPress={handleTitleContainerPress}>
      <CommonTitleContainer>
        <Text style={styles.title}>Linkit</Text>
        <SearchButton onPress={handleSearchClick} />
      </CommonTitleContainer>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  title: {
    width: 316,
    height: 41,

    fontWeight: "700",
    fontSize: 34,
    lineHeight: 41,

    letterSpacing: "0.374",

    color: "#2D264B",
  },
});

export default MainTitleContainer;
