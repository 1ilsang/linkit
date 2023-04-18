import { useState } from "react";
import ToggleBox from "./ToggleBox";
import InfoBox from "./InfoBox";

const SettingsContentContainer = () => {
  // TODO: localStorage
  const [push, setPush] = useState(true);

  const handlePushToggle = () => {
    setPush((prev) => !prev);
  };

  return (
    <>
      <ToggleBox
        style={{ paddingTop: 9 }}
        title="알림"
        list={[
          {
            content: "푸시 알림",
            description: "리마인드 알림 ~~~ 등을 알려드릴게요.",
            onPress: handlePushToggle,
            selected: push,
          },
        ]}
      />
      <ToggleBox
        title="링크 설정"
        list={[
          {
            content: "기본 브라우저 앱으로 링크 열기",
            description:
              "링킷 앱 내 저장된 링크 터치 시 기본 브라우저 앱으로 링크 열기 또는 링킷 앱 내에서 링크 열기 등 링크를 여는 방법을 설정할 수 있어요.",
            onPress: handlePushToggle,
            selected: push,
          },
          {
            content: "클립보드 링크 자동으로 붙여넣기",
            description:
              "링킷 앱에 링크 추가 시 클립보드에 복사된 링크를 자동으로 붙여 넣거나 수동으로 붙여 넣을 수 있어요.",
            onPress: handlePushToggle,
            selected: push,
          },
        ]}
      />
      <InfoBox />
    </>
  );
};

export default SettingsContentContainer;
