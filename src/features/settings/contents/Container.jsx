import { useState } from "react";
import { Text } from "react-native";

import InputBox from "./InputBox";

const SettingsContentContainer = () => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <Text>푸시 알림 설정</Text>
      <InputBox
        placeholder="이거머야"
        value={inputText}
        onChange={handleInputChange}
      />
      <Text>링크 설정</Text>
      <InputBox
        placeholder="먼가가 먼가먼가리리"
        value={inputText}
        onChange={handleInputChange}
      />
      <Text>아이콘</Text>
    </>
  );
};

export default SettingsContentContainer;
