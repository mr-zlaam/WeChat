import { useContext } from "react";
import { IoMdSettings } from "react-icons/io";
import "./Setting.scss";
import { ChatContext } from "../../00_Export";

const Setting = () => {
  const { setIsSettingModalOpen } = useContext(ChatContext);
  const handleSettingModalOpen = () => {
    setIsSettingModalOpen((prev) => !prev);
  };

  return (
    <>
      <div className="setting">
        <IoMdSettings
          className="create_setting_icon"
          onClick={handleSettingModalOpen}
        />
        <span className="tooltip_setting">Setting</span>
      </div>
    </>
  );
};

export default Setting;
