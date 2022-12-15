import { Feather } from "@expo/vector-icons";
import { Pressable } from "react-native";

const MoreButton = ({ onPress, style = {}, size = 22 }) => {
  return (
    <Pressable onPress={onPress} hitSlop={10}>
      <Feather
        style={{ color: "#2D264B", ...style }}
        name="more-vertical"
        size={size}
      />
    </Pressable>
  );
};

export default MoreButton;
