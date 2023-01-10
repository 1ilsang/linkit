import { ScrollView } from "react-native";
import SearchInputBox from "../../shared/inputBox/SearchInputBox";
import FilterArea from "./filter/FilterArea";
import FolderContentItem from "./Item";

const dummyList = [
  { name: "link1", url: "https://www.naver.com" },
  { name: "link2", url: "https://www.naver.com/?q=123&d=2123123" },
  {
    name: "link3",
    url: "https://www.figma.com/file/wz9nsE9lhQhRbu3ZoueZ1e/Linkit?node-id=68%3A16378&t=ifemXCIR6Z2XSgxb-0",
  },
  {
    name: "link4444444444",
    url: "https://www.figma.com/file/HC1u8NXQMgeMTJ3JMrhxp2/linkit_wireframe?node-id=0%3A1&t=773c5bYvyOsrw8wv-0",
  },
  { name: "link5", url: "https://icons.expo.fyi/Feather/image" },
  { name: "link6", url: "https://www.naver.com" },
  { name: "link77777777", url: "https://www.naver.com" },
  { name: "link8", url: "https://www.naver.com" },
  { name: "link9", url: "https://www.naver.com" },
  { name: "link10000000000000000000000000000", url: "https://www.naver.com" },
  { name: "link11", url: "https://www.naver.com" },
  { name: "link12", url: "https://www.naver.com" },
  { name: "link13", url: "https://www.naver.com" },
  { name: "link14", url: "https://www.naver.com" },
  { name: "link15", url: "https://www.naver.com" },
  { name: "link16", url: "https://www.naver.com" },
  { name: "link17", url: "https://www.naver.com" },
];

const FolderContentContainer = (props) => {
  return (
    <>
      <SearchInputBox
        value="dump"
        placeholder={"링크 제목, URL을 검색해 주세요."}
      />
      <FilterArea />
      <ScrollView>
        {dummyList.map((item) => (
          <FolderContentItem key={item.name} {...item} />
        ))}
      </ScrollView>
    </>
  );
};

export default FolderContentContainer;
