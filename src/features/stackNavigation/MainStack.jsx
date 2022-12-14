import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FolderContainer from "../folder/Container";
import FolderTitleContainer from "../folder/title/Container";
import FolderCreateEditContainer from "../folderCreateEdit/Container";
import FolderCreateEditTitleContainer from "../folderCreateEdit/title/Container";
import LinkAdderContainer from "../linkAdder/Container";
import LinkAdderTitleContainer from "../linkAdder/title/Container";
import MainContainer from "../main/Container";
import MainTitleContainer from "../main/title/Container";
import SearchContainer from "../search/Container";
import SearchTitleContainer from "../search/title/Container";
import SettingsContainer from "../settings/Container";
import SettingsTitleContainer from "../settings/title/Container";

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
      <Stack.Screen
        name="Settings"
        options={{
          header: SettingsTitleContainer,
        }}
        component={SettingsContainer}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
