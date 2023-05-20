import { Pressable, StyleSheet, View } from "react-native";
import Thumbnail from "./Thumbnail";
import LinkItemTitle from "./Title";
import LinkItemDescription from "./Description";
import MoreButton from "../../../../../../../shared/buttons/More";

const LinkItemBodyContainer = ({
  onBodyClick,
  linkName,
  search,
  pin,
  url,
  onMoreClick,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Thumbnail url={url} />
        <Pressable style={styles.content} onPress={onBodyClick}>
          <LinkItemTitle pin={pin} linkName={linkName} search={search} />
          <LinkItemDescription url={url} search={search} />
        </Pressable>
        {onMoreClick && <MoreButton onClick={onMoreClick} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 18,
    paddingRight: 18,
    backgroundColor: "#FFFFFF",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 54,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: 244,
    height: 54,
    marginRight: 16,
  },
});

export default LinkItemBodyContainer;
