import {} from "react";
import { AccountIcon, Create_Room, Setting } from "../../00_Export";
import "./Navbar.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
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
            <Create_Room />
          </div>
          <div className="setting">
            <Setting />
          </div>
          <div className="account">
            <AccountIcon />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
