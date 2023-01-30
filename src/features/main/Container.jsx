import BottomSheet from "../../shared/bottomSheet/BottomSheet";
import PickerBottomSheet from "../../shared/bottomSheet/Picker";
import MainContentsContainer from "./contents/Container";
import useMain from "./hooks/useMain";

const MainContainer = () => {
  const {
    scrollViewRef,
    adderSheetRef,
    adderSheet,
    main,
    pickerList,
    handleDoneClick,
    handleCancelClick,
  } = useMain();

  return (
    <>
      <MainContentsContainer scrollViewRef={scrollViewRef} />
      <BottomSheet ref={adderSheetRef} list={adderSheet} />
      <PickerBottomSheet
        open={main.folderPickerOpen}
        list={pickerList}
        onDoneClick={handleDoneClick}
        onCancelClick={handleCancelClick}
      />
    </>
  );
};

export default MainContainer;
