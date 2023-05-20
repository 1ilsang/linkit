import { Pressable, StyleSheet, Text, View } from "react-native";
import { CheckCircle, Circle } from "phosphor-react-native";
import IconFactory from "../../../../../shared/icons/IconFactory";

const EditItem = ({ id, linkName, url, onCirclePress, checked }) => {
  const handleCirclePress = () => {
    onCirclePress(id);
  };

  return (
    <Pressable style={styles.container} onPress={handleCirclePress}>
      {checked ? <CheckCircle weight="fill" /> : <Circle />}
      <View style={styles.contentContainer}>
        <View style={styles.thumbnail}>
          <IconFactory icon="Image" size={40} color="#CFCFCF" />
        </View>
        <View style={styles.content}>
          <Text style={styles.linkName}>{linkName}</Text>
          <Text style={styles.url}>{url}</Text>
        </View>
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
    paddingLeft: 18,
    paddingRight: 18,
  },
  contentContainer: {
    paddingLeft: 12.25,
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
  linkName: {
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

export default EditItem;
