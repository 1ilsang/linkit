import { View, Text, StyleSheet, Pressable } from "react-native";
import { onBoardingList } from "../constant";

const StartBtnArea = ({ handleStartPress, idx }) => {
  if (idx !== onBoardingList.length - 1) return null;

  return (
    <View style={styles.startButtonBox}>
      <Pressable style={styles.startButton} onPress={handleStartPress}>
        <Text style={styles.startText}>시작하기</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  startButtonBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "absolute",
    width: "100%",
    height: "90%",
  },
  startButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    width: "90%",
    height: 60,
    borderRadius: 24,
  },
  startText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default StartBtnArea;
