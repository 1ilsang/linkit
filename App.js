import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import MainStack from "./src/features/stackNavigation/MainStack";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar />
        <MainStack />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
