import { Alert, Animated, Pressable, StyleSheet } from "react-native";
import IconFactory from "../../../../../../../shared/icons/IconFactory";

const renderRightActions = ({ dragX, props, handleLinkDeleteClick }) => {
  const { linkName, id } = props;

  const trans = dragX.interpolate({
    inputRange: [-100, 0],
    outputRange: [0, 1],
  });
  const handleDeleteClick = () => {
    Alert.alert(`${linkName} 링크를 삭제하시겠어요?`, "", [
      { text: "취소", style: "cancel" },
      { text: "삭제", onPress: () => handleLinkDeleteClick(id) },
    ]);
  };

  return (
    <Pressable onPress={handleDeleteClick}>
      <Animated.View
        style={[
          styles.delete,
          {
            transform: [{ translateX: trans }],
          },
        ]}
      >
        <IconFactory icon="Trash" color="#FFFFFF" />
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  delete: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: "100%",
    backgroundColor: "#FF3B30",
  },
});

export default renderRightActions;
