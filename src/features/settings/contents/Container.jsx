import { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import Toggle from "../../../shared/icons/Toggle";

const SettingsContentContainer = () => {
  const [push, setPush] = useState(true);

  const handlePushToggle = () => {
    setPush((prev) => !prev);
  };

  return (
    <>
      <Text>푸시 알림 설정</Text>
      <Pressable style={styles.toggleContainer} onPress={handlePushToggle}>
        <Text>푸시 알림</Text>
        <Toggle selected={push} />
      </Pressable>
      <Text>리마인드 알림 ~~~ 등을 알려드릴게요.</Text>
    </>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
  },
});

export default SettingsContentContainer;
