import { StyleSheet, View } from "react-native";
import Swiper from "react-native-swiper";

import { onBoardingTitleText } from "./constant";
import useOnBoarding from "./hooks/useOnBoarding";
import ImageArea from "./contents/ImageArea";
import TextArea from "./contents/TextArea";
import StartBtnArea from "./contents/StartBtnArea";

const OnBoardingContainer = () => {
  const { handleStartPress } = useOnBoarding();
  const marginBottom = "23%";

  return (
    <Swiper
      style={styles.wrapper}
      loop={false}
      dotColor="#CFCFCF"
      dotStyle={{ marginBottom }}
      activeDotColor={"#CFCFCF"}
      activeDotStyle={{ width: "5%", marginBottom }}
    >
      {onBoardingTitleText.map((text, idx) => {
        return (
          <View style={styles.container} key={text}>
            <ImageArea onBoardingNumber={idx} />
            <TextArea onBoardingNumber={idx} />
            <StartBtnArea handleStartPress={handleStartPress} idx={idx} />
          </View>
        );
      })}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
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
