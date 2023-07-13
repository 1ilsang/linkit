import { Dimensions } from "react-native";
import { useState } from "react";
import { useAtom } from "jotai";
import { appEnvAtom } from "../../../shared/atoms";
import { LOCAL_STORAGE_KEY, save } from "../../../shared/utils/localStorage";
import { lastIndex } from "../constant";

const useOnBoarding = () => {
  const [onBoardingNumber, setOnBoardingNumber] = useState(0);
  const [, setAppEnv] = useAtom(appEnvAtom);

  const handleContainerPress = (event) => {
    if (onBoardingNumber === lastIndex) return;
    const {
      touchHistory: { touchBank },
    } = event;
    const touch = [...touchBank].filter((item) => item)[0];
    const { width } = Dimensions.get("window");

    const nextIndex = touch.startPageX < width / 2 ? -1 : 1;
    const isFirstPage = onBoardingNumber === 0 && nextIndex < 0;
    const isLastPage = onBoardingNumber === lastIndex - 1 && nextIndex == 1;
    if (isFirstPage || isLastPage) return;

    setOnBoardingNumber(onBoardingNumber + nextIndex);
  };

  const handleStartPress = () => {
    setAppEnv((prev) => {
      const next = { ...prev, onBoarding: true };
      save(LOCAL_STORAGE_KEY.appEnv, next);
      return next;
    });
  };

  return {
    onBoardingNumber,
    handleContainerPress,
    handleStartPress,
  };
};

export default useOnBoarding;
