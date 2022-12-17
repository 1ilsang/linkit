import { Image, StyleSheet, View } from "react-native";

const EmptyImage = () => {
  return (
    <View style={styles.image}>
      <Image source={require("../../../../assets/pana.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    paddingTop: 104,
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
});

export default EmptyImage;
