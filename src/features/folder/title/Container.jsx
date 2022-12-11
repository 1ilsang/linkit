import { Text } from "react-native";
import CommonTitleContainer from "../../shared/navigation/CommonContainer";

import HeaderLeftButton from "../../shared/navigation/HeaderLeftButton";

const FolderTitleContainer = (props) => {
  return (
    <CommonTitleContainer>
      <HeaderLeftButton {...props} />
      <Text>폴더이름</Text>
    </CommonTitleContainer>
  );
};

export default FolderTitleContainer;
