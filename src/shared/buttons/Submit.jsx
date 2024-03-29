import { Pressable, StyleSheet, Text } from "react-native";

const SubmitButton = ({ label, onPress, disabled }) => {
  return (
    <Pressable
      disabled={disabled}
      style={{
        ...styles.container,
        backgroundColor: disabled ? "#CFCFCF" : "#241E17",
      }}
      onPress={onPress}
    >
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,

    width: "100%",
    height: 60,

    backgroundColor: "#241E17",
    borderRadius: 24,
  },
  text: {
    color: "#FFFFFF",
    height: 19,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0.5,
  },
});

export default SubmitButton;
