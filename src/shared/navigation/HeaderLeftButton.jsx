import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { Pressable } from "react-native";

const HeaderLeftButton = () => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={navigation.goBack} hitSlop={10}>
      <Entypo name="chevron-thin-left" size={22} color="#2D264B" />
    </Pressable>
  );
};

export default HeaderLeftButton;
