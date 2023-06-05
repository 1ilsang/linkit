import { Pressable, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAtom } from "jotai";
import { mainAtom } from "../../main/atoms";
import IconFactory from "../../../shared/icons/IconFactory";
import { itemStyle } from "./styles";

const Home = ({ selectedNav, onClick }) => {
  const navigation = useNavigation();

  const [main, setMain] = useAtom(mainAtom);

  const handleHomeClick = () => {
    onClick("홈");
    setMain((prev) => ({ ...prev, moreOpen: undefined }));
    main.scrollViewRef.current.scrollTo({ top: 0 });
    navigation.navigate("Main");
  };

  return (
    <Pressable style={styles.item} onPress={handleHomeClick}>
      <IconFactory
        icon="House"
        weight={selectedNav === "홈" ? "fill" : undefined}
      />
      <Text style={styles.text}>홈</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ...itemStyle,
});

export default Home;
