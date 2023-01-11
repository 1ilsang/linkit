import { useAtom } from "jotai";
import { Pressable, ScrollView, StyleSheet } from "react-native";
import { folderListAtom } from "../../../shared/atoms";
import { mainAtom } from "../atoms";
import EmptyImage from "../EmptyImage";
import ContentBox from "./ContentBox";

const MainContentsContainer = ({ scrollViewRef }) => {
  const [folderList] = useAtom(folderListAtom);
  const [, setMain] = useAtom(mainAtom);

  return (
    <Pressable
      style={styles.container}
      onPress={() => setMain((prev) => ({ ...prev, moreOpen: undefined }))}
    >
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingRight: 18,
          paddingLeft: 18,
        }}
      >
        {folderList.length === 0 ? (
          <EmptyImage />
        ) : (
          folderList.map((item) => <ContentBox key={item.id} {...item} />)
        )}
      </ScrollView>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "90%",
  },
});

export default MainContentsContainer;
