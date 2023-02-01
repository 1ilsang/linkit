import { useAtom } from "jotai";
import { ScrollView } from "react-native";
import { folderListAtom } from "../../../../../shared/atoms";
import EmptyImage from "../../../../../shared/EmptyImage";
import { folderDetailAtom } from "../../../atoms";
import { MODE } from "../../../constants";
import Edit from "./Edit";
import FolderContentItem from "./Item";

const LinkContainer = () => {
  const [folderDetail] = useAtom(folderDetailAtom);
  const [folderList] = useAtom(folderListAtom);
  const linkList =
    folderList.find((item) => item.id === folderDetail.id)?.linkList || [];

  if (folderDetail.mode === MODE.edit) {
    return (
      <ScrollView>
        <Edit />
      </ScrollView>
    );
  }

  return (
    <ScrollView>
      {linkList.length === 0 ? (
        <EmptyImage />
      ) : (
        linkList.map((item) => <FolderContentItem key={item.id} {...item} />)
      )}
    </ScrollView>
  );
};

export default LinkContainer;
