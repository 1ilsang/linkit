import { Pressable } from "react-native";
import { Foundation } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  const handleHomeClick = () => navigation.navigate("Main");

  return (
    <Pressable onPress={handleHomeClick}>
      <Foundation name="home" size={24} color="#2D264B" />
    </Pressable>
  );
};

export default Home;
