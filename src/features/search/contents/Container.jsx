import { useEffect, useRef } from "react";

import SearchInputBox from "../../../shared/inputBox/SearchInputBox";
import EmptyImage from "./EmptyImage";
import RecentSearchArea from "./RecentSearchArea";
import { useAtom } from "jotai";
import { globalSearchAtom } from "../atoms";
import { folderListAtom } from "../../../shared/atoms";
import { handleLinkSearch } from "../helpers";
import { ScrollView } from "react-native";
import LinkItemBodyContainer from "../../folder/components/contents/links/item/body/Container";

const SearchContentContainer = () => {
  const [globalSearch, setGlobalSearch] = useAtom(globalSearchAtom);
  const [folderList] = useAtom(folderListAtom);

  const { searchWorld, searchedList, recentSearchList } = globalSearch;

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
      searchWorld: text,
      searchedList: [...filteredList],
    }));
  };

  const handleBodyClick = () => {
    setGlobalSearch((prev) => {
      const isExist = prev.recentSearchList.find(
        (keyword) => keyword === searchWorld
      );
      if (isExist) return prev;
      return {
        ...prev,
        recentSearchList: [...prev.recentSearchList, searchWorld],
      };
    });
  };

  useEffect(() => {
    return () => {
      setGlobalSearch((prev) => ({
        ...prev,
        searchWorld: "",
        searchedList: [],
      }));
    };
  }, []);

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
      {searchWorld && (
        <ScrollView>
          {searchedList.length === 0 ? (
            <EmptyImage />
          ) : (
            searchedList.map(({ linkName, url, id }) => (
              <LinkItemBodyContainer
                key={id}
                linkName={linkName}
                url={url}
                search={searchWorld}
                onBodyClick={handleBodyClick}
              />
            ))
          )}
        </ScrollView>
      )}
    </>
  );
};

export default SearchContentContainer;
