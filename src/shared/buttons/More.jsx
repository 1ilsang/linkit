import { Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

const MoreButton = ({ onClick }) => {
  return (
    <Pressable onPress={onClick} hitSlop={10}>
      <Feather style={{ color: "#262424" }} name="more-vertical" size={22} />
    </Pressable>
  );
};

export default MoreButton;
