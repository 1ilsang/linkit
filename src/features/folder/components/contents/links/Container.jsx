import { useAtom } from "jotai";
import { ScrollView } from "react-native";
import EmptyImage from "../../../../../shared/EmptyImage";
import { folderDetailAtom } from "../../../atoms";
import { MODE } from "../../../constants";
import Edit from "./Edit";
import FolderContentItem from "./Item";

const LinkContainer = () => {
  const [folderDetail] = useAtom(folderDetailAtom);
  const { searchLinkList } = folderDetail;

  if (folderDetail.mode === MODE.edit) {
    return (
      <ScrollView>
        {/* TODO: 이거 지워야 할듯? */}
        <Edit />
      </ScrollView>
    );
  }

  return (
    <ScrollView>
      {searchLinkList.length === 0 ? (
        <EmptyImage />
      ) : (
        searchLinkList.map((item) => (
          <FolderContentItem key={item.id} {...item} />
        ))
      )}
    </ScrollView>
  );
};

export default LinkContainer;
