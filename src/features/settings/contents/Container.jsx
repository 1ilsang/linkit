import ToggleBox from "./ToggleBox";
import InfoBox from "./InfoBox";
import { useAtom } from "jotai";
import { appEnvAtom } from "../../../shared/atoms";
import { LOCAL_STORAGE_KEY, save } from "../../../shared/utils/localStorage";

const SettingsContentContainer = () => {
  const [appEnv, setAppEnv] = useAtom(appEnvAtom);
  const { defaultBrowser, clipboardLinkAutoPaste } = appEnv;

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
  const handleClipboardLinkAutoPasteToggle = () => {
    setAppEnv((prev) => {
      const next = {
        ...prev,
        clipboardLinkAutoPaste: !prev.clipboardLinkAutoPaste,
      };
      save(LOCAL_STORAGE_KEY.appEnv, next);
      return next;
    });
  };

  return (
    <>
      <ToggleBox
        title="링크 설정"
        list={[
          {
            content: "기본 브라우저 앱으로 링크 열기",
            description:
              "링킷 앱 내 저장된 링크 터치 시 기본 브라우저 앱으로 링크 열기 또는 링킷 앱 내에서 링크 열기 등 링크를 여는 방법을 설정할 수 있어요.",
            onPress: handleDefaultBrowserToggle,
            selected: defaultBrowser,
          },
          {
            content: "클립보드 링크 자동으로 붙여넣기",
            description:
              "링킷 앱에 링크 추가 시 클립보드에 복사된 링크를 자동으로 붙여 넣거나 수동으로 붙여 넣을 수 있어요.",
            onPress: handleClipboardLinkAutoPasteToggle,
            selected: clipboardLinkAutoPaste,
          },
        ]}
      />
      <InfoBox />
    </>
  );
};

export default SettingsContentContainer;
