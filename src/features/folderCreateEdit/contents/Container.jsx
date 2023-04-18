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
import { useState } from "react";

const FolderCreateEditContentContainer = (props) => {
  const navigation = useNavigation();
  const [createEdit, setCreateEdit] = useAtom(createEditAtom);
  const [folderList, setFolderList] = useAtom(folderListAtom);

  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const isEdit = props.route.params.type === "edit";
  const validSubmit = createEdit.color && createEdit.icon && createEdit.title;

  const handleSubmitPress = async () => {
    const saveFolderData = { ...createEdit };
    let error = false;
    if (saveFolderData.title.length > 16) {
      setTitleError("공백 포함 16자까지 입력할 수 있어요.");
      error = true;
    }
    if (saveFolderData.description.length > 10) {
      setDescriptionError("공백 포함 10자까지 입력할 수 있어요.");
      error = true;
    }
    if (error) {
      Toast.show("잘못된 입력이 있어요.", DEFAULT_SHORT_TOAST);
      return;
    }

    if (!isEdit) {
      const existTitle = folderList.find(
        (item) => item.title === saveFolderData.title
      );
      if (existTitle) {
        Toast.show(
          "똑같은 이름의 폴더가 있어요. 다른 이름을 입력해 주세요.",
          DEFAULT_SHORT_TOAST
        );
        return;
      }
    }
    setCreateEdit({ ...initialCreateEdit });
    setFolderList((prev) => {
      const existPrevData = prev.find((item) => item.id === saveFolderData.id);
      if (existPrevData) {
        existPrevData.title = saveFolderData.title;
        existPrevData.description = saveFolderData.description;
        existPrevData.icon = saveFolderData.icon;
        existPrevData.color = saveFolderData.color;
      } else {
        saveFolderData.id = Number(new Date());
        prev.push(saveFolderData);
      }
      const next = [...prev];
      save(LOCAL_STORAGE_KEY.folderList, next);
      return next;
    });
    navigation.navigate("Main");
    const toastMessage = isEdit
      ? "편집한 내용이 저장되었어요."
      : `${saveFolderData.title} 폴더가 추가되었어요.              폴더로 이동`;
    // TODO: Toast text 색 및 배치 수정 필요
    Toast.show(toastMessage, {
      ...DEFAULT_SHORT_TOAST,
      hideOnPress: true,
      onPress: (e) => {
        navigation.navigate("Folder", {
          id: saveFolderData.id,
          title: saveFolderData.title,
        });
      },
    });
  };
  const handleTitleChange = (title) => {
    setTitleError(
      title.length > 16 ? "공백 포함 16자까지 입력할 수 있어요." : ""
    );
    setCreateEdit((prev) => ({ ...prev, title }));
  };
  const handleDescriptionChange = (description) => {
    setDescriptionError(
      description.length > 10 ? "공백 포함 10자까지 입력할 수 있어요." : ""
    );
    setCreateEdit((prev) => ({ ...prev, description }));
  };

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

      <Text style={styles.label}>아이콘</Text>
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
