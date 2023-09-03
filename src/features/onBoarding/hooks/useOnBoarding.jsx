import { useState } from "react";
import { useAtom } from "jotai";
import { appEnvAtom } from "../../../shared/atoms";
import { LOCAL_STORAGE_KEY, save } from "../../../shared/utils/localStorage";

const useOnBoarding = () => {
  const [onBoardingNumber, setOnBoardingNumber] = useState(0);
  const [, setAppEnv] = useAtom(appEnvAtom);

  const handleIndexChanged = (index) => {
    setOnBoardingNumber(index);
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
    handleIndexChanged,
    handleStartPress,
  };
};

export default useOnBoarding;
