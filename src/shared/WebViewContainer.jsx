import { Button, StyleSheet, Dimensions, View } from "react-native";
import { WebView } from "react-native-webview";

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const WebViewContainer = ({ uri, onClose }) => {
  if (!uri) return null;

  return (
    <View style={styles.container}>
      <WebView source={{ uri }} style={styles.webview} />
      <Button title="close" onPress={onClose} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
    width: deviceWidth,
    height: deviceHeight,
  },
});

export default WebViewContainer;
