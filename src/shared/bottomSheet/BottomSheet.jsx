import { forwardRef } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { Modalize } from "react-native-modalize";
import { Portal } from "react-native-portalize";
import IconFactory from "../icons/IconFactory";

const MIN_BOTTOM_HEIGHT = 30;
const DEFAULT_ITEM_HEIGHT = 80;

const BottomSheet = forwardRef(({ list }, ref) => {
  const modalHeight = list.length * DEFAULT_ITEM_HEIGHT + MIN_BOTTOM_HEIGHT;

  return (
    <Portal>
      <Modalize ref={ref} handlePosition="inside" modalHeight={modalHeight}>
        <View style={styles.container}>
          {list.map(({ name, onPress, icon }) => {
            const Icon = IconFactory[icon];
            return (
              <Pressable
                key={name}
                style={styles.content}
                onPress={() => {
                  ref.current.close();
                  onPress();
                }}
              >
                <View style={styles.icon}>{Icon}</View>
                <Text>{name}</Text>
              </Pressable>
            );
          })}
        </View>
      </Modalize>
    </Portal>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    paddingTop: 42,
    height: "100%",
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
