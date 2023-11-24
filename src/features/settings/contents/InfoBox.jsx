import {
  Alert,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Constants from "expo-constants";
import { SERVICE_URL } from "../constants";
import IconFactory from "../../../shared/icons/IconFactory";

const InfoBox = () => {
  const version = Constants.manifest.version;
  const handleServiceLinkClick = () => {
    Linking.openURL(SERVICE_URL).catch(() => {
      Alert.alert("Error", "웹사이트를 열수 없어요. URL을 확인해 주세요.");
    });
  };

  return (
    <View style={styles.toggleBox}>
      <Text style={styles.boxTitle}>정보</Text>
      <View style={styles.infoContainer}>
        <Pressable style={styles.infoList} onPress={handleServiceLinkClick}>
          <Text style={styles.boxText}>서비스 소개</Text>
          <IconFactory icon="CaretRight" size={18} color="#262424" />
        </Pressable>
        <View style={styles.infoList}>
          <Text style={styles.boxText}>앱 버전</Text>
          <Text style={styles.boxDescription}>{version}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  toggleBox: {
    height: "100%",
    paddingLeft: 27,
    paddingRight: 27,
    backgroundColor: "#ffffff",
  },
  boxTitle: {
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 29,
    paddingBottom: 20,
  },
  boxText: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 23,
  },
  boxDescription: {
    color: "#262424",
  },
  infoContainer: {
    width: "100%",
    display: "flex",
  },
  infoList: {
    paddingBottom: 20,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default InfoBox;
