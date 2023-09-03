import { useAtom } from "jotai";
import { Pressable, StyleSheet, Text, View } from "react-native";

import SubmitButton from "../../../shared/buttons/Submit";

import Toggle from "../../../shared/icons/Toggle";
import FormInputBox from "../../../shared/inputBox/FormInputBox";
import { mainAtom } from "../../main/atoms";
import { linkAdderAtom } from "../atoms";
import { folderListAtom } from "../../../shared/atoms";

import { useEffect } from "react";
import useLinkAdderContentContainer from "../hooks/useLinkAdderContentContainer";

const LinkAdderContentContainer = ({ params = {} }) => {
  const { id, linkId, type } = params;
  const [, setMain] = useAtom(mainAtom);
  const [folderList] = useAtom(folderListAtom);
  const [linkAdder, setLinkAdder] = useAtom(linkAdderAtom);

  const { autoLinkName, linkName, url, targetFolder } = linkAdder;

  const {
    linkNameError,
    isEdit,
    clicked,
    validSubmit,
    handleAutoLinkToggle,
    handleLinkNameChange,
    handleUrlTextChange,
    handleFolderPress,
    handleSubmitPress,
  } = useLinkAdderContentContainer(id, linkId, type);

  useEffect(() => {
    const target = id
      ? folderList.find((item) => item.id === id)
      : folderList[0];
    if (!target) {
      throw new Error("아이디가 존재하지 않습니다");
    }
    setLinkAdder((prev) =>
      linkId
        ? target.linkList.find((item) => item.id === linkId)
        : {
            ...prev,
            targetFolder: { id: target.id, title: target.title },
          }
    );
    setMain((prev) => ({ ...prev, folderPickerOpen: false }));
  }, [id]);

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
            onChangeText={handleLinkNameChange}
            value={linkName}
            error={linkNameError}
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
          value={targetFolder.title || folderList[0].title}
          onInputPress={handleFolderPress}
          required
        />
      </View>
      <SubmitButton
        label={isEdit ? "수정하기" : "저장하기"}
        onPress={handleSubmitPress}
        disabled={!validSubmit || clicked}
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
