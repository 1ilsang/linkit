import { AntDesign } from "@expo/vector-icons";
import { Pressable } from "react-native";

const SearchButton = ({ onPress, style = {}, size = 24 }) => {
  return (
    <Pressable onPress={onPress} hitSlop={10}>
      <AntDesign
        style={{ color: "#2D264B", ...style }}
        name="search1"
        size={size}
      />
    </Pressable>
  );
};

export default SearchButton;
