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
  const handleClearPress = () => {
    onChangeText("");
    onClearPress?.();
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.glass}>
          <IconFactory icon="MagnifyingGlass" color="#A5A5A5" />
        </View>
        <TextInput
          onPressIn={onPressIn}
          style={styles.input}
          placeholder={placeholder}
          onSubmitEditing={onSubmitEditing}
          onChangeText={onChangeText}
          value={value}
          placeholderTextColor="#B0B0B0"
        />
        <Pressable
          style={{ ...styles.xCircle, opacity: value.length > 0 ? 1 : 0 }}
          onPress={handleClearPress}
        >
          <IconFactory icon="XCircle" color="#A5A5A5" weight="fill" />
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
  },
  xCircle: {
    paddingTop: 13,
    paddingRight: 12,
  },
});

export default SearchInputBox;
