import { View } from "react-native";
import MainContentsContainer from "./contents/Container";
import MainTitleContainer from "./title/Container";

const MainContainer = () => {
  return (
    <>
      <MainTitleContainer />
      <MainContentsContainer />
    </>
  );
};

export default MainContainer;
