import { useAtom } from "jotai";
import { Alert, Linking, ScrollView, StyleSheet, View } from "react-native";
import { globalSearchAtom } from "../atoms";
import EmptyImage from "./EmptyImage";
import LinkItemBodyContainer from "../../folder/components/contents/links/item/body/Container";
import { appEnvAtom } from "../../../shared/atoms";

const SearchScrollView = () => {
  const [globalSearch, setGlobalSearch] = useAtom(globalSearchAtom);
  const [appEnv] = useAtom(appEnvAtom);

  const { searchedList, searchWord } = globalSearch;

  const handleBodyClick = (url) => {
    const webView = {
      url,
    };
    if (appEnv.defaultBrowser) {
      Linking.openURL(url).catch(() => {
        Alert.alert("Error", "웹사이트를 열수 없어요. URL을 확인해 주세요.");
      });
      webView.url = undefined;
    }

    setGlobalSearch((prev) => {
      const isExist = prev.recentSearchList.find(
        (keyword) => keyword === searchWord
      );
      if (isExist) return prev;
      return {
        ...prev,
        recentSearchList: [...prev.recentSearchList, searchWord],
        webView,
      };
    });
  };

  if (!searchWord) return null;

  return (
    <ScrollView>
      {searchedList.length === 0 ? (
        <EmptyImage />
      ) : (
        <View style={styles.container}>
          {searchedList.map(({ linkName, url, id }) => (
            <LinkItemBodyContainer
              key={id}
              linkName={linkName}
              url={url}
              search={searchWord}
              onBodyClick={() => handleBodyClick(url)}
            />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 14,
  },
});

export default SearchScrollView;
