import { useAtom } from "jotai";
import { useEffect } from "react";
import { folderListAtom } from "../../../../../shared/atoms";
import { folderDetailAtom } from "../../../atoms";
import EditItem from "./EditItem";

const Edit = () => {
  const [folderList] = useAtom(folderListAtom);
  const [folderDetail, setFolderDetail] = useAtom(folderDetailAtom);

  const { deleteLinkList } = folderDetail;
  const { linkList } = folderList.find((item) => item.id === folderDetail.id);

  const handleCirclePress = (pressedId) => {
    setFolderDetail((prev) => {
      const chosen = prev.deleteLinkList.find((linkId) => linkId === pressedId);
      if (chosen) {
        prev.deleteLinkList = prev.deleteLinkList.filter(
          (linkId) => linkId !== pressedId
        );
      } else {
        prev.deleteLinkList.push(pressedId);
      }
      return { ...prev };
    });
  };

  useEffect(() => {
    setFolderDetail((prev) => ({ ...prev, deleteLinkList: [] }));
    return () => {
      setFolderDetail((prev) => ({ ...prev, deleteLinkList: [] }));
    };
  }, []);

  return linkList.map((item) => (
    <EditItem
      key={item.id}
      {...item}
      onCirclePress={handleCirclePress}
      checked={deleteLinkList.includes(item.id)}
    />
  ));
};

export default Edit;
