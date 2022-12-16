import { Pressable, StyleSheet, Text, View } from "react-native";
import MoreButton from "../../shared/icons/MoreButton";
import NoImage from "../../shared/icons/NonImage";

const FolderContentItem = ({ name, url }) => {
  return (
    <Pressable style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.thumbnail}>
          <NoImage size={40} />
        </View>
        <View style={styles.content}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.url}>{url}</Text>
        </View>
        <MoreButton />
      </View>
    </Pressable>
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
  },
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 54,
  },
  thumbnail: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 54,
    height: 54,
    marginRight: 12,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
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
  name: {
    height: 19,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: -0.005,
    color: "#2D264B",
  },
  url: {
    height: 17,
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: -0.005,
    color: "#A5A5A5",
  },
});

export default FolderContentItem;
