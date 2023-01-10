import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Toast from "react-native-root-toast";

import SubmitButton from "../../../shared/buttons/Submit";
import Toggle from "../../../shared/icons/Toggle";
import FormInputBox from "../../../shared/inputBox/FormInputBox";

const LinkAdderContentContainer = () => {
  const [autoLinkName, setAutoLinkName] = useState(true);

  const handleSubmitPress = () => {
    Toast.show("링크가 저장되었습니다.", {
      duration: Toast.durations.SHORT,
      position: 505,
      shadow: false,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Pressable
          style={styles.toggleContainer}
          onPress={() => setAutoLinkName(!autoLinkName)}
        >
          <Text>링크 이름 자동 추출</Text>
          <Toggle selected={autoLinkName} />
        </Pressable>
        {!autoLinkName && (
          <FormInputBox
            label="링크 이름"
            placeholder="링크 이름을 입력해 주세요."
            required
          />
        )}
        <FormInputBox
          label="URL"
          placeholder="링크를 입력해 주세요."
          required
        />
        <FormInputBox
          label="폴더"
          placeholder="폴더를 선택해 주세요."
          required
        />
        <FormInputBox
          label="메모"
          placeholder="내용을 입력해 주세요. (100자 이하)"
        />
      </View>
      <SubmitButton onPress={handleSubmitPress} label="저장하기" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: "100%",
    paddingBottom: 36,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    height: 301,
  },
  toggleContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default LinkAdderContentContainer;
