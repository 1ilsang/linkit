import { Pressable, StyleSheet, Text, View } from "react-native";
import MoreButton from "../../../../shared/icons/MoreButton";
import CommonTitleContainer from "../../../../shared/navigation/CommonContainer";
import HeaderLeftButton from "../../../../shared/navigation/HeaderLeftButton";
import { MODE } from "../../constants";
import useFolderTitle from "../../hooks/useTitle";

const FolderTitleContainer = (props) => {
  const {
    handleTitleAreaPress,
    title,
    titleMoreOpen,
    moreList,
    handleMoreClick,
    defaultFolder,
    mode,
    handleCancelEditPress,
    handleDeleteLinkPress,
  } = useFolderTitle(props);

  if (mode === MODE.edit) {
    return (
      <CommonTitleContainer onPress={handleTitleAreaPress}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Pressable onPress={handleCancelEditPress} hitSlop={30}>
              <Text>취소</Text>
            </Pressable>
            <Text style={styles.title}>목록 편집</Text>
            <Pressable onPress={handleDeleteLinkPress} hitSlop={30}>
              <Text style={styles.delete}>삭제</Text>
            </Pressable>
          </View>
        </View>
      </CommonTitleContainer>
    );
  }

  return (
    <CommonTitleContainer onPress={handleTitleAreaPress}>
      <View style={styles.container}>
        <HeaderLeftButton {...props} />
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <MoreButton
            style={{ color: "#262424" }}
            open={titleMoreOpen}
            list={moreList}
            onPress={handleMoreClick}
            defaultFolder={defaultFolder}
          />
        </View>
      </View>
    </CommonTitleContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 41,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 14,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 41,
    letterSpacing: 0.374,
    color: "#2D264B",
  },
  delete: {
    color: "#FF5C5D",
  },
});

export default FolderTitleContainer;
