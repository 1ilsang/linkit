import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  Button,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import * as Sharing from "expo-sharing";
import * as ImageManipulator from "expo-image-manipulator";
import { RootSiblingParent } from "react-native-root-siblings";
import Toast from "react-native-root-toast";

const IU_IMAGE =
  "https://pbs.twimg.com/profile_images/1374979417915547648/vKspl9Et_400x400.jpg";

export default function App() {
  const [selectedImage, setSelectedImage] = useState(IU_IMAGE);

  const showToast = () => {
    Toast.show("This is toast!", {
      duration: Toast.durations.LONG,
      position: Toast.positions.TOP,
    });
  };
  const openImagePickerAsync = async () => {
    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) return;
    setSelectedImage(pickerResult.uri);
  };
  const openShareDialogAsync = async () => {
    if (Platform.OS === "web") {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }
    const imageTmp = await ImageManipulator.manipulateAsync(selectedImage);
    await Sharing.shareAsync(imageTmp.uri);
  };

  return (
    <RootSiblingParent>
      <View style={styles.container}>
        <Image
          source={{
            uri: selectedImage,
          }}
          style={{ width: 150, height: 110, resizeMode: "contain" }}
        />
        <Button title="Show Toast" onPress={showToast} />

        <Text>오... 나 iOS 개발 할수 있을 지도..?</Text>

        <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
          <Text style={styles.buttonText}>Pick a photo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
          <Text style={styles.buttonText}>Share this photo</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    </RootSiblingParent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
});
