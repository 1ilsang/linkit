import { StyleSheet, TextInput, View, Pressable } from "react-native";
import IconFactory from "../icons/IconFactory";
import { useEffect, useRef } from "react";

const SearchInputBox = ({
  value,
  onChangeText,
  onSubmitEditing,
  onClearPress,
  placeholder,
  onPressIn,
  delayFocus = false,
  autoFocus = false,
}) => {
  const textInputRef = useRef(null);

  const handleClearPress = () => {
    onChangeText("");
    onClearPress?.();
  };

  useEffect(() => {
    if (!delayFocus || !textInputRef.current) return;
    setTimeout(() => {
      textInputRef.current.focus();
    }, 550);
  }, [delayFocus]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.glass}>
          <IconFactory icon="MagnifyingGlass" color="#B0B0B0" size="18" />
        </View>
        <TextInput
          ref={textInputRef}
          onPressIn={onPressIn}
          style={styles.input}
          placeholder={placeholder}
          onSubmitEditing={onSubmitEditing}
          onChangeText={onChangeText}
          value={value}
          placeholderTextColor="#B0B0B0"
          autoFocus={autoFocus}
        />
        <Pressable
          style={{ ...styles.xCircle, opacity: value.length > 0 ? 1 : 0 }}
          onPress={handleClearPress}
          hitSlop={20}
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
    alignItems: "center",

    backgroundColor: "#F5F5F5",
    borderRadius: 16,
    height: 48,
  },
  glass: {
    paddingLeft: 17,
  },
  input: {
    color: "#2D264B",
    width: 260,
  },
  xCircle: {
    paddingRight: 12,
  },
});

export default SearchInputBox;
