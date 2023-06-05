import { StyleSheet, Text, TextInput, View } from "react-native";
import InputLabel from "./Label";

const FormInputBox = ({
  placeholder,
  label,
  value,
  onChangeText,
  onInputPress,
  error = "",
  maxLength = 100,
  editable = true,
  required = false,
}) => {
  return (
    <View style={styles.container}>
      <InputLabel label={label} required={required} />
      <TextInput
        maxLength={maxLength}
        onPressIn={onInputPress}
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        editable={editable}
      />
      {error.length > 0 && <Text style={styles.errorLabel}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingBottom: 24,
  },
  errorLabel: {
    height: 17,
    fontWeight: "300",
    fontSize: 12,
    lineHeight: 17,
    letterSpacing: -0.5,
    color: "#E65E2A",
  },
  input: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: 14,
    paddingRight: 0,
    paddingBottom: 14,
    paddingLeft: 0,

    width: "100%",
    height: 45,

    backgroundColor: "#FFFFFF",
    borderBottomColor: "#D0D0D0",
    borderBottomWidth: 1,
  },
});

export default FormInputBox;
