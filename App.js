import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useAtom } from "jotai";
import { NavigationContainer } from "@react-navigation/native";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { Host } from "react-native-portalize";
import { RootSiblingParent } from "react-native-root-siblings";

import MainStack from "./src/features/stackNavigation/MainStack";
import { useLayoutEffect } from "react";
import { appEnvAtom, folderListAtom, initialApp } from "./src/shared/atoms";
import { load, LOCAL_STORAGE_KEY, save } from "./src/shared/utils/localStorage";
import { colorSets } from "./src/shared/constants/colors";
import { FOLDER_SORT } from "./src/shared/constants/folder";

const App = () => {
  const [, setAppEnv] = useAtom(appEnvAtom);
  const [, setFolderList] = useAtom(folderListAtom);

  useLayoutEffect(() => {
    const loadLocalStorage = async () => {
      const data = await load(LOCAL_STORAGE_KEY.folderList);
      const appData = await load(LOCAL_STORAGE_KEY.appEnv);
      const selectedIndex = Math.floor((Math.random() * 10) % 7);
      const initData =
        data && data.length > 0
          ? data
          : [
              {
                id: Number(new Date()),
                title: "기본 폴더",
                description: "기본 폴더에요.",
                defaultFolder: true,
                icon: "Heart",
                sort: FOLDER_SORT.DATE,
                color: colorSets[selectedIndex],
                linkList: [],
              },
            ];
      const initAppEnv = appData ? appData : initialApp;
      setFolderList(initData);
      setAppEnv(initAppEnv);
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
