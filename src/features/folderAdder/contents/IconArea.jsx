import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import IconFactory from "../../../shared/icons/IconFactory";

const labelList = [
  ["Heart", "Star", "Moon", "Smiley", "SmileyMeh", "SmileyXEyes"],
  ["AndroidLogo", "Gift", "Flag", "Lightbulb", "PaintBrush", "Binoculars"],
  ["Movie", "TV", "Music", "Youtube", "Books", "BookOpen"],
  ["Cart", "Handbag", "CoatHanger", "Coffee", "Brandy", "ForkKnife"],
  ["Newspaper", "Article", "File", "PaperClip", "EnvelopeOpen", "Archive"],
  ["Exercise", "Bathtub", "Medi", "World", "Map", "Train"],
];

const IconItem = ({ label, onPress, checked }) => {
  const Icon = IconFactory[label];
  return (
    <Pressable onPress={() => onPress(label)} hitSlop={10}>
      <View style={checked ? styles.checked : {}}>{Icon}</View>
      {checked && <View style={styles.checkedBackground} />}
    </Pressable>
  );
};

const IconRow = ({ labels, onPress, checkedLabel }) => {
  return (
    <View style={styles.row}>
      {labels.map((label) => (
        <IconItem
          key={label}
          label={label}
          checked={checkedLabel === label}
          onPress={onPress}
        />
      ))}
    </View>
  );
};

const IconArea = () => {
  const [checkedIcon, setCheckedIcon] = useState();

  const handleIconPress = (icon) => setCheckedIcon(icon);

  return (
    <View style={styles.container}>
      {labelList.map((labels) => (
        <IconRow
          key={labels[0]}
          labels={labels}
          checkedLabel={checkedIcon}
          onPress={handleIconPress}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingTop: 15,
    paddingBottom: 1.5,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingBottom: 22.5,
  },
  checkedBackground: {
    position: "absolute",
    width: 32,
    height: 32,
    backgroundColor: "#a0a0a0",
    opacity: 0.2,
    borderRadius: 4,
    top: -4,
    left: -4,
  },
});

export default IconArea;
