import { AntDesign } from "@expo/vector-icons";

const SearchButton = ({ onPress, style = {} }) => {
  return (
    <AntDesign
      style={{ color: "#2D264B", ...style }}
      name="search1"
      size={24}
      onPress={onPress}
    />
  );
};

export default SearchButton;
