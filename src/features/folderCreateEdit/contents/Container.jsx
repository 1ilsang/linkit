import { Pressable, StyleSheet } from "react-native";
import SubmitButton from "../../../shared/buttons/Submit";
import FormInputBox from "../../../shared/inputBox/FormInputBox";
import ColorArea from "./ColorArea";
import IconArea from "./IconArea";
import useFolderCreateEditContentContainer from "../hooks/useFolderCreateEditContentContainer";

const FolderCreateEditContentContainer = (props) => {
  const {
    handleTitleChange,
    handleDescriptionChange,
    handleSubmitPress,
    titleError,
    descriptionError,
    createEdit,
    validSubmit,
    isEdit,
  } = useFolderCreateEditContentContainer(props);

  return (
    <Pressable style={styles.container}>
      <FormInputBox
        label="이름"
        placeholder="폴더 이름을 입력해 주세요."
        value={createEdit.title}
        onChangeText={handleTitleChange}
        error={titleError}
        required
      />
      <FormInputBox
        label="설명"
        placeholder="설명을 추가해 주세요."
        value={createEdit.description}
        onChangeText={handleDescriptionChange}
        error={descriptionError}
      />

      <IconArea />
      <ColorArea />

      <SubmitButton
        label={isEdit ? "저장하기" : "만들기"}
        onPress={handleSubmitPress}
        disabled={!validSubmit}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: "100%",
    paddingBottom: 36,
  },
});

export default FolderCreateEditContentContainer;
