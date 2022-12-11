import { StyleSheet, Text, View } from "react-native";
import SearchButton from "../../shared/icons/SearchButton";
import MoreButton from "../../shared/icons/MoreButton";
import CommonTitleContainer from "../../shared/navigation/CommonContainer";

import HeaderLeftButton from "../../shared/navigation/HeaderLeftButton";

const FolderTitleContainer = (props) => {
  const handleSearchClick = () => {};
  const handleMoreClick = () => {};

  return (
    <CommonTitleContainer>
      <HeaderLeftButton {...props} />
      <Text style={styles.title}>폴더이름</Text>
      <SearchButton style={styles.search} onPress={handleSearchClick} />
      <MoreButton onPress={handleMoreClick} />
    </CommonTitleContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    width: 245,
    height: 41,

    paddingLeft: 10,
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 41,
    letterSpacing: 0.374,

    color: "#2D264B",
  },
  search: { paddingRight: 24 },
});

export default FolderTitleContainer;
