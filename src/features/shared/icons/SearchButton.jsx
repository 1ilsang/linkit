import { AntDesign } from "@expo/vector-icons";

const SearchButton = ({ onPress, style = {}, size = 24 }) => {
  return (
    <AntDesign
      style={{ color: "#2D264B", ...style }}
      name="search1"
      size={size}
      onPress={onPress}
    />
  );
};

export default SearchButton;
