import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

const InfoBox = () => {
  const version = Constants.manifest.version;

  return (
    <View style={styles.toggleBox}>
      <Text style={styles.boxTitle}>정보</Text>
      <View style={styles.toggleContainer}>
        <Text style={styles.boxText}>앱 버전</Text>
        <Text>{version}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  toggleBox: {
    height: "100%",
    paddingTop: 27,
    paddingLeft: 27,
    paddingRight: 27,
    backgroundColor: "#ffffff",
  },
  boxTitle: {
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 29,
    paddingBottom: 17,
  },
  boxText: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 23,
  },
  boxDescription: {
    width: "70%",
    fontWeight: "300",
    fontSize: 12,
    lineHeight: 17,
    color: "#A5A5A5",
    paddingBottom: 20,
  },
  toggleContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default InfoBox;
