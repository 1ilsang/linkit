import { Keyboard, Pressable, StyleSheet, View } from "react-native";

import SettingsContentContainer from "./contents/Container";

const SettingsContainer = () => {
  return (
    <View style={styles.container}>
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <SettingsContentContainer />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 18,
    paddingRight: 18,
    backgroundColor: "#ffffff",
  },
});

export default SettingsContainer;
