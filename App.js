import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { Host } from "react-native-portalize";

import MainStack from "./src/features/stackNavigation/MainStack";

const App = () => {
  return (
    <ActionSheetProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Host>
            <StatusBar />
            <MainStack />
          </Host>
        </NavigationContainer>
      </SafeAreaView>
    </ActionSheetProvider>
  );
};

export default App;
