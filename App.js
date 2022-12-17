import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { Host } from "react-native-portalize";
import { RootSiblingParent } from "react-native-root-siblings";

import MainStack from "./src/features/stackNavigation/MainStack";

const App = () => {
  return (
    <ActionSheetProvider>
      <RootSiblingParent>
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
            <Host>
              <StatusBar />
              <MainStack />
            </Host>
          </NavigationContainer>
        </SafeAreaView>
      </RootSiblingParent>
    </ActionSheetProvider>
  );
};

export default App;
