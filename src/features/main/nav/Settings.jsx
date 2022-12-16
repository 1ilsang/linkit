import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Settings = () => {
  const navigation = useNavigation();

  const handleSettingsClick = () => navigation.navigate("Settings");

  return (
    <Pressable onPress={handleSettingsClick}>
      <Ionicons name="settings-outline" size={24} color="#2D264B" />
    </Pressable>
  );
};

export default Settings;
