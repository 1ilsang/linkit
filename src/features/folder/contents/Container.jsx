import { Text } from "react-native";

const FolderContentContainer = (props) => {
  return (
    <>
      <Text>Descriptions: {props.route.params.description}</Text>
    </>
  );
};

export default FolderContentContainer;
