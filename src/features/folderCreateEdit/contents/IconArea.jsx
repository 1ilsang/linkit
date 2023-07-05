import { useAtom } from "jotai";
import { Pressable, StyleSheet, View } from "react-native";
import IconFactory from "../../../shared/icons/IconFactory";
import { createEditAtom } from "../atoms";
import InputLabel from "../../../shared/inputBox/Label";

const labelList = [
  ["Heart", "Star", "Moon", "Smiley", "SmileyMeh", "SmileyXEyes"],
  ["AndroidLogo", "Gift", "Flag", "Lightbulb", "PaintBrush", "Binoculars"],
  ["Movie", "TV", "Music", "Youtube", "Books", "BookOpen"],
  ["Cart", "Handbag", "CoatHanger", "Coffee", "Brandy", "ForkKnife"],
  ["Newspaper", "Article", "File", "PaperClip", "EnvelopeOpen", "Archive"],
  ["Exercise", "Bathtub", "Medi", "World", "Map", "Train"],
];

const IconItem = ({ label, onPress, checked }) => {
  return (
    <Pressable onPress={() => onPress(label)} hitSlop={10}>
      <View
        style={
          checked
            ? { ...styles.icon, ...styles.checkedBackground }
            : styles.icon
        }
      >
        <IconFactory
          icon={label}
          weight={checked ? "fill" : undefined}
          color={checked ? "#FFFFFF" : undefined}
          style={checked ? styles.checked : {}}
        />
      </View>
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
  const [createEdit, setCreateEdit] = useAtom(createEditAtom);

  const handleIconPress = (icon) => {
    setCreateEdit((prev) => ({ ...prev, icon }));
  };

  return (
    <>
      <InputLabel label="아이콘" required />
      <View style={styles.container}>
        {labelList.map((labels) => (
          <IconRow
            key={labels[0]}
            labels={labels}
            checkedLabel={createEdit.icon}
            onPress={handleIconPress}
          />
        ))}
      </View>
    </>
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
  icon: {
    padding: 4,
  },
  checkedBackground: {
    backgroundColor: "black",
    borderRadius: 4,
  },
});

export default IconArea;
