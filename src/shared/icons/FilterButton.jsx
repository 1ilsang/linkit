import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import IconFactory from "./IconFactory";

const FilterButton = ({ onPress, style = {}, size = 22 }) => {
  return (
    <Pressable onPress={onPress} hitSlop={10}>
      <IconFactory
        icon="SlidersHorizontal"
        style={{ color: "#2D264B", ...style }}
        size={size}
      />
    </Pressable>
  );
};

export default FilterButton;
