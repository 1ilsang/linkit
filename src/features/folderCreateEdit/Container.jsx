import { useNavigation } from "@react-navigation/native";
import { useAtom } from "jotai";
import { useEffect } from "react";
import {
  Alert,
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { folderListAtom } from "../../shared/atoms";
import { createEditAtom, initialCreateEdit } from "./atoms";

import FolderCreateEditContentContainer from "./contents/Container";

const FolderCreateEditContainer = (props) => {
  const navigation = useNavigation();

  const [, setCreateEdit] = useAtom(createEditAtom);
  const [folderList] = useAtom(folderListAtom);

  useEffect(() => {
    const id = props.route.params.id;
    if (typeof id === "undefined") {
      setCreateEdit({ ...initialCreateEdit });
      return;
    }
    const selectedFolder = folderList.find((item) => item.id === id);
    if (!selectedFolder) {
      Alert.alert("데이터 로드 실패");
      navigation.navigate("Main");
      return;
    }
    setCreateEdit({ ...selectedFolder });
  }, [props.route.params.id]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
          <FolderCreateEditContentContainer {...props} />
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 18,
    paddingRight: 18,
  },
});

export default FolderCreateEditContainer;
