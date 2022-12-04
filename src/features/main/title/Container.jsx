import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const MainTitleContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        <Text style={styles.title}>Linkit</Text>
        <AntDesign name="search1" size={24} color="#2D264B" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 0,
    marginTop: 30,
    width: 375,
    height: 70,
  },
  contents: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 0,
    paddingRight: 18,
    paddingBottom: 18,
    paddingLeft: 18,

    width: 375,
    height: 41,

    flex: "none",
    order: 0,
    alignSelf: "stretch",
    flexGrow: 0,
  },
  title: {
    width: 291,
    height: 41,

    fontFamily: "System",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 34,
    lineHeight: 41,

    letterSpacing: "0.374",

    color: "#2D264B",

    flex: "none",
    order: 0,
    flexGrow: 1,
  },
});

export default MainTitleContainer;
