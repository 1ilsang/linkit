import { View, StyleSheet } from "react-native";

import { titleContainerStyle, titleContentStyle } from "./title.style";

const CommonTitleContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: titleContainerStyle,
  content: titleContentStyle,
});

export default CommonTitleContainer;
