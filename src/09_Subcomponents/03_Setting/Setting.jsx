import { useContext } from "react";
import { IoMdSettings } from "react-icons/io";
import "./Setting.scss";
import { ChatContext } from "../../00_Export";

const Setting = () => {
  const { setIsSettingModalOpen } = useContext(ChatContext);
  const handleSettingModalOpen = () => {
    setIsSettingModalOpen(true);
  };

  return (
    <>
      <div onClick={handleSettingModalOpen} className="setting">
        <IoMdSettings className="create_setting_icon" />
        <span className="tooltip_setting">Setting</span>
      </div>
    </>
  );
};

export default Setting;
