import { useAtom } from "jotai";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Toast from "react-native-root-toast";
import { mainAtom } from "../../main/atoms";
import SubmitButton from "../../../shared/buttons/Submit";
import { DEFAULT_SHORT_TOAST } from "../../../shared/constants/toast";
import Toggle from "../../../shared/icons/Toggle";
import FormInputBox from "../../../shared/inputBox/FormInputBox";
import { linkAdderAtom } from "../atoms";

const LinkAdderContentContainer = () => {
  const [, setMain] = useAtom(mainAtom);
  const [linkAdder, setLinkAdder] = useAtom(linkAdderAtom);
  const { autoLinkName, linkName, url, targetFolder, memo } = linkAdder;

  const validSubmit = url.length > 0 && linkName.length > 0;

  const handleAutoLinkToggle = () => {
    setLinkAdder((prev) => ({ ...prev, autoLinkName: !prev.autoLinkName }));
  };
  const handleLinkTextChange = (linkName) => {
    setLinkAdder((prev) => ({ ...prev, linkName }));
  };
  const handleUrlTextChange = (url) => {
    setLinkAdder((prev) => ({ ...prev, url }));
  };
  const handleMemoTextChange = (memo) => {
    setLinkAdder((prev) => ({ ...prev, memo }));
  };
  const handleFolderPress = () => {
    setMain((prev) => ({ ...prev, folderPickerOpen: true }));
  };
  const handleSubmitPress = () => {
    // TODO: folderList > linkList 저장 + localStorage 저장
    Toast.show("링크가 저장되었습니다.", DEFAULT_SHORT_TOAST);
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Pressable
          style={styles.toggleContainer}
          onPress={handleAutoLinkToggle}
        >
          <Text>링크 이름 자동 추출</Text>
          <Toggle selected={autoLinkName} />
        </Pressable>
        {!autoLinkName && (
          <FormInputBox
            label="링크 이름"
            placeholder="링크 이름을 입력해 주세요."
            onChangeText={handleLinkTextChange}
            value={linkName}
            required
          />
        )}
        <FormInputBox
          label="URL"
          placeholder="링크를 입력해 주세요."
          onChangeText={handleUrlTextChange}
          value={url}
          required
        />
        <FormInputBox
          label="폴더"
          placeholder="폴더를 선택해 주세요."
          editable={false}
          value={targetFolder.title}
          onInputPress={handleFolderPress}
          required
        />
        <FormInputBox
          label="메모"
          placeholder="내용을 입력해 주세요. (100자 이하)"
          onChangeText={handleMemoTextChange}
          value={memo}
        />
      </View>
      <SubmitButton
        label="저장하기"
        onPress={handleSubmitPress}
        disabled={!validSubmit}
      />
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
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    height: 301,
  },
  toggleContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
  },
});

export default LinkAdderContentContainer;
