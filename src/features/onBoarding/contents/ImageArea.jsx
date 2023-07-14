import { View, StyleSheet } from "react-native";
import { onBoardingList } from "../constant";

const ImageArea = ({ onBoardingNumber }) => {
  return (
    <View style={styles.onBoardingImageBox}>
      {onBoardingList[onBoardingNumber]}
    </View>
  );
};

const styles = StyleSheet.create({
  onBoardingImageBox: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
});

export default ImageArea;
