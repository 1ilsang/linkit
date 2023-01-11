import { useAtom } from "jotai";
import { Pressable, StyleSheet, Text } from "react-native";
import SubmitButton from "../../../shared/buttons/Submit";
import { folderListAtom } from "../../../shared/atoms";
import FormInputBox from "../../../shared/inputBox/FormInputBox";
import { save, LOCAL_STORAGE_KEY } from "../../../shared/utils/localStorage";
import { createEditAtom, initialCreateEdit } from "../atoms";
import ColorArea from "./ColorArea";
import IconArea from "./IconArea";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-root-toast";
import { DEFAULT_SHORT_TOAST } from "../../../shared/constants/toast";

const FolderCreateEditContentContainer = () => {
  const navigation = useNavigation();
  const [createEdit, setCreateEdit] = useAtom(createEditAtom);
  const [, setFolderList] = useAtom(folderListAtom);

  const handleSubmitPress = async () => {
    const saveFolderData = { ...createEdit };
    setCreateEdit({ ...initialCreateEdit });
    setFolderList((prev) => {
      const existPrevData = prev.find((item) => item.id === saveFolderData.id);
      if (existPrevData) {
        existPrevData.title = saveFolderData.title;
        existPrevData.description = saveFolderData.description;
        existPrevData.icon = saveFolderData.icon;
        existPrevData.color = saveFolderData.color;
      } else {
        prev.push(saveFolderData);
      }
      const next = [...prev];
      save(LOCAL_STORAGE_KEY.folderList, next);
      return next;
    });
    navigation.navigate("Main");
    Toast.show("저장되었어요.", DEFAULT_SHORT_TOAST);
  };
  const handleTitleChange = (title) => {
    setCreateEdit((prev) => ({ ...prev, title }));
  };
  const handleDescriptionChange = (description) => {
    setCreateEdit((prev) => ({ ...prev, description }));
  };

  return (
    <Pressable style={styles.container}>
      <FormInputBox
        label="이름"
        placeholder="폴더 이름을 입력해 주세요."
        value={createEdit.title}
        onChangeText={handleTitleChange}
        required
      />
      <FormInputBox
        label="설명"
        placeholder="설명을 추가해 주세요."
        value={createEdit.description}
        onChangeText={handleDescriptionChange}
      />

      <Text style={styles.label}>아이콘</Text>
      <IconArea />

      <ColorArea />
      <SubmitButton label="저장하기" onPress={handleSubmitPress} />
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

export default FolderCreateEditContentContainer;
