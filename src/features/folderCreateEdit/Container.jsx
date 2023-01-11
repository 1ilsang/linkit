import {
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

import FolderCreateEditContentContainer from "./contents/Container";

const FolderCreateEditContainer = (props) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
          <FolderCreateEditContentContainer {...props} />
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

export default FolderCreateEditContainer;
