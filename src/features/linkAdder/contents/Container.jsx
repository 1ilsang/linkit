import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import InputBox from "./InputBox";

const LinkAdderContentContainer = () => {
  const [autoLinkName, setAutoLinkName] = useState(true);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <View style={styles.form}>
        <Pressable onPress={() => setAutoLinkName(!autoLinkName)}>
          <Text>링크 이름 자동 추출</Text>
        </Pressable>
        <Text>링크 이름</Text>
        <InputBox
          placeholder="링크 이름을 입력해 주세요."
          value={inputText}
          onChange={handleInputChange}
        />
        <Text>URL</Text>
        <InputBox
          placeholder="링크를 입력해 주세요."
          value={inputText}
          onChange={handleInputChange}
        />
        <Text>폴더</Text>
        <InputBox
          placeholder="폴더를 선택해 주세요."
          value={inputText}
          onChange={handleInputChange}
        />
        <Text>메모</Text>
        <InputBox
          placeholder="내용을 입력해 주세요. (100자 이하)"
          value={inputText}
          onChange={handleInputChange}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    height: 301,
  },
});

export default LinkAdderContentContainer;
