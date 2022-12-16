import { EvilIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";

const NoImage = ({ onPress, style = {}, size = 22 }) => {
  return (
    <Pressable onPress={onPress} hitSlop={10}>
      <EvilIcons
        style={{ color: "#2D264B", ...style }}
        name="image"
        size={size}
      />
    </Pressable>
  );
};

export default NoImage;
