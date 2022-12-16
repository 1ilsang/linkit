import { Feather } from "@expo/vector-icons";
import { Pressable } from "react-native";

const FolderAddButton = ({ onPress, style = {}, size = 22 }) => {
  return (
    <Pressable onPress={onPress} hitSlop={10}>
      <Feather
        name="folder-plus"
        style={{ color: "#2D264B", ...style }}
        size={size}
      />
    </Pressable>
  );
};

export default FolderAddButton;
