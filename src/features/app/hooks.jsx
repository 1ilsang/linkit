import { useAtom } from "jotai";
import { appEnvAtom, folderListAtom, initialApp } from "../../shared/atoms";
import { useEffect, useLayoutEffect, useState } from "react";
import {
  LOCAL_STORAGE_KEY,
  load,
  remove,
  save,
} from "../../shared/utils/localStorage";
import { FOLDER_SORT } from "../../shared/constants/folder";
import { colorSets } from "../../shared/constants/colors";
import * as SplashScreen from "expo-splash-screen";

const useApp = () => {
  const [appEnv, setAppEnv] = useAtom(appEnvAtom);
  const [, setFolderList] = useAtom(folderListAtom);

  const [appIsReady, setAppIsReady] = useState(false);

  useLayoutEffect(() => {
    const loadLocalStorage = async () => {
      // await remove(LOCAL_STORAGE_KEY.appEnv);
      // await remove(LOCAL_STORAGE_KEY.folderList);
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

  useEffect(() => {
    async function waitSplash() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2500));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }
    waitSplash();
  }, []);

  return {
    appEnv,
    appIsReady,
  };
};

export default useApp;
