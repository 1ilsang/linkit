import { StyleSheet, View } from "react-native";
import EmptyFolderImage from "../../assets/emptyFolder.svg";

const EmptyImage = () => {
  return (
    <View style={styles.container}>
      <EmptyFolderImage width={123} height={260} />
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
