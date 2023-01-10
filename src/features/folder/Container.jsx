import { Keyboard, Pressable, StyleSheet, View } from "react-native";
import FolderContentContainer from "./contents/Container";

const FolderContainer = (props) => {
  return (
    <View style={styles.container}>
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <FolderContentContainer {...props} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FolderContainer;
