import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

import MainStack from "./src/features/stackNavigation/MainStack";

const App = () => {
  return (
    <ActionSheetProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <StatusBar />
          <MainStack />
        </NavigationContainer>
      </SafeAreaView>
    </ActionSheetProvider>
  );
};

export default App;
