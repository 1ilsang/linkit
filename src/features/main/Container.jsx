import MainContentsContainer from "./contents/Container";
import Navbar from "./Navbar";
import MainTitleContainer from "./title/Container";

const MainContainer = () => {
  return (
    <>
      <MainTitleContainer />
      <MainContentsContainer />
      <Navbar />
    </>
  );
};

export default MainContainer;
