import { useResetAtom } from "jotai/utils";
import { useEffect } from "react";
import { Keyboard, Pressable, StyleSheet, View } from "react-native";
import { linkAdderAtom } from "./atoms";

import LinkAdderContentContainer from "./contents/Container";

const LinkAdderContainer = (props) => {
  const resetLinkAdder = useResetAtom(linkAdderAtom);

  useEffect(() => {
    return () => {
      resetLinkAdder();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <LinkAdderContentContainer id={props.route?.params?.id} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 18,
    paddingRight: 18,
  },
});

export default LinkAdderContainer;
