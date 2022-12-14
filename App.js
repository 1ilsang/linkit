import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useAtom } from "jotai";
import { NavigationContainer } from "@react-navigation/native";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { Host } from "react-native-portalize";
import { RootSiblingParent } from "react-native-root-siblings";

import MainStack from "./src/features/stackNavigation/MainStack";
import { useLayoutEffect } from "react";
import { folderListAtom } from "./src/shared/atoms";
import { load, LOCAL_STORAGE_KEY, save } from "./src/shared/utils/localStorage";
import { colorSets } from "./src/shared/constants/colors";

const App = () => {
  const [, setFolderList] = useAtom(folderListAtom);

  useLayoutEffect(() => {
    const loadLocalStorage = async () => {
      const data = await load(LOCAL_STORAGE_KEY.folderList);
      const selectedIndex = Math.floor((Math.random() * 10) % 7);
      const initData =
        data && data.length > 0
          ? data
          : [
              {
                id: Number(new Date()),
                title: "기본 폴더",
                description: "기본 폴더에요.",
                icon: "Heart",
                color: colorSets[selectedIndex],
              },
            ];
      setFolderList(initData);
      await save(LOCAL_STORAGE_KEY.folderList, initData);
    };
    loadLocalStorage();
  }, []);

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
