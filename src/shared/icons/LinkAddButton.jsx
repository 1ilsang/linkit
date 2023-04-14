import { Pressable, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LinkAddButton = ({ style = {}, id }) => {
  const navigation = useNavigation();

  const handlePressClick = () => {
    navigation.push("LinkAdder", { id });
  };

  return (
    <Pressable onPress={handlePressClick} hitSlop={10}>
      <Text style={style}>+</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({});

export default LinkAddButton;
