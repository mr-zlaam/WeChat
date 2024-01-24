import {} from "react";
import { IoMdSettings } from "react-icons/io";
import "./Setting.scss";

const Setting = () => {
  return (
    <>
      <div className="setting">
        <IoMdSettings className="create_setting_icon" />
        <span className="tooltip_setting">Setting</span>
      </div>
    </>
  );
};

export default Setting;
