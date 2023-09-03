import { Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import IconFactory from "./IconFactory";

const LinkAddButton = ({ id }) => {
  const navigation = useNavigation();

  const handlePressClick = () => {
    navigation.push("LinkAdder", { id });
  };

  return (
    <Pressable onPress={handlePressClick} hitSlop={10}>
      <IconFactory icon={"Plus"} size={24} />
    </Pressable>
  );
};

const styles = StyleSheet.create({});

export default LinkAddButton;
