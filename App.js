import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { Host } from "react-native-portalize";
import { RootSiblingParent } from "react-native-root-siblings";
import * as SplashScreen from "expo-splash-screen";

import MainStack from "./src/features/stackNavigation/MainStack";
import useApp from "./src/features/app/hooks";
import OnBoardingContainer from "./src/features/onBoarding/Container";
import { useRef } from "react";
import Toast from "./src/shared/toast/Toast";
import { toastAtom } from "./src/shared/atoms";
import { useAtom } from "jotai";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const { appIsReady, appEnv } = useApp();
  const ref = useRef(null);
  const [toast] = useAtom(toastAtom);

  if (!appIsReady) {
    return null;
  }

  return (
    <ActionSheetProvider>
      <RootSiblingParent>
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
            <Host>
              <StatusBar />
              {appEnv.onBoarding ? <MainStack /> : <OnBoardingContainer />}
              <Toast
                ref={ref}
                message={toast.message}
                coloredMessage={toast.coloredMessage}
              />
            </Host>
          </NavigationContainer>
        </SafeAreaView>
      </RootSiblingParent>
    </ActionSheetProvider>
  );
};

export default App;
