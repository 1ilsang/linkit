import { useAtom } from "jotai";
import { useLayoutEffect } from "react";
import { Pressable, ScrollView } from "react-native";
import { folderListAtom } from "../../../shared/atoms";
import EmptyImage from "../../../shared/EmptyImage";
import SearchInputBox from "../../../shared/inputBox/SearchInputBox";
import { folderDetailAtom, initialFolderDetail } from "../atoms";
import FilterArea from "./filter/FilterArea";
import FolderContentItem from "./Item";

const FolderContentContainer = (props) => {
  const [folderList] = useAtom(folderListAtom);
  const [folderDetail, setFolderDetail] = useAtom(folderDetailAtom);

  useLayoutEffect(() => {
    const id = props.route.params.id;
    const curFolder = folderList.find((item) => item.id === id) || {};
    setFolderDetail({ ...initialFolderDetail, ...curFolder });
    return () => {
      setFolderDetail({ ...initialFolderDetail });
    };
  }, [props.route.params.id]);

  const handleSearchChange = (search) => {
    setFolderDetail((prev) => ({ ...prev, search }));
  };
  const handleContainerPress = () => {
    setFolderDetail((prev) => ({
      ...prev,
      titleMoreOpen: undefined,
      itemMoreOpen: undefined,
    }));
  };

  return (
    <Pressable onPress={handleContainerPress}>
      <SearchInputBox
        placeholder={"링크 제목, URL을 검색해 주세요."}
        value={folderDetail.search}
        onChangeText={handleSearchChange}
      />
      <FilterArea />
      <ScrollView>
        {folderDetail.linkList.length === 0 ? (
          <EmptyImage />
        ) : (
          folderDetail.linkList.map((item) => (
            <FolderContentItem key={item.id} {...item} />
          ))
        )}
      </ScrollView>
    </Pressable>
  );
};

export default FolderContentContainer;
