import { StyleSheet, TextInput, View } from "react-native";

const SearchInputBox = ({ value, onChange, onSubmitEditing, placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onSubmitEditing={onSubmitEditing}
        onChangeText={onChange}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingLeft: 18, paddingRight: 18 },
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
