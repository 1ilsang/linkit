import { View, StyleSheet, Pressable, Keyboard } from "react-native";

import { titleContainerStyle, titleContentStyle } from "./title.style";

const CommonTitleContainer = ({ children, onPress }) => {
  const handleTitleContainerPress = () => {
    Keyboard.dismiss();
    onPress?.();
  };

  return (
    <Pressable style={styles.container} onPress={handleTitleContainerPress}>
      <View style={styles.content}>{children}</View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: titleContainerStyle,
  content: titleContentStyle,
});

export default CommonTitleContainer;
