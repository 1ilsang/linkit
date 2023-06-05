import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAtom } from "jotai";
import { mainAtom } from "../../main/atoms";
import { itemStyle } from "./styles";

const Adder = () => {
  const [main, setMain] = useAtom(mainAtom);
  const handleAdderClick = () => {
    setMain((prev) => ({ ...prev, moreOpen: undefined, adderSheetOpen: true }));
    main.adderSheetRef?.current?.open();
  };

  return (
    <Pressable style={styles.item} onPress={handleAdderClick}>
      <Ionicons name="add-circle-outline" size={24} color="#2D264B" />
      <Text style={styles.text}>추가</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ...itemStyle,
});

export default Adder;
