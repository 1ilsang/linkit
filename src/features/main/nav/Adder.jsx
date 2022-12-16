import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Adder = () => {
  const navigation = useNavigation();

  const handleAdderClick = () => navigation.push("FolderAdder");

  return (
    <Pressable onPress={handleAdderClick}>
      <Ionicons name="add-circle-outline" size={24} color="#2D264B" />
    </Pressable>
  );
};

export default Adder;
