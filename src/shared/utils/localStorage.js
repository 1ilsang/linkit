import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const LOCAL_STORAGE_KEY = {
  folderList: "folderList",
};

export const save = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error(e);
    Alert.alert("데이터 저장 실패");
  }
};

export const load = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return JSON.parse(data);
  } catch (e) {
    console.error(e);
    Alert.alert("데이터 로드 실패");
  }
};

export const remove = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error(e);
    Alert.alert("데이터 삭제 실패");
  }
};
