import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const ContentBox = ({ title, description, iconType = "heart" }) => {
  const Icon = () =>
    iconType === "heart" ? (
      <AntDesign name="hearto" size={16} color="black" />
    ) : (
      <FontAwesome name="lightbulb-o" size={16} color="black" />
    );

  const backgroundColor = (() => {
    const selected = Math.floor((Math.random() * 10) % 7);
    switch (selected) {
      case 0:
        return "#FFD130";
      case 1:
        return "#4ED187";
      case 2:
        return "#FF8437";
      case 3:
        return "#7187FF";
      case 4:
        return "#FF97CA";
      case 5:
        return "#FF5C5D";
      case 6:
        return "#8CC6FF";
    }
    return "#FFD130";
  })();

  return (
    <View style={{ ...styles.container, backgroundColor }}>
      <View style={styles.top}>
        <Icon />
        <Feather name="more-vertical" size={24} color="black" />
      </View>
      <View style={styles.contents}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 10,
    paddingTop: 18,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 24,

    width: 160,
    height: 152,

    backgroundColor: "black",
    borderRadius: 16,
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
    gap: 76,

    width: 120,
    height: 24,

    flex: "none",
    order: 0,
    flexGrow: 0,
  },
  contents: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 0,
    gap: 6,

    width: 120,
    height: 76,

    flex: "none",
    order: 1,
    alignSelf: "stretch",
    flexGrow: 1,
  },
  title: {
    width: 120,
    height: 38,

    fontFamily: "System",
    fontStyle: "normal",
    fontWeight: "590",
    fontSize: 16,
    lineHeight: 19,

    color: "#FFFFFF",

    flex: "none",
    order: 0,
    alignSelf: "stretch",
    flexGrow: 0,
  },
  description: {
    width: 120,
    height: 14,

    fontFamily: "System",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 14,

    color: "#FFFFFF",

    flex: "none",
    order: 1,
    alignSelf: "stretch",
    flexGrow: 0,
  },
});

export default ContentBox;
