import { View, Text, StyleSheet, Pressable } from "react-native";

const StartBtnArea = ({ handleStartPress }) => {
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
    height: "94%",
  },
  startButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    width: "90%",
    height: 50,
    borderRadius: 20,
  },
  startText: {
    color: "white",
    fontSize: 14,
  },
});

export default StartBtnArea;
