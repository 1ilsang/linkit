import { useState } from "react";

import SearchInputBox from "../../shared/inputBox/SearchInputBox";

const SearchContentContainer = () => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <SearchInputBox
        placeholder="링크 제목, URL을 검색해 주세요."
        value={inputText}
        onChange={handleInputChange}
      />
    </>
  );
};

export default SearchContentContainer;
