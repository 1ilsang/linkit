import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const HeaderLeftButton = () => {
  const navigation = useNavigation();

  return (
    <AntDesign
      name="left"
      size={24}
      color="#2D264B"
      onPress={navigation.goBack}
    />
  );
};

export default HeaderLeftButton;
