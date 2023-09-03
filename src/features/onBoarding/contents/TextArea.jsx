import { Text, View, StyleSheet } from "react-native";
import {
  onBoardingTitleText,
  onBoardingTextTop,
  onBoardingTextBottom,
} from "../constant";

const TextArea = ({ onBoardingNumber }) => {
  return (
    <View style={styles.onBoardingTextBox}>
      <Text style={styles.titleText}>
        {onBoardingTitleText[onBoardingNumber]}
      </Text>
      <Text style={styles.normalText}>
        {onBoardingTextTop[onBoardingNumber]}
      </Text>
      <Text style={styles.normalText}>
        {onBoardingTextBottom[onBoardingNumber]}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  onBoardingTextBox: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
  titleText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
  },
  normalText: {
    textAlign: "center",
    color: "#727272",
    fontSize: 14,
    lineHeight: 20.27,
    fontWeight: "400",
  },
});

export default TextArea;
