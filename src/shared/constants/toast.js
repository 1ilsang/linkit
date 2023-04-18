import Toast from "react-native-root-toast";

export const DEFAULT_SHORT_TOAST = {
  duration: Toast.durations.SHORT,
  position: Toast.positions.BOTTOM - 100,
  shadow: false,
  containerStyle: {
    width: "95%",
    padding: 10,
  },
};

export const DEFAULT_LONG_TOAST = {
  duration: Toast.durations.LONG,
  position: Toast.positions.BOTTOM - 100,
  shadow: false,
  containerStyle: {
    width: "95%",
    padding: 10,
  },
};
