import { StyleSheet, Text, View, Pressable } from "react-native";
import MoreButton from "../../../shared/icons/MoreButton";
import IconFactory from "../../../shared/icons/IconFactory";
import { Link } from "phosphor-react-native";
import useContentBox from "../hooks/useContentBox";

const ContentBox = (props) => {
  const { id, title, description, defaultFolder, color, icon, linkList } =
    props;

  const { handleMoreClick, handlePressClick, moreList, moreOpen } =
    useContentBox(props);

  return (
    <Pressable
      style={{ ...styles.container, backgroundColor: color }}
      onPress={handlePressClick}
    >
      <View style={styles.top}>
        <IconFactory icon={icon} color="#FFFFFF" />
        <MoreButton
          size={16}
          open={id === moreOpen}
          list={moreList}
          onPress={handleMoreClick}
          defaultFolder={defaultFolder}
        />
      </View>
      <View style={styles.contents}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.linkContent}>
        <Link color="white" size={17} />
        <Text style={styles.linkText}>{linkList.length}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",

    paddingTop: 18,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 24,

    marginBottom: 20,

    width: 162,
    height: 160,

    backgroundColor: "black",
    borderRadius: 16,
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: 10,
    zIndex: 300,
    width: 120,
    height: 24,
  },
  contents: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",

    marginBottom: 10,

    width: 120,
    height: 55,
  },
  linkContent: {
    width: 120,
    display: "flex",

    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  linkText: {
    color: "#FFFFFF",
    paddingLeft: 2,
  },
  title: {
    width: 120,
    height: 28,

    fontWeight: "500",
    fontSize: 18,
    lineHeight: 23,

    color: "#FFFFFF",
  },
  description: {
    width: 120,
    height: 14,

    fontSize: 12,
    lineHeight: 14,

    color: "#FFFFFF",
  },
});

export default ContentBox;
