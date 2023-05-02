import { useAtom } from "jotai";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colorSets } from "../../../shared/constants/colors";
import { createEditAtom } from "../atoms";
import { Check } from "phosphor-react-native";

const ColorItem = ({ color, checked, onPress }) => {
  return (
    <Pressable
      style={{ ...styles.colorItem, backgroundColor: color }}
      onPress={() => onPress(color)}
    >
      {checked && (
        <View style={styles.checked}>
          <Check />
        </View>
      )}
    </Pressable>
  );
};

const ColorArea = () => {
  const [createEdit, setCreateEdit] = useAtom(createEditAtom);

  const handleColorPress = (color) => {
    setCreateEdit((prev) => ({ ...prev, color }));
  };

  return (
    <View>
      <Text style={styles.label}>컬러</Text>
      <View style={styles.colorContainer}>
        {colorSets.map((color) => (
          <ColorItem
            key={color}
            color={color}
            checked={createEdit.color === color}
            onPress={handleColorPress}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    height: 17,
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: -0.5,
    color: "#000000",
  },
  colorContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingTop: 10,
    paddingRight: 0,
    paddingBottom: 10,
    paddingLeft: 0,
    height: 66,
  },
  colorItem: {
    borderRadius: 30,
    paddingRight: 18,
    width: 30,
    height: 30,
  },
  checked: {
    position: "absolute",
    width: 24,
    height: 24,
    left: 3,
    top: 4,
  },
});

export default ColorArea;
