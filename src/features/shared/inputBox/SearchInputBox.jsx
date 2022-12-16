import { StyleSheet, TextInput, View } from "react-native";

const SearchInputBox = ({ value, onChange, placeholder }) => {
  return (
    <View>
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
  input: {
    paddingLeft: 42,
    height: 48,
    color: "#2D264B",
    placeholderTextColor: "#B0B0B0",
    backgroundColor: "#F5F5F5",
    borderRadius: 16,
  },
});

export default SearchInputBox;
