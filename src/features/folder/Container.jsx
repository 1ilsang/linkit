import { Keyboard, Pressable, StyleSheet, View } from "react-native";
import FolderContentContainer from "./contents/Container";

const FolderContainer = () => {
  return (
    <View style={styles.container}>
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <FolderContentContainer />
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

export default FolderContainer;
