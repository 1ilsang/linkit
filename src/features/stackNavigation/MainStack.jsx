import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FolderContainer from "../folder/Container";
import FolderTitleContainer from "../folder/title/Container";
import FolderAdderContainer from "../folderAdder/Container";
import FolderAdderTitleContainer from "../folderAdder/title/Container";
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
        name="FolderAdder"
        options={{
          header: FolderAdderTitleContainer,
        }}
        component={FolderAdderContainer}
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
