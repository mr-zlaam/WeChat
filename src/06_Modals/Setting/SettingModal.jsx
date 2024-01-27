import { useContext } from "react";
import "./SettingModal.scss";
import { ChatContext, useThemeClass } from "../../00_Export";
import Theme from "../../05_Components/Theme/Theme";
const SettingModal = () => {
  const { isSettingModalOpen, isDarkMode } = useContext(ChatContext);
  const modal_bg = useThemeClass(isDarkMode);
  return (
    <>
      <div
        className={`${
          isSettingModalOpen
            ? "setting_modal_visible "
            : "setting_modal_invisible"
        } `}
      >
        <div className={modal_bg}>
          <h1>Select Theme</h1>
          <p>
            <Theme />
          </p>
        </div>
      </div>
    </>
  );
};

export default SettingModal;
