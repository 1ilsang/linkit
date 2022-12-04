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
import MainTitleContainer from "./src/features/main/title/Container";
import MainContainer from "./src/features/main/Container";

const IU_IMAGE =
  "https://pbs.twimg.com/profile_images/1374979417915547648/vKspl9Et_400x400.jpg";

const App = () => {
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
      <StatusBar style={styles.statusbar} />
      <MainContainer />
      {/* <View style={styles.container}>
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

        
      </View> */}
    </RootSiblingParent>
  );
};

const styles = StyleSheet.create({
  statusbar: {
    width: 375,
    height: 47,
    left: 0,
    top: 0,
    background: "#FFFFFF",
  },
});

export default App;
