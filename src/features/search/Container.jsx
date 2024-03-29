import { Keyboard, Pressable, StyleSheet, View } from "react-native";
import SearchContentContainer from "./contents/Container";
import WebViewContainer from "../../shared/WebViewContainer";
import { useAtom } from "jotai";
import { globalSearchAtom } from "./atoms";
import { useEffect } from "react";

const SearchContainer = () => {
  const [globalSearch, setGlobalSearch] = useAtom(globalSearchAtom);

  const { webView } = globalSearch;

  const handleWebViewClose = () => {
    setGlobalSearch((prev) => ({ ...prev, webView: {} }));
  };

  useEffect(() => {
    return () => {
      setGlobalSearch((prev) => ({
        ...prev,
        webView: {},
        searchWord: "",
        searchedList: [],
      }));
    };
  }, []);

  return (
    <View style={styles.container}>
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <SearchContentContainer />
      </Pressable>
      <WebViewContainer uri={webView.url} onClose={handleWebViewClose} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SearchContainer;
