import { useNavigation } from "@react-navigation/native";
import { useAtom } from "jotai";
import { createEditAtom, initialCreateEdit } from "../atoms";
import { folderListAtom, toastAtom } from "../../../shared/atoms";
import { useState } from "react";
import { LOCAL_STORAGE_KEY, save } from "../../../shared/utils/localStorage";

const useFolderCreateEditContentContainer = (props) => {
  const navigation = useNavigation();
  const [createEdit, setCreateEdit] = useAtom(createEditAtom);
  const [folderList, setFolderList] = useAtom(folderListAtom);

  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [, setToast] = useAtom(toastAtom);

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
      setToast({ message: "잘못된 입력이 있어요." });
      return;
    }

    if (!isEdit) {
      const existTitle = folderList.find(
        (item) => item.title === saveFolderData.title
      );
      if (existTitle) {
        setToast({
          message: "똑같은 이름의 폴더가 있어요. 다른 이름을 입력해 주세요.",
        });
        return;
      }
    }
    setCreateEdit({ ...initialCreateEdit });
    setFolderList((prev) => {
      const existPrevData = prev.find((item) => item.id === saveFolderData.id);
      const next = [...prev];

      if (existPrevData) {
        existPrevData.title = saveFolderData.title;
        existPrevData.description = saveFolderData.description;
        existPrevData.icon = saveFolderData.icon;
        existPrevData.color = saveFolderData.color;
      } else {
        saveFolderData.linkList = [];
        saveFolderData.id = Number(new Date());
        next.push({ ...saveFolderData });
      }
      save(LOCAL_STORAGE_KEY.folderList, next);
      return next;
    });

    navigation.navigate("Main");

    isEdit
      ? setToast({
          message: "편집한 내용이 저장되었어요.",
        })
      : setToast({
          message: "폴더가 추가되었어요.",
          coloredMessage: "폴더로 이동",
        });

    // TODO: Toast text 클릭 동작 구현
    //   onPress: (e) => {
    //     navigation.navigate("Folder", {
    //       id: saveFolderData.id,
    //       title: saveFolderData.title,
    //     });
    //   },
    // });
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

  return {
    handleTitleChange,
    handleDescriptionChange,
    handleSubmitPress,
    titleError,
    descriptionError,
    createEdit,
    validSubmit,
    isEdit,
  };
};

export default useFolderCreateEditContentContainer;
