import { Pressable, StyleSheet, Text, View } from "react-native";
import Toggle from "../../../shared/icons/Toggle";

const ToggleBox = ({ title, list, style }) => {
  return (
    <View style={{ ...styles.toggleBox, ...style }}>
      <Text style={styles.boxTitle}>{title}</Text>
      {list.map(({ onPress, content, selected, description }) => (
        <View key={content}>
          <Pressable style={styles.toggleContainer} onPress={onPress}>
            <Text style={styles.boxText}>{content}</Text>
            <Toggle selected={selected} />
          </Pressable>
          <Text style={styles.boxDescription}>{description}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  toggleBox: {
    paddingLeft: 27,
    paddingRight: 27,
    backgroundColor: "#ffffff",
  },
  boxTitle: {
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 29,
    paddingBottom: 17,
  },
  boxText: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 23,
  },
  boxDescription: {
    width: "75%",
    fontWeight: "300",
    fontSize: 12,
    lineHeight: 17,
    color: "#A5A5A5",
    paddingBottom: 27,
  },
  toggleContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ToggleBox;
