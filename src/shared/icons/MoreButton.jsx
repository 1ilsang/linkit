import { Feather } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import IconFactory from "./IconFactory";

const MoreButton = ({
  onPress,
  defaultFolder,
  open,
  list,
  style = {},
  size = 22,
}) => {
  const getBottomBorderStyle = (index) => {
    if (index === list.length - 1) return {};
    return {
      borderBottomColor: "#F4F4F4",
      borderBottomWidth: StyleSheet.hairlineWidth,
    };
  };

  return (
    <Pressable style={styles.container} onPress={onPress} hitSlop={10}>
      <Feather
        style={{ color: "#ffffff", ...style }}
        name="more-vertical"
        size={size}
      />
      {open && (
        <View style={styles.modalContainer}>
          {list.map(({ name, onPress, icon }, index) => {
            if (defaultFolder && icon === "Trash") {
              return null;
            }

            return (
              <Pressable
                key={name}
                style={{
                  ...styles.modalItem,
                  ...getBottomBorderStyle(index),
                }}
                onPress={onPress}
              >
                <Text>{name}</Text>
                <View style={styles.icon}>
                  <IconFactory icon={icon} />
                </View>
              </Pressable>
            );
          })}
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",

    position: "absolute",
    width: 125,
    top: 22,
    left: -100,
    borderRadius: 8,
    borderColor: "#F4F4F4",
    backgroundColor: "#ffffff",

    shadowColor: "rgb(50, 50, 50)",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      height: 6,
      width: 0,
    },
  },
  modalItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    width: "100%",
    paddingTop: 14,
    paddingLeft: 12,
    paddingBottom: 14,
  },
  icon: {
    paddingRight: 13,
  },
});

export default MoreButton;
