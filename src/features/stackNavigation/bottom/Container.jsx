import { StyleSheet, View } from "react-native";
import Home from "./Home";
import Adder from "./Adder";
import Settings from "./Settings";
import { useState } from "react";

const navList = ["홈", "추가", "설정"];

const Item = (props) => {
  const { name } = props;
  return (
    <View style={styles.item}>
      {name === "홈" && <Home {...props} />}
      {name === "추가" && <Adder {...props} />}
      {name === "설정" && <Settings {...props} />}
    </View>
  );
};

const NavbarContainer = () => {
  const [selectedNav, setSelectedNav] = useState(navList[0]);

  return (
    <View style={styles.container}>
      {navList.map((name) => (
        <Item
          key={name}
          name={name}
          selectedNav={selectedNav}
          onClick={setSelectedNav}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingLeft: 18,
    paddingRight: 18,

    position: "absolute",
    width: "100%",
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
});

export default NavbarContainer;
