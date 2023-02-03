import { useAtom } from "jotai";
import { useLayoutEffect } from "react";
import { Pressable } from "react-native";
import { folderListAtom } from "../../../../shared/atoms";
import SearchInputBox from "../../../../shared/inputBox/SearchInputBox";
import { folderDetailAtom, initialFolderDetail } from "../../atoms";
import { MODE } from "../../constants";
import FilterArea from "./filter/FilterArea";
import LinkContainer from "./links/Container";

const FolderContentContainer = (props) => {
  const [folderList] = useAtom(folderListAtom);
  const [folderDetail, setFolderDetail] = useAtom(folderDetailAtom);
  const { mode } = folderDetail;

  useLayoutEffect(() => {
    const id = props.route.params.id;
    setFolderDetail({
      ...initialFolderDetail,
      id,
    });
    return () => {
      setFolderDetail({ ...initialFolderDetail });
    };
  }, [props.route.params.id]);

  useLayoutEffect(() => {
    if (!folderDetail.id || !folderList) return;
    const { linkList: searchLinkList } = folderList.find(
      (item) => item.id === folderDetail.id
    );
    setFolderDetail((prev) => ({
      ...prev,
      searchLinkList,
    }));
  }, [folderList, folderDetail.id]);

  const handleContainerPress = () => {
    setFolderDetail((prev) => ({
      ...prev,
      titleMoreOpen: undefined,
      itemMoreOpen: undefined,
    }));
  };
  const handleSearchChange = (search) => {
    const originLinkList = folderList.find(
      (item) => item.id === folderDetail.id
    ).linkList;
    const nextLinkList = originLinkList.filter((item) => {
      return (
        item.linkName.includes(search) ||
        item.memo.includes(search) ||
        item.url.includes(search)
      );
    });
    setFolderDetail((prev) => ({
      ...prev,
      searchLinkList: nextLinkList,
      search,
    }));
  };
  const handleClearPress = () => {
    const searchLinkList = folderList.find(
      (item) => item.id === folderDetail.id
    ).linkList;
    setFolderDetail((prev) => ({ ...prev, searchLinkList, search: "" }));
  };
  const handlePressIn = () => {
    setFolderDetail((prev) => ({
      ...prev,
      titleMoreOpen: undefined,
      itemMoreOpen: undefined,
    }));
  };

  return (
    <Pressable onPress={handleContainerPress}>
      {mode === MODE.normal && (
        <>
          <SearchInputBox
            onPressIn={handlePressIn}
            placeholder={"링크 제목, URL을 검색해 주세요."}
            value={folderDetail.search}
            onChangeText={handleSearchChange}
            onClearPress={handleClearPress}
          />
          <FilterArea />
        </>
      )}
      <LinkContainer />
    </Pressable>
  );
};

export default FolderContentContainer;
