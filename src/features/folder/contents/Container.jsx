import { useState } from "react";
import InputBox from "./InputBox";

const FolderContentContainer = () => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <InputBox value={inputText} onChange={handleInputChange} />
    </>
  );
};

export default FolderContentContainer;
