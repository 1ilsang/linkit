import { useAtom } from "jotai";
import { Pressable, StyleSheet, Text, View, Keyboard } from "react-native";
import Toast from "react-native-root-toast";
import { mainAtom } from "../../main/atoms";
import SubmitButton from "../../../shared/buttons/Submit";
import { DEFAULT_SHORT_TOAST } from "../../../shared/constants/toast";
import Toggle from "../../../shared/icons/Toggle";
import FormInputBox from "../../../shared/inputBox/FormInputBox";
import { linkAdderAtom } from "../atoms";
import { folderListAtom } from "../../../shared/atoms";
import { LOCAL_STORAGE_KEY, save } from "../../../shared/utils/localStorage";
import { useNavigation } from "@react-navigation/native";

const LinkAdderContentContainer = () => {
  const navigation = useNavigation();

  const [, setMain] = useAtom(mainAtom);
  const [, setFolderList] = useAtom(folderListAtom);
  const [linkAdder, setLinkAdder] = useAtom(linkAdderAtom);
  const { autoLinkName, linkName, url, targetFolder, memo } = linkAdder;

  const validSubmit = !!(
    url.length > 0 &&
    linkName.length > 0 &&
    targetFolder.title.length > 0 &&
    targetFolder.id
  );

  const handleAutoLinkToggle = () => {
    setLinkAdder((prev) => {
      const linkName = (() => {
        if (prev.autoLinkName) return "";
        // TODO: Enhancement. og tag 추출
        const linkList = url.replace(/https?:\/\/(www\.)?/, "").split("/");
        if (linkList.length < 2) {
          return linkList[0];
        }
        return linkList.slice(0, 2).join("의 ");
      })();
      return {
        ...prev,
        autoLinkName: !prev.autoLinkName,
        linkName,
      };
    });
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
    Keyboard.dismiss();
    setMain((prev) => ({ ...prev, folderPickerOpen: true }));
  };
  const handleSubmitPress = () => {
    if (!validSubmit) return;
    setFolderList((prev) => {
      const existPrevData = prev.find((item) => item.id === targetFolder.id);
      if (!existPrevData) {
        Toast.show(
          "해당 폴더가 존재하지 않습니다. 에러가 계속해서 발생한다면 고객센터에 문의해주세요.",
          DEFAULT_SHORT_TOAST
        );
        return prev;
      }
      existPrevData.linkList.push(linkAdder);
      const next = [...prev];
      save(LOCAL_STORAGE_KEY.folderList, next);
      Toast.show("링크가 저장되었습니다.", DEFAULT_SHORT_TOAST);
      navigation.navigate("Main");
      return next;
    });
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
      {/* TODO: 키보드에 가려지는 부분이 있으므로 밀어주는 작업 해야함. */}
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
