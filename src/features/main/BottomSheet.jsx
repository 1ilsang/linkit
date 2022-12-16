import { useNavigation } from "@react-navigation/native";
import { forwardRef } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { Modalize } from "react-native-modalize";
import { Portal } from "react-native-portalize";

import FolderAddButton from "../shared/icons/FolderAddButton";
import LinkButton from "../shared/icons/LinkButton";

const BottomSheet = forwardRef(({}, ref) => {
  const navigation = useNavigation();

  const handleLinkAddClick = () => {
    ref.current.close();
  };
  const handleFolderAddClick = () => {
    ref.current.close();
    navigation.push("FolderAdder");
  };

  return (
    <Portal>
      <Modalize ref={ref} snapPoint={184} handlePosition="inside">
        <View style={styles.container}>
          <Pressable style={styles.content} onPress={handleLinkAddClick}>
            <LinkButton style={styles.icon} />
            <Text>링크 추가</Text>
          </Pressable>
          <Pressable style={styles.content} onPress={handleFolderAddClick}>
            <FolderAddButton style={styles.icon} />
            <Text>폴더 생성</Text>
          </Pressable>
        </View>
      </Modalize>
    </Portal>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    paddingTop: 42,
    height: 214,
    borderRadius: 30,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 12,
    paddingRight: 24,
    paddingBottom: 24,
    paddingLeft: 24,
  },
  icon: {
    paddingRight: 20,
  },
});

export default BottomSheet;
