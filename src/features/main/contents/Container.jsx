import { useAtom } from "jotai";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet } from "react-native";
import { folderListAtom } from "../../../shared/atoms";
import ContentBox from "./ContentBox";

const MainContentsContainer = ({ scrollViewRef }) => {
  const [folderList] = useAtom(folderListAtom);
  const [moreOpen, setMoreOpen] = useState();

  return (
    <Pressable style={styles.container} onPress={() => setMoreOpen(undefined)}>
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
        {folderList.map((item) => (
          <ContentBox
            key={item.id}
            {...item}
            moreOpen={moreOpen}
            setMoreOpen={setMoreOpen}
          />
        ))}
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
