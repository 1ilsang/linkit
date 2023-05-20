import { StyleSheet, Text } from "react-native";
import { getSearchedText } from "../../../../../../search/helpers";

const LinkItemDescription = ({ url, search }) => {
  const urlText = getSearchedText(url, search);

  return (
    <Text style={styles.url}>
      {urlText.searched ? (
        <>
          {urlText.prevText}
          <Text style={styles.search}>{urlText.searchedText}</Text>
          {urlText.nextText}
        </>
      ) : (
        urlText.originText
      )}
    </Text>
  );
};

const styles = StyleSheet.create({
  url: {
    height: 17,
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: -0.005,
    color: "#A5A5A5",
  },
  search: {
    color: "#3583F0",
  },
});

export default LinkItemDescription;
