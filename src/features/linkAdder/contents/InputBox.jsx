import { StyleSheet, TextInput, View } from "react-native";

const InputBox = ({ value, onChange, placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {
    paddingLeft: 42,
    height: 48,
    color: "#B0B0B0",
    backgroundColor: "#F5F5F5",
    borderRadius: 16,
  },
});

export default InputBox;
