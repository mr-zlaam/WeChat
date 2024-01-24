import {} from "react";
import { AccountIcon, Create_Room } from "../../00_Export";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <>
      <header className="header_container">
        <div className="logo">
          <img src="/chat-io-logo.png" alt="logo" />
        </div>
        <div className="navigation_bar">
          <div className="create_room">
            <Create_Room />
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
