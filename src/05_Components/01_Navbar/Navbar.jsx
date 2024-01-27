import {} from "react";
import { AccountIcon, Create_Room, Setting } from "../../00_Export";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  const create_roomLocation = location.pathname === "/";
  const chat_Location = location.pathname === "/chat";
  const settingLocation = location.pathname === "/setting";

  return (
    <>
      <header className="header_container">
        <div className="logo">
          <Link to={"/"}>
            <img src="/chat-io-logo.png" alt="logo" />
          </Link>
        </div>
        <div className="navigation_bar">
          <div className="create_room">
            {create_roomLocation || chat_Location ? null : <Create_Room />}
          </div>
          <div className="setting">{settingLocation ? null : <Setting />} </div>
          <div className="account">
            <AccountIcon />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
