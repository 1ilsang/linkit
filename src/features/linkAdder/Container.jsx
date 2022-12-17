import { Keyboard, Pressable, StyleSheet, View } from "react-native";

import FolderAdderContentContainer from "./contents/Container";

const LinkAdderContainer = () => {
  return (
    <View style={styles.container}>
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <FolderAdderContentContainer />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 18,
    paddingRight: 18,
  },
});

export default LinkAdderContainer;
