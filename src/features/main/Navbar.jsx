import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const navList = ["home", "adder", "setting"];

const Item = ({ name }) => {
  return (
    <View style={styles.item}>
      <AntDesign name="search1" size={24} color="#2D264B" />
      <Text>{name}2</Text>
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
    alignItems: "flex-start",
    padding: 0,

    position: "absolute",
    width: 375,
    height: 106,
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
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 18,
    gap: 24,
    width: 97,
    height: 72,
  },
});

export default Navbar;
