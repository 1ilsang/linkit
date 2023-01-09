import { Pressable, StyleSheet, Text } from "react-native";
import SubmitButton from "../../shared/buttons/Submit";
import FormInputBox from "../../shared/inputBox/FormInputBox";
import ColorArea from "./ColorArea";
import IconArea from "./IconArea";

const FolderAdderContentContainer = () => {
  return (
    <Pressable style={styles.container}>
      <FormInputBox
        label="이름"
        placeholder="폴더 이름을 입력해 주세요."
        required
      />
      <FormInputBox label="설명" placeholder="설명을 추가해 주세요." />

      <Text style={styles.label}>아이콘</Text>
      <IconArea />

      <ColorArea />
      <SubmitButton label="만들기" />
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
  label: {
    height: 17,
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: -0.5,
    color: "#000000",
  },
});

export default FolderAdderContentContainer;
