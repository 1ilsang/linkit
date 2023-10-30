import { Button, StyleSheet, Dimensions, SafeAreaView, View } from "react-native";
import { WebView } from "react-native-webview";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const WebViewContainer = ({ uri, onClose }) => {
  if (!uri) return null;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header} >
        <Button title="close" onPress={onClose} />
      </View>
      <WebView source={{ uri }} style={styles.webview} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: windowHeight,
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: 'white',
    width: '100%'
  },
  webview: {
    flex: 1,
    height: windowHeight,
    width: windowWidth,
  },
});

export default WebViewContainer;
