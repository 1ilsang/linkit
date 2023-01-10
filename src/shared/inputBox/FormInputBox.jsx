import { StyleSheet, Text, TextInput, View } from "react-native";

const FormInputBox = ({
  placeholder,
  label,
  value,
  onChange,
  required = false,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
        {required && <Text style={styles.required}>*</Text>}
      </View>
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
  container: {
    width: "100%",
    paddingBottom: 24,
  },
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
  input: {
    boxSizing: "border-box",
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

    background: "#FFFFFF",
    borderBottomColor: "#D0D0D0",
    borderBottomWidth: "1",
  },
});

export default FormInputBox;
