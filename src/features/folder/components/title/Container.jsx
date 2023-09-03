import { Pressable, StyleSheet, Text, View } from "react-native";
import MoreButton from "../../../../shared/icons/MoreButton";
import CommonTitleContainer from "../../../../shared/navigation/CommonContainer";
import HeaderLeftButton from "../../../../shared/navigation/HeaderLeftButton";
import { MODE } from "../../constants";
import useFolderTitle from "../../hooks/useTitle";
import LinkAddButton from "../../../../shared/icons/LinkAddButton";

const FolderTitleContainer = (props) => {
  const {
    id,
    handleTitleAreaPress,
    title,
    titleMoreOpen,
    moreList,
    deleteLinkList,
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
              <Text style={styles.subText}>취소</Text>
            </Pressable>
            <Text style={styles.title}>목록 편집</Text>
            <Pressable
              onPress={handleDeleteLinkPress}
              disabled={deleteLinkList.length === 0}
              hitSlop={30}
            >
              <Text
                style={
                  deleteLinkList.length === 0 ? styles.disabled : styles.delete
                }
              >
                삭제
              </Text>
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
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            <LinkAddButton id={id} />
          </View>
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
  titleContainer: {
    width: "90%",
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
  subText: {
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 26.06,
  },
  delete: {
    color: "#FF5C5D",
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 26.06,
  },
  disabled: {
    color: "#CFCFCF",
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 26.06,
  },
});

export default FolderTitleContainer;
