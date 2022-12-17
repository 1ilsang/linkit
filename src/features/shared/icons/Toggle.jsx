import { StyleSheet, View } from "react-native";

const Toggle = ({ selected }) => {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.circle, left: selected ? "0%" : "43.75%" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 54,
    height: 30,
    backgroundColor: "#1DB191",
    borderRadius: 40,
  },
  circle: {
    width: 30.38,
    height: 30,
    boxSizing: "border-box",
    backgroundColor: "#FFFFFF",
    borderColor: "#1DB191",
    borderWidth: 2,
    borderRadius: 40,
  },
});

export default Toggle;
