import { View, Button, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const WebViewContainer = ({ uri, onClose }) => {
  if (!uri) return null;

  return (
    <View style={styles.container}>
      <WebView source={{ uri }} style={{ flex: 1 }} />
      <Button title="close" onPress={onClose} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WebViewContainer;
