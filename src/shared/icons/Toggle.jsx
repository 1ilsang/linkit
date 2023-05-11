import { StyleSheet, View } from "react-native";

const Toggle = ({ selected }) => {
  const selectedColor = selected ? "#1DB191" : "#C1C7CD";

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: selectedColor,
      }}
    >
      <View
        style={{
          ...styles.circle,
          left: selected ? "43.75%" : "0%",
          borderColor: selectedColor,
        }}
      />
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
    backgroundColor: "#FFFFFF",
    borderColor: "#1DB191",
    borderWidth: 2,
    borderRadius: 40,
  },
});

export default Toggle;
