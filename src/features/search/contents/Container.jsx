import { useState } from "react";

import SearchInputBox from "../../../shared/inputBox/SearchInputBox";
import EmptyImage from "./EmptyImage";
import RecentSearchArea from "./RecentSearchArea";

const dummyList = [
  { name: "메타버스" },
  { name: "월드" },
  { name: "New jeans" },
  { name: "에스파" },
  { name: "IU" },
];

const SearchContentContainer = () => {
  const [inputText, setInputText] = useState("");
  const [searched, setSearched] = useState(true);

  const handleInputChange = (text) => {
    setInputText(text);
    setSearched(true);
  };
  const handleInputSubmit = (e) => {
    const { text } = e.nativeEvent;
    setSearched(false);
  };

  return (
    <>
      <SearchInputBox
        placeholder="링크 제목, URL을 검색해 주세요."
        value={inputText}
        onSubmitEditing={handleInputSubmit}
        onChangeText={handleInputChange}
      />
      {!inputText && <RecentSearchArea list={dummyList} />}
      {inputText && !searched && <EmptyImage />}
    </>
  );
};

export default SearchContentContainer;
