import ToggleBox from "./ToggleBox";
import InfoBox from "./InfoBox";
import { useAtom } from "jotai";
import { appEnvAtom } from "../../../shared/atoms";
import { LOCAL_STORAGE_KEY, save } from "../../../shared/utils/localStorage";

const SettingsContentContainer = () => {
  const [appEnv, setAppEnv] = useAtom(appEnvAtom);
  const { defaultBrowser } = appEnv;

  const handleDefaultBrowserToggle = () => {
    setAppEnv((prev) => {
      const next = {
        ...prev,
        defaultBrowser: !prev.defaultBrowser,
      };
      save(LOCAL_STORAGE_KEY.appEnv, next);
      return next;
    });
  };
  const description = defaultBrowser ? '링킷에 저장된 링크를 기기의 기본 브라우저 앱으로 열 수 있어요.' : '링킷에 저장된 링크를 링킷 앱 내에서 열 수 있어요.'

  return (
    <>
      <ToggleBox
        title="링크 설정"
        list={[
          {
            content: "기본 브라우저 앱으로 링크 열기",
            description,
            onPress: handleDefaultBrowserToggle,
            selected: defaultBrowser,
          },
        ]}
      />
      <InfoBox />
    </>
  );
};

export default SettingsContentContainer;
