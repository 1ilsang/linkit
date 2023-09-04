import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, { spring } from "react-native-reanimated";

const Toggle = ({ selected }) => {
  const selectedColor = selected ? "#1DB191" : "#C1C7CD";
  const [switchTranslate] = useState(new Animated.Value(0));
  useEffect(() => {
    if (selected) {
      spring(switchTranslate, {
        toValue: 24,
        mass: 0.1,
        damping: 30,
        stiffness: 120,
        overshootClamping: false,
        restSpeedThreshold: 0.001,
        restDisplacementThreshold: 0.001,
      }).start();
    } else {
      spring(switchTranslate, {
        toValue: 0,
        mass: 0.1,
        damping: 30,
        stiffness: 120,
        overshootClamping: false,
        restSpeedThreshold: 0.001,
        restDisplacementThreshold: 0.001,
      }).start();
    }
  }, [selected, switchTranslate]);

  return (
    <Animated.View
      style={[styles.container, { backgroundColor: selectedColor }]}
    >
      <Animated.View
        style={[
          styles.circle,
          { borderColor: selectedColor },
          {
            transform: [
              {
                translateX: switchTranslate,
              },
            ],
          },
          styles.shadowValue,
        ]}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 54,
    height: 30,
    backgroundColor: "#1DB191",
    borderRadius: 40,
  },
  circle: {
    width: 30.38,
    height: 30,
    backgroundColor: "#FFFFFF",
    borderColor: "#1DB191",
    borderWidth: 2,
    borderRadius: 40,
  },
});

export default Toggle;
