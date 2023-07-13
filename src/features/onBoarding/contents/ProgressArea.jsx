import { View, StyleSheet } from "react-native";
import { onBoardingProgressList } from "../constant";

const ProgressArea = ({ onBoardingNumber }) => {
  return (
    <View style={styles.onBoardingProgressBox}>
      {onBoardingProgressList[onBoardingNumber]}
    </View>
  );
};

const styles = StyleSheet.create({
  onBoardingProgressBox: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
});

export default ProgressArea;
