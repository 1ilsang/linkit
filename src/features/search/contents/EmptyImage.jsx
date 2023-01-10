import { Image, StyleSheet, View } from "react-native";

const EmptyImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={require("../../../../assets/pana.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 104,
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  image: {
    width: 114,
    height: 184,
    resizeMode: "contain",
  },
});

export default EmptyImage;
