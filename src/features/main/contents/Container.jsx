import { ScrollView, StyleSheet, View } from "react-native";
import ContentBox from "./ContentBox";

const dumpList = [
  {
    title: "linklink",
    description: "더미데이터 만들기 짱나요",
    iconType: "heart",
  },
  {
    title: "링크",
    description: "더미데이터 만들기 짱나요2",
    iconType: "light",
  },
  { title: "it", description: "더미데이터 만들기 짱나요3", iconType: "heart" },
  {
    title: "itit",
    description: "더미데이터 만들기 짱나요12",
    iconType: "heart",
  },
  { title: "dodo", description: "Wkdskdy", iconType: "light" },
  { title: "do", description: "aksemfrl", iconType: "heart" },
  { title: "1il", description: "ejalepdlxj", iconType: "heart" },
  { title: "sang", description: "wow", iconType: "heart" },
  { title: "chul", description: "this is dump", iconType: "light" },
  { title: "wow", description: "dump dump", iconType: "heart" },
  { title: "line", description: "IVE", iconType: "heart" },
  { title: "blind", description: "LOVE DIVE", iconType: "light" },
  { title: "smilegate", description: "AFTER LIKE", iconType: "heart" },
  { title: "stroke", description: "LE LE LE LE", iconType: "heart" },
];

const MainContentsContainer = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        {dumpList.map((item) => (
          <ContentBox key={item.title} {...item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "88%",
  },
});

export default MainContentsContainer;
