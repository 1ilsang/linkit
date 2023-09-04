import { useNavigation } from "@react-navigation/native";
import { Keyboard } from "react-native";
import { useAtom } from "jotai";
import { mainAtom } from "../../main/atoms";
import { linkAdderAtom } from "../atoms";
import { folderListAtom, toastAtom } from "../../../shared/atoms";
import { useState } from "react";
import { LOCAL_STORAGE_KEY, save } from "../../../shared/utils/localStorage";
import { getOgData } from "../helpers";
import { sortLinkList } from "../../../shared/utils/helpers";

const useLinkAdderContentContainer = (id, linkId, type) => {
  const SALT = 1000000;
  const navigation = useNavigation();

  const [, setMain] = useAtom(mainAtom);
  const [, setFolderList] = useAtom(folderListAtom);
  const [linkAdder, setLinkAdder] = useAtom(linkAdderAtom);
  const { autoLinkName, linkName, url, targetFolder } = linkAdder;

  const [linkNameError, setLinkNameError] = useState("");

  const isEdit = type === "edit";
  const [clicked, setClicked] = useState(false);

  const [, setToast] = useAtom(toastAtom);

  const validSubmit = !!(url.length > 0 &&
  targetFolder.title.length > 0 &&
  targetFolder.id &&
  autoLinkName
    ? true
    : linkName.length > 0);

  const getAutoLinkName = async () => {
    const { ogTitle } = await getOgData(url);
    if (ogTitle.length > 0) {
      return ogTitle;
    }
    const linkList = url
      .replace(/https?:\/\/(www\.)?|.com/g, "")
      .split("/")
      .filter((str) => str && str.trim().length > 0);
    if (linkList.length < 2) {
      return linkList[0];
    }
    return linkList.slice(0, 2).join("의 ");
  };
  const handleAutoLinkToggle = () => {
    setLinkAdder((prev) => ({
      ...prev,
      autoLinkName: !prev.autoLinkName,
      linkName: "",
    }));
    setLinkNameError("");
  };
  const handleLinkNameChange = (linkName) => {
    setLinkAdder((prev) => ({ ...prev, linkName }));
    setLinkNameError(
      linkName.length > 20 ? "공백 포함 20자까지 입력할 수 있어요." : ""
    );
  };
  const handleUrlTextChange = (url) => {
    setLinkAdder((prev) => ({ ...prev, url }));
  };
  const handleFolderPress = () => {
    Keyboard.dismiss();
    setMain((prev) => ({
      ...prev,
      folderPickerOpen: true,
      folderPickerId: id,
    }));
  };
  const handleSubmitPress = async () => {
    if (!validSubmit) return;
    setClicked(true);

    let nextAutoLinkName = "";
    if (autoLinkName) {
      nextAutoLinkName = await getAutoLinkName();
    }

    setFolderList((prev) => {
      const existPrevData = prev.find((item) => item.id === targetFolder.id);
      if (!existPrevData) {
        setToast({
          message:
            "해당 폴더가 존재하지 않습니다. 에러가 계속해서 발생한다면 고객센터에 문의해주세요.",
        });
        setClicked(false);
        return prev;
      }
      if (existPrevData.linkList.length === 100) {
        setToast({
          message:
            "폴더 당 최대 100개의 링크를 저장할 수 있어요. 다른 폴더에 저장해 주세요.",
        });
        setClicked(false);
        return prev;
      }

      if (isEdit) {
        const editLink = {
          ...linkAdder,
          date: new Date(),
        };
        if (editLink.autoLinkName) {
          editLink.linkName = nextAutoLinkName;
        }
        // 원래 폴더에서 삭제
        const prevFolderData = prev.find((item) => item.id === id);
        const removedPrevData = prevFolderData.linkList.filter(
          (item) => item.id !== linkId
        );
        prevFolderData.linkList = removedPrevData;

        // 새로운 폴더에 삽입
        const nextFolderData = prev.find(
          (item) => item.id === editLink.targetFolder.id
        );
        nextFolderData.linkList.push(editLink);
        nextFolderData.linkList.sort(sortLinkList(existPrevData.sort));

        const next = [...prev];
        save(LOCAL_STORAGE_KEY.folderList, next);

        setToast({
          message: "링크가 수정되었어요!",
          navigateInfo: {
            path: "Folder",
            id: targetFolder.id,
            title: targetFolder.title,
          },
        });

        if (id) {
          navigation.navigate("Folder", {
            id,
            title: prevFolderData.title,
          });
        } else {
          navigation.navigate("Main");
        }
        return next;
      }

      const submitLink = {
        ...linkAdder,
        id: Number(new Date()) + Math.floor(Math.random() * SALT),
        date: new Date(),
      };
      if (submitLink.autoLinkName) {
        submitLink.linkName = nextAutoLinkName;
      }
      existPrevData.linkList.push(submitLink);
      existPrevData.linkList.sort(sortLinkList(existPrevData.sort));
      const next = [...prev];
      save(LOCAL_STORAGE_KEY.folderList, next);

      id
        ? setToast({ message: "링크가 저장되었어요!" })
        : setToast({
            message: "링크가 저장되었어요!",
            coloredMessage: "저장 폴더로 이동",
            navigateInfo: {
              path: "Folder",
              id: targetFolder.id,
              title: targetFolder.title,
            },
          });
      if (id) {
        navigation.goBack();
      } else {
        navigation.navigate("Main");
      }
      return next;
    });
  };

  return {
    linkNameError,
    isEdit,
    clicked,
    validSubmit,
    handleAutoLinkToggle,
    handleLinkNameChange,
    handleUrlTextChange,
    handleFolderPress,
    handleSubmitPress,
  };
};

export default useLinkAdderContentContainer;
