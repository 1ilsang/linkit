import { useAtom } from "jotai";
import { ScrollView, StyleSheet, View } from "react-native";
import { folderListAtom } from "../../../shared/atoms";
import ContentBox from "./ContentBox";

const MainContentsContainer = ({ scrollViewRef }) => {
  const [folderList] = useAtom(folderListAtom);

  return (
    <View style={styles.container}>
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
          <ContentBox key={item.title} {...item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "90%",
  },
});

export default MainContentsContainer;
