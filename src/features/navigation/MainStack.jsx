import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FolderContainer from "../folder/Container";
import FolderTitleContainer from "../folder/title/Container";
import MainContainer from "../main/Container";
import MainTitleContainer from "../main/title/Container";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        contentStyle: { backgroundColor: "#ffffff" },
      }}
    >
      <Stack.Screen
        name="Main"
        options={{
          header: MainTitleContainer,
        }}
        component={MainContainer}
      />
      <Stack.Screen
        name="Folder"
        options={{
          header: FolderTitleContainer,
        }}
        component={FolderContainer}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
