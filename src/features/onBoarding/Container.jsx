import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Button,
  Dimensions,
} from "react-native";
import { useState } from "react";

import OnBoarding1 from "../../../assets/onBoarding1.svg";
import OnBoarding2 from "../../../assets/onBoarding2.svg";
import OnBoarding3 from "../../../assets/onBoarding3.svg";
import OnBoarding4 from "../../../assets/onBoarding4.svg";
import OnBoardingProgress1 from "../../../assets/onBoardingProgress1.svg";
import OnBoardingProgress2 from "../../../assets/onBoardingProgress2.svg";
import OnBoardingProgress3 from "../../../assets/onBoardingProgress3.svg";
import OnBoardingProgress4 from "../../../assets/onBoardingProgress4.svg";
import { useAtom } from "jotai";
import { appEnvAtom } from "../../shared/atoms";
import { LOCAL_STORAGE_KEY, save } from "../../shared/utils/localStorage";

const OnBoardingContainer = () => {
  const [onBoardingNumber, setOnBoardingNumber] = useState(0);
  const [, setAppEnv] = useAtom(appEnvAtom);

  const lastIndex = 4;

  const onBoardingList = [
    <OnBoarding1 />,
    <OnBoarding2 />,
    <OnBoarding3 height={240} />,
    <OnBoarding4 />,
  ];
  const onBoardingTitleText = [
    "폴더별로 관리",
    "쉽고 빠르게 저장",
    "편리한 검색",
    "복사 및 공유",
  ];
  const onBoardingTextTop = [
    "링크를 유형별로 분류하여 ",
    "복사한 URL만 붙여 넣으면 ",
    "저장한 이름과 URL을 검색해서 ",
    "저장한 링크를 복사하거나, ",
  ];
  const onBoardingTextBottom = [
    "깔끔하게 관리할 수 있어요!",
    "링크 이름과 썸네일을 자동으로 추출해 줘요.",
    "원하는 링크를 빠르게 찾을 수 있어요.",
    "다른 앱으로 공유할 수 있어요.",
  ];
  const onBoardingProgressList = [
    <OnBoardingProgress1 />,
    <OnBoardingProgress2 />,
    <OnBoardingProgress3 />,
    <OnBoardingProgress4 />,
  ];

  const handleContainerPress = (event) => {
    if (onBoardingNumber === lastIndex - 1) return;
    const {
      touchHistory: { touchBank },
    } = event;
    const touch = [...touchBank].filter((item) => item)[0];
    const { width } = Dimensions.get("window");

    const nextIndex = touch.startPageX < width / 2 ? -1 : 1;
    const isFirstPage = onBoardingNumber === 0 && nextIndex < 0;

    if (isFirstPage) return;

    setOnBoardingNumber(onBoardingNumber + nextIndex);
  };

  const handleStartPress = () => {
    setAppEnv((prev) => {
      const next = { ...prev, onBoarding: true };
      save(LOCAL_STORAGE_KEY.appEnv, next);
      return next;
    });
  };

  return (
    <Pressable style={styles.container} onPress={handleContainerPress}>
      <View style={styles.onBoardingImageBox}>
        {onBoardingList[onBoardingNumber]}
      </View>
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
      <View style={styles.onBoardingProgressBox}>
        {onBoardingProgressList[onBoardingNumber]}
      </View>
      <View style={styles.startButtonBox}>
        {onBoardingNumber >= lastIndex - 1 && (
          <Pressable style={styles.startButton} onPress={handleStartPress}>
            <Text style={styles.startText}>시작하기</Text>
          </Pressable>
        )}
      </View>
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
  onBoardingImageBox: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
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
    fontSize: 14,
  },
  onBoardingProgressBox: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
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

export default OnBoardingContainer;
