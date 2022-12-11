import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

const HeaderLeftButton = () => {
  const navigation = useNavigation();

  return (
    <Entypo
      name="chevron-thin-left"
      size={22}
      color="#2D264B"
      onPress={navigation.goBack}
    />
  );
};

export default HeaderLeftButton;
