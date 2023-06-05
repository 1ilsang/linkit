import { Pressable, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAtom } from "jotai";
import { mainAtom } from "../../main/atoms";
import IconFactory from "../../../shared/icons/IconFactory";
import { itemStyle } from "./styles";

const Settings = ({ selectedNav, onClick }) => {
  const navigation = useNavigation();

  const [, setMain] = useAtom(mainAtom);

  const handleSettingsClick = () => {
    onClick("설정");
    setMain((prev) => ({ ...prev, moreOpen: undefined }));
    navigation.navigate("Settings");
  };

  return (
    <Pressable style={styles.item} onPress={handleSettingsClick}>
      <IconFactory
        icon="Setting"
        weight={selectedNav === "설정" ? "fill" : undefined}
      />
      <Text style={styles.text}>설정</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ...itemStyle,
});

export default Settings;
