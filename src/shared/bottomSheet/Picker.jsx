import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Portal } from "react-native-portalize";

const PickerBottomSheet = ({ list, open, onDoneClick, onCancelClick }) => {
  if (!open) return null;

  const [selectedValue, setSelectedValue] = useState(list[0].value);

  const handleDonePress = () => {
    onDoneClick(selectedValue);
  };
  const handleCancelPress = () => onCancelClick();
  const handleValueChange = (itemValue, itemIndex) => {
    setSelectedValue(itemValue);
  };

  return (
    <Portal>
      <View style={styles.container}>
        <Pressable style={styles.dimmed} onPress={handleCancelPress} />
        <View style={styles.pickerBarArea}>
          <Pressable style={styles.textContainer} onPress={handleDonePress}>
            <Text style={styles.text}>Done</Text>
          </Pressable>
        </View>
        <Picker
          style={styles.picker}
          itemStyle={styles.itemStyle}
          selectedValue={selectedValue}
          onValueChange={handleValueChange}
        >
          {list.map((item, index) => (
            <Picker.Item
              key={item.label + `${index}`}
              label={item.label}
              value={item.value}
            />
          ))}
        </Picker>
      </View>
    </Portal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    position: "absolute",
  },
  dimmed: {
    height: "70%",
    backgroundColor: "#00000066",
  },
  pickerBarArea: { display: "flex", height: 44, alignItems: "flex-end" },
  textContainer: {
    paddingRight: 11,
    paddingTop: 11,
  },
  text: {
    textAlign: "right",
    color: "#007AFF",
    fontWeight: "500",
    fontSize: 17,
    lineHeight: 22,
  },
  picker: {
    height: "40%",
    backgroundColor: "#D1D5DA",
  },
});

export default PickerBottomSheet;
