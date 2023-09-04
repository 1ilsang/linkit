import { useAtom } from "jotai";
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { StyleSheet, Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  runOnJS,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { toastAtom } from "../atoms";
import { useResetAtom } from "jotai/utils";

const Toast = forwardRef(({ message, coloredMessage }, ref) => {
  const navigation = useNavigation();
  const [toast] = useAtom(toastAtom);
  const resetToast = useResetAtom(toastAtom);

  const [toastMessage, setToastMessage] = useState("");
  const toastOpacity = useSharedValue(0);
  const isShowed = useRef(false);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: toastOpacity.value,
    };
  }, []);

  const onPressNavigate = () => {
    const info = toast.navigateInfo;
    if (!info) return;
    navigation.navigate(info.path, {
      id: info.id,
      title: info.title,
    });
  };

  useEffect(() => {
    if (!toast.message) return;
    ref?.current?.show(toast.message);
  }, [toast]);

  useImperativeHandle(ref, () => ({ show }));

  const turnOnIsShow = useCallback(() => {
    isShowed.current = false;
    resetToast();
  }, []);

  const show = useCallback(
    (toastMessage) => {
      setToastMessage(toastMessage);
      isShowed.current = true;
      toastOpacity.value = withSequence(
        withTiming(0.94, { duration: 500 }),
        withTiming(0.94, { duration: 800 }),
        withTiming(0, { duration: 500 }, () => {
          runOnJS(turnOnIsShow)();
        })
      );
    },
    [toastOpacity, turnOnIsShow]
  );
  if (!message) {
    return <></>;
  }

  return (
    <Animated.View
      pointerEvents={toast.navigateInfo ? "auto" : "box-none"}
      onTouchEnd={onPressNavigate}
      style={[styles.container, animatedStyle]}
    >
      <Text style={styles.toastMessage}>{toastMessage}</Text>
      <Text style={styles.coloredText}>{coloredMessage}</Text>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 40,
    bottom: "10%",
    marginLeft: "5%",
    paddingLeft: "5%",
    paddingRight: "5%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "gray",
    borderRadius: "6px",
  },
  text: {
    color: "white",
    fontWeight: "500",
    fontSize: 17,
    lineHeight: 22,
  },
  coloredText: {
    color: "lightgreen",
    fontWeight: "500",
    fontSize: 17,
    lineHeight: 22,
  },
});

export default Toast;
