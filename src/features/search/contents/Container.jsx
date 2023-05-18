import { useRef, useState } from "react";

import SearchInputBox from "../../../shared/inputBox/SearchInputBox";
import EmptyImage from "./EmptyImage";
import RecentSearchArea from "./RecentSearchArea";
import { useAtom } from "jotai";
import { globalSearchAtom } from "../atoms";

const SearchContentContainer = () => {
  const [globalSearch, setGlobalSearch] = useAtom(globalSearchAtom);
  const { searchWorld, searchedList, recentSearchList } = globalSearch;

  const searched = useRef(false);

  const handleInputChange = (text) => {
    if (!searched.current) {
      searched.current = true;
    }
    setGlobalSearch((prev) => ({ ...prev, searchWorld: text }));
  };

  return (
    <>
      <SearchInputBox
        placeholder="링크 제목, URL을 검색해 주세요."
        value={searchWorld}
        onChangeText={handleInputChange}
        autoFocus
      />
      {!searchWorld && recentSearchList.length > 0 && (
        <RecentSearchArea list={recentSearchList} />
      )}
      {searchWorld && searchedList.length === 0 && <EmptyImage />}
    </>
  );
};

export default SearchContentContainer;
