import { Feather } from "@expo/vector-icons";

const MoreButton = ({ onPress, style = {} }) => {
  return (
    <Feather
      style={{ color: "#2D264B", ...style }}
      name="more-vertical"
      size={22}
      onPress={onPress}
    />
  );
};

export default MoreButton;
