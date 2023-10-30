import { Pressable, StyleSheet, Text } from "react-native";
import { useAtom } from "jotai";
import { mainAtom } from "../../main/atoms";
import { itemStyle } from "./styles";
import IconFactory from "../../../shared/icons/IconFactory";

const Adder = () => {
  const [main, setMain] = useAtom(mainAtom);
  const handleAdderClick = () => {
    setMain((prev) => ({ ...prev, moreOpen: undefined, adderSheetOpen: true }));
    main.adderSheetRef?.current?.open();
  };

  return (
    <Pressable style={styles.item} onPress={handleAdderClick}>
      <IconFactory icon="PlusCircle" />
      <Text style={styles.text}>추가</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ...itemStyle,
});

export default Adder;
