import { useContext } from "react";
import "./SettingModal.scss";
import { ChatContext, useThemeClass } from "../../00_Export";
import Theme from "../../05_Components/Theme/Theme";
const SettingModal = () => {
  const { isSettingModalOpen, setIsSettingModalOpen, isDarkMode } =
    useContext(ChatContext);
  const modal_bg = useThemeClass(isDarkMode);
  const handleSettingClose = () => {
    setIsSettingModalOpen(false);
  };
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
      {isSettingModalOpen && (
        <div onClick={handleSettingClose} className="setting_closer" />
      )}
    </>
  );
};

export default SettingModal;
