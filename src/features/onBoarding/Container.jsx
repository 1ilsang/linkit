import { StyleSheet, Pressable } from "react-native";
import { lastIndex } from "./constant";
import useOnBoarding from "./hooks/useOnBoarding";
import ImageArea from "./contents/ImageArea";
import TextArea from "./contents/TextArea";
import ProgressArea from "./contents/ProgressArea";
import StartBtnArea from "./contents/StartBtnArea";

const OnBoardingContainer = () => {
  const { onBoardingNumber, handleContainerPress, handleStartPress } =
    useOnBoarding();

  return (
    <Pressable style={styles.container} onPress={handleContainerPress}>
      <ImageArea onBoardingNumber={onBoardingNumber} />
      <TextArea onBoardingNumber={onBoardingNumber} />
      <ProgressArea onBoardingNumber={onBoardingNumber} />
      {onBoardingNumber >= lastIndex - 1 && (
        <StartBtnArea handleStartPress={handleStartPress} />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    position: "absolute",
    display: "flex",
    zIndex: 10000,
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    gap: 50,
  },
});

export default OnBoardingContainer;
