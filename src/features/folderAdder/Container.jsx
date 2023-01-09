import {
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

import FolderAdderContentContainer from "./contents/Container";

const FolderAdderContainer = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
          <FolderAdderContentContainer />
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 18,
    paddingRight: 18,
  },
});

export default FolderAdderContainer;
