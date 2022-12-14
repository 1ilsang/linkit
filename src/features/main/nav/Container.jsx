import { StyleSheet, View } from "react-native";
import Home from "./Home";
import Adder from "./Adder";
import Settings from "./Settings";

const navList = ["홈", "추가", "설정"];

const Item = ({ name, scrollViewRef, adderSheetRef }) => {
  return (
    <View style={styles.item}>
      {name === "홈" && <Home scrollViewRef={scrollViewRef} />}
      {name === "추가" && <Adder adderSheetRef={adderSheetRef} />}
      {name === "설정" && <Settings />}
    </View>
  );
};

const NavbarContainer = ({ scrollViewRef, adderSheetRef }) => {
  return (
    <View style={styles.container}>
      {navList.map((name) => (
        <Item
          key={name}
          name={name}
          adderSheetRef={adderSheetRef}
          scrollViewRef={scrollViewRef}
        />
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
    padding: 0,

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
