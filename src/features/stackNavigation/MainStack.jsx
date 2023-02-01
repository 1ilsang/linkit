import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FolderContainer from "../folder/components/Container";
import FolderTitleContainer from "../folder/components/title/Container";
import FolderCreateEditContainer from "../folderCreateEdit/Container";
import FolderCreateEditTitleContainer from "../folderCreateEdit/title/Container";
import LinkAdderContainer from "../linkAdder/Container";
import LinkAdderTitleContainer from "../linkAdder/title/Container";
import SearchContainer from "../search/Container";
import SearchTitleContainer from "../search/title/Container";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Root"
      screenOptions={{
        contentStyle: { backgroundColor: "#ffffff" },
      }}
    >
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search"
        options={{
          header: SearchTitleContainer,
        }}
        component={SearchContainer}
      />
      <Stack.Screen
        name="FolderCreateEdit"
        options={{
          header: FolderCreateEditTitleContainer,
        }}
        component={FolderCreateEditContainer}
      />
      <Stack.Screen
        name="LinkAdder"
        options={{
          header: LinkAdderTitleContainer,
        }}
        component={LinkAdderContainer}
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
