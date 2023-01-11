import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useAtom } from "jotai";
import { mainAtom } from "../atoms";

const Settings = () => {
  const navigation = useNavigation();

  const [, setMain] = useAtom(mainAtom);

  const handleSettingsClick = () => {
    setMain((prev) => ({ ...prev, moreOpen: undefined }));
    navigation.navigate("Settings");
  };

  return (
    <Pressable style={styles.item} onPress={handleSettingsClick}>
      <Ionicons name="settings-outline" size={24} color="#2D264B" />
      <Text style={styles.text}>설정</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    paddingTop: 4,
    paddingRight: 4,
    paddingBottom: 4,
    paddingLeft: 4,

    width: 97,
    height: 72,
  },
  text: {
    display: "flex",
    width: 42,
    height: 18,

    fontWeight: "500",
    fontSize: 14,
    lineHeight: 18,

    textAlign: "center",
    letterSpacing: -0.01,

    color: "#2D264B",
  },
});

export default Settings;
