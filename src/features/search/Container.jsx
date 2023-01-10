import { Keyboard, Pressable, StyleSheet, View } from "react-native";
import SearchContentContainer from "./contents/Container";

const SearchContainer = () => {
  return (
    <View style={styles.container}>
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <SearchContentContainer />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SearchContainer;
