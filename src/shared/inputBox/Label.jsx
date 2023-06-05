import { StyleSheet, Text, View } from "react-native";

const InputLabel = ({ label, required }) => {
  return (
    <View style={styles.labelContainer}>
      <Text style={styles.label}>{label}</Text>
      {required && <Text style={styles.required}>*</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    display: "flex",
    flexDirection: "row",
  },
  label: {
    height: 17,
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: -0.5,
    color: "#000000",
  },
  required: {
    color: "#E65E2A",
  },
});

export default InputLabel;
