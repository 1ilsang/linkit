import { StyleSheet, Text, View } from "react-native";
import SubmitButton from "../../shared/buttons/Submit";
import FormInputBox from "../../shared/inputBox/FormInputBox";

const FolderAdderContentContainer = () => {
  return (
    <View style={styles.container}>
      <FormInputBox
        label="이름"
        placeholder="폴더 이름을 입력해 주세요."
        required
      />
      <FormInputBox label="설명" placeholder="설명을 추가해 주세요." />

      <Text>아이콘</Text>
      <SubmitButton label="만들기" />
    </View>
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

export default FolderAdderContentContainer;
