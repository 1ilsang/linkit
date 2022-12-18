import { forwardRef } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { Modalize } from "react-native-modalize";
import { Portal } from "react-native-portalize";

import LinkButton from "./icons/LinkButton";

const BottomSheet = forwardRef(({ list }, ref) => {
  return (
    <Portal>
      <Modalize ref={ref} snapPoint={184} handlePosition="inside">
        <View style={styles.container}>
          {list.map(({ name, onPress }) => (
            <Pressable
              key={name}
              style={styles.content}
              onPress={() => {
                ref.current.close();
                onPress();
              }}
            >
              <LinkButton style={styles.icon} />
              <Text>{name}</Text>
            </Pressable>
          ))}
        </View>
      </Modalize>
    </Portal>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    paddingTop: 42,
    height: 214,
    borderRadius: 30,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 12,
    paddingRight: 24,
    paddingBottom: 24,
    paddingLeft: 24,
  },
  icon: {
    paddingRight: 20,
  },
});

export default BottomSheet;
