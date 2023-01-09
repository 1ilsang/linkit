import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import IconFactory from "../../shared/icons/IconFactory";

const colorSets = [
  "#FFD130",
  "#4ED187",
  "#FF8437",
  "#7187FF",
  "#FF97CA",
  "#FF5C5D",
  "#8CC6FF",
];

const ColorItem = ({ color, checked, onPress }) => {
  const checkIcon = IconFactory["Check"];
  return (
    <Pressable
      style={{ ...styles.colorItem, backgroundColor: color }}
      onPress={() => onPress(color)}
    >
      {checked && <View style={styles.checked}>{checkIcon}</View>}
    </Pressable>
  );
};

const ColorArea = () => {
  const [checkedColor, setCheckedColor] = useState(colorSets[0]);

  const handleColorPress = (color) => {
    setCheckedColor(color);
  };

  return (
    <View>
      <Text style={styles.label}>컬러</Text>
      <View style={styles.colorContainer}>
        {colorSets.map((color) => (
          <ColorItem
            key={color}
            color={color}
            checked={checkedColor === color}
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
    fontWeight: "400",
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
