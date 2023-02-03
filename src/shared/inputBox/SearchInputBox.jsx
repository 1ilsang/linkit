import { StyleSheet, TextInput, View, Pressable } from "react-native";
import IconFactory from "../icons/IconFactory";

const SearchInputBox = ({
  value,
  onChangeText,
  onSubmitEditing,
  onClearPress,
  placeholder,
  onPressIn,
}) => {
  const MagnifyingGlass = IconFactory["MagnifyingGlass"];
  const XCircle = IconFactory["XCircle"];

  const handleClearPress = () => {
    onChangeText("");
    onClearPress?.();
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.glass}>{MagnifyingGlass}</View>
        <TextInput
          onPressIn={onPressIn}
          style={styles.input}
          placeholder={placeholder}
          onSubmitEditing={onSubmitEditing}
          onChangeText={onChangeText}
          value={value}
        />
        <Pressable
          style={{ ...styles.xCircle, opacity: value.length > 0 ? 1 : 0 }}
          onPress={handleClearPress}
        >
          {XCircle}
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 18,
    paddingRight: 18,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F5F5F5",
    borderRadius: 16,
    height: 48,
  },
  glass: {
    paddingTop: 14,
    paddingLeft: 17,
  },
  input: {
    color: "#2D264B",
    width: 240,
    placeholderTextColor: "#B0B0B0",
  },
  xCircle: {
    paddingTop: 13,
    paddingRight: 12,
  },
});

export default SearchInputBox;
