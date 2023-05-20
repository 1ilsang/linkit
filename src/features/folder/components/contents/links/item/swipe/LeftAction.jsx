import { Animated, Pressable, StyleSheet } from "react-native";
import IconFactory from "../../../../../../../shared/icons/IconFactory";

const renderLeftActions = ({ dragX, pin, handlePinClick, props }) => {
  const trans = dragX.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  const handlePinPress = () => {
    handlePinClick(props.id);
  };

  return (
    <Pressable onPress={handlePinPress}>
      <Animated.View
        style={{
          ...styles.pin,
          transform: [{ translateX: trans }],
        }}
      >
        <IconFactory
          icon="PushPin"
          color="#FFFFFF"
          weight={pin ? "fill" : undefined}
        />
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pin: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: "100%",
    backgroundColor: "#007AFF",
  },
});

export default renderLeftActions;
