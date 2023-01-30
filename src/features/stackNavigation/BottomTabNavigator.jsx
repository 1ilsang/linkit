import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainContainer from "../main/Container";
import NavbarContainer from "./bottom/Container";
import MainTitleContainer from "../main/title/Container";
import SettingsContainer from "../settings/Container";
import SettingsTitleContainer from "../settings/title/Container";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Main"
      tabBar={() => <NavbarContainer />}
    >
      <BottomTab.Screen
        name="Main"
        component={MainContainer}
        options={{ header: (props) => <MainTitleContainer {...props} /> }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsContainer}
        options={{ header: (props) => <SettingsTitleContainer {...props} /> }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
