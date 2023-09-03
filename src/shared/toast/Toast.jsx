import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  runOnJS,
} from "react-native-reanimated";

const Toast = forwardRef(({ message, coloredMessage }, ref) => {
  useEffect(() => {
    if (!message || !coloredMessage) return;
    console.log("hit");
    ref?.current?.show(message);
  }, [message, ref]);

  const [toastMessage, setToastMessage] = useState("");
  const toastOpacity = useSharedValue(0);
  const isShowed = useRef(false);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: toastOpacity.value,
    };
  }, []);

  useImperativeHandle(ref, () => ({ show }));

  const turnOnIsShow = useCallback(() => {
    isShowed.current = false;
  }, []);

  const show = useCallback(
    (toastMessage) => {
      setToastMessage(toastMessage);
      isShowed.current = true;
      toastOpacity.value = withSequence(
        withTiming(0.94, { duration: 300 }),
        withTiming(0.94, { duration: 800 }),
        withTiming(0, { duration: 300 }, () => {
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
      pointerEvents="box-none"
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
