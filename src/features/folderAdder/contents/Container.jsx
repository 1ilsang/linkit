import { useState } from "react";
import { Text } from "react-native";

import InputBox from "./InputBox";

const FolderAdderContentContainer = () => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <Text>이름</Text>
      <InputBox
        placeholder="폴더 입력해 주세요."
        value={inputText}
        onChange={handleInputChange}
      />
      <Text>설명</Text>
      <InputBox
        placeholder="설명을 입력해 주세요."
        value={inputText}
        onChange={handleInputChange}
      />
      <Text>아이콘</Text>
    </>
  );
};

export default FolderAdderContentContainer;
