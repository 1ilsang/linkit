import { Feather } from "@expo/vector-icons";
import { Pressable } from "react-native";

const DeleteIcon = ({ onPress, style = {}, size = 22 }) => {
  return (
    <Pressable onPress={onPress} hitSlop={10}>
      <Feather name="x" style={{ color: "#C8C8C8", ...style }} size={size} />
    </Pressable>
  );
};

export default DeleteIcon;
