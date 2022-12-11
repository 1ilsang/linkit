import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import MoreButton from "../../shared/icons/MoreButton";

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
        <MoreButton size={16} onPress={() => {}} />
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
    marginBottom: 20,
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

    width: 120,
    height: 24,
  },
  contents: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",

    width: 120,
    height: 76,
  },
  title: {
    width: 120,
    height: 38,

    fontWeight: "590",
    fontSize: 16,
    lineHeight: 19,

    color: "#FFFFFF",
  },
  description: {
    width: 120,
    height: 14,

    fontWeight: "400",
    fontSize: 12,
    lineHeight: 14,

    color: "#FFFFFF",
  },
});

export default ContentBox;
