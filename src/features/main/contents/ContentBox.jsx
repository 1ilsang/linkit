import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import MoreButton from "../../../shared/icons/MoreButton";
import IconFactory from "../../../shared/icons/IconFactory";
import { useAtom } from "jotai";
import { mainAtom } from "../atoms";

const ContentBox = ({ id, title, description, color, icon = "Heart" }) => {
  const navigation = useNavigation();

  const [main, setMain] = useAtom(mainAtom);
  const { moreOpen } = main;

  const IconComponent = IconFactory[icon];

  const moreList = [
    {
      name: "폴더 편집",
      onPress: () => {
        setMain((prev) => ({ ...prev, moreOpen: undefined }));
        navigation.push("FolderCreateEdit", { type: "edit", id });
      },
      icon: "PencilSimple",
    },
    { name: "폴더 삭제", onPress: () => {}, icon: "Trash" },
  ];

  const handlePressClick = () => {
    setMain((prev) => ({ ...prev, moreOpen: undefined }));
    navigation.push("Folder", { title, description });
  };
  const handleMoreClick = () => {
    if (!moreOpen || (moreOpen && moreOpen !== id)) {
      setMain((prev) => ({ ...prev, moreOpen: id }));
      return;
    }
    setMain((prev) => ({ ...prev, moreOpen: undefined }));
  };

  return (
    <Pressable
      style={{ ...styles.container, backgroundColor: color }}
      onPress={handlePressClick}
    >
      <View style={styles.top}>
        {IconComponent}
        <MoreButton
          size={16}
          open={id === moreOpen}
          list={moreList}
          onPress={handleMoreClick}
        />
      </View>
      <View style={styles.contents}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 20,
    paddingTop: 18,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 24,

    width: 160,
    height: 152,

    backgroundColor: "black",
    borderRadius: 16,
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
    zIndex: 300,
    width: 120,
    height: 24,
  },
  contents: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",

    width: 120,
    height: 76,
  },
  title: {
    width: 120,
    height: 38,

    fontWeight: "590",
    fontSize: 16,
    lineHeight: 19,

    color: "#FFFFFF",
  },
  description: {
    width: 120,
    height: 14,

    fontSize: 12,
    lineHeight: 14,

    color: "#FFFFFF",
  },
});

export default ContentBox;
