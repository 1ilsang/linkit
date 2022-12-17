import { Pressable, StyleSheet, Text } from "react-native";
import { Foundation } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Home = ({ scrollViewRef }) => {
  const navigation = useNavigation();

  const handleHomeClick = () => {
    scrollViewRef.current.scrollTo({ top: 0 });
    navigation.navigate("Main");
  };

  return (
    <Pressable style={styles.item} onPress={handleHomeClick}>
      <Foundation name="home" size={24} color="#2D264B" />
      <Text style={styles.text}>홈</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    paddingTop: 4,
    paddingRight: 4,
    paddingBottom: 4,
    paddingLeft: 4,

    width: 97,
    height: 72,
  },
  text: {
    display: "flex",
    width: 42,
    height: 18,

    fontWeight: "500",
    fontSize: 14,
    lineHeight: 18,

    textAlign: "center",
    letterSpacing: -0.01,

    color: "#2D264B",
  },
});

export default Home;
