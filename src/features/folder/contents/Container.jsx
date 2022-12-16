import { Text } from "react-native";
import SearchInputBox from "../../shared/inputBox/SearchInputBox";
import FilterArea from "./filter/FilterArea";

const FolderContentContainer = (props) => {
  return (
    <>
      <SearchInputBox placeholder={"링크 제목, URL을 검색해 주세요."} />
      <FilterArea />
      <Text>Descriptions: {props.route.params.description}</Text>
    </>
  );
};

export default FolderContentContainer;
