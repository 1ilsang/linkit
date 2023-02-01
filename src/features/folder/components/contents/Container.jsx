import { useAtom } from "jotai";
import { useLayoutEffect } from "react";
import { Pressable } from "react-native";
import SearchInputBox from "../../../../shared/inputBox/SearchInputBox";
import { folderDetailAtom, initialFolderDetail } from "../../atoms";
import { MODE } from "../../constants";
import FilterArea from "./filter/FilterArea";
import LinkContainer from "./links/Container";

const FolderContentContainer = (props) => {
  const [folderDetail, setFolderDetail] = useAtom(folderDetailAtom);
  const { mode } = folderDetail;

  useLayoutEffect(() => {
    const id = props.route.params.id;
    setFolderDetail({ ...initialFolderDetail, id });
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
      {mode === MODE.normal && (
        <>
          <SearchInputBox
            placeholder={"링크 제목, URL을 검색해 주세요."}
            value={folderDetail.search}
            onChangeText={handleSearchChange}
          />
          <FilterArea />
        </>
      )}
      <LinkContainer />
    </Pressable>
  );
};

export default FolderContentContainer;
