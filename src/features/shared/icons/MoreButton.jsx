import { Feather } from "@expo/vector-icons";

const MoreButton = ({ onPress, style = {}, size = 22 }) => {
  return (
    <Feather
      style={{ color: "#2D264B", ...style }}
      name="more-vertical"
      size={size}
      onPress={onPress}
    />
  );
};

export default MoreButton;
