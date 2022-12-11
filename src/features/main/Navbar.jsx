import { StyleSheet, Text, View } from "react-native";
import { Foundation } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const navList = ["홈", "추가", "설정"];

const Item = ({ name }) => {
  return (
    <View style={styles.item}>
      {name === "홈" && <Foundation name="home" size={24} color="#2D264B" />}
      {name === "추가" && (
        <Ionicons name="add-circle-outline" size={24} color="#2D264B" />
      )}
      {name === "설정" && (
        <Ionicons name="settings-outline" size={24} color="#2D264B" />
      )}
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const Navbar = () => {
  return (
    <View style={styles.container}>
      {navList.map((name) => (
        <Item key={name} name={name} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignItems: "flex-start",
    padding: 0,

    position: "absolute",
    width: 375,
    height: 72,
    bottom: 0,

    backgroundColor: "#ffffff",

    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    shadowColor: "rgb(50, 50, 50)",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      height: -1,
      width: 0,
    },
  },
  item: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    paddingTop: 4,
    paddingRight: 4,
    paddingBottom: 4,
    paddingLeft: 4,

    width: 97,
    height: 72,
  },
  icon: {
    display: "flex",
    paddingTop: 10,
    paddingBottom: 7,
  },
  text: {
    display: "flex",
    width: 42,
    height: 18,

    fontWeight: "500",
    fontSize: 14,
    lineHeight: 18,

    textAlign: "center",
    letterSpacing: -0.01,

    color: "#2D264B",
  },
});

export default Navbar;
