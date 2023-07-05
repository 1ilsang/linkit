import { useRef } from "react";

import SearchInputBox from "../../../shared/inputBox/SearchInputBox";
import RecentSearchArea from "./RecentSearchArea";
import { useAtom } from "jotai";
import { globalSearchAtom } from "../atoms";
import { folderListAtom } from "../../../shared/atoms";
import { handleLinkSearch } from "../helpers";
import SearchScrollView from "./SearchScrollView";

const SearchContentContainer = () => {
  const [globalSearch, setGlobalSearch] = useAtom(globalSearchAtom);
  const [folderList] = useAtom(folderListAtom);

  const { searchWord, recentSearchList } = globalSearch;

  const searched = useRef(false);

  const handleInputChange = (text) => {
    if (!searched.current) {
      searched.current = true;
    }

    const linkList = folderList.flatMap((item) => item.linkList);
    const filteredList = linkList.filter((link) =>
      handleLinkSearch(text, link)
    );
    setGlobalSearch((prev) => ({
      ...prev,
      searchWord: text,
      searchedList: [...filteredList],
    }));
  };

  return (
    <>
      <SearchInputBox
        placeholder="링크 제목, URL을 검색해 주세요."
        value={searchWord}
        onChangeText={handleInputChange}
        delayFocus
      />
      {!searchWord && recentSearchList.length > 0 && (
        <RecentSearchArea list={recentSearchList} />
      )}
      {searchWord && <SearchScrollView />}
    </>
  );
};

export default SearchContentContainer;
