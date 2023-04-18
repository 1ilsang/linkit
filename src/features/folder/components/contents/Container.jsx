import { useAtom } from "jotai";
import { useLayoutEffect } from "react";
import { Pressable, StyleSheet } from "react-native";
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
    const targetFolder = folderList.find((item) => item.id === folderDetail.id);
    if (!targetFolder) return;

    const { linkList: searchLinkList } = targetFolder;
    setFolderDetail((prev) => ({
      ...prev,
      searchLinkList,
    }));
  }, [folderList, folderDetail.id]);

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
  const closeModal = () => {
    setFolderDetail((prev) => ({
      ...prev,
      titleMoreOpen: undefined,
    }));
  };

  return (
    <Pressable onPress={closeModal} style={styles.container}>
      {mode === MODE.normal && (
        <>
          <SearchInputBox
            onPressIn={closeModal}
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

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});

export default FolderContentContainer;
