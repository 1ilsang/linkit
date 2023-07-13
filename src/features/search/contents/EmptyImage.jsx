import { StyleSheet, View } from "react-native";
import EmptySearchImage from "../../../../assets/emptySearch.svg";

const EmptyImage = () => {
  return (
    <View style={styles.container}>
      <EmptySearchImage width={114} height={184} />
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
});

export default EmptyImage;
