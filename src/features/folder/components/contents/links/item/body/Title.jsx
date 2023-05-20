import { StyleSheet, Text } from "react-native";
import IconFactory from "../../../../../../../shared/icons/IconFactory";
import { getSearchedText } from "../../../../../../search/helpers";

const LinkItemTitle = ({ pin, linkName, search }) => {
  const linkText = getSearchedText(linkName, search);

  return (
    <Text style={styles.linkName}>
      {linkText.searched ? (
        <>
          {linkText.prevText}
          <Text style={styles.search}>{linkText.searchedText}</Text>
          {linkText.nextText}
        </>
      ) : (
        linkText.originText
      )}
      {pin && (
        <IconFactory
          icon="PushPin"
          size="12"
          weight="fill"
          color="#A5A5A5"
          style={{ paddingLeft: 20 }}
        />
      )}
    </Text>
  );
};

const styles = StyleSheet.create({
  linkName: {
    height: 19,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: -0.005,
    color: "#2D264B",
  },
  search: {
    color: "#3583F0",
  },
});

export default LinkItemTitle;
