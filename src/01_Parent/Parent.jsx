import { useContext } from "react";
import { ChatContext, Navbar, Routers } from "../00_Export";
import "./Parent.scss";
import useThemeClass from "../08_Hooks/useTheme_Class";
import { useLocation } from "react-router-dom";
const Parent = () => {
  const location = useLocation();
  const { isDarkMode } = useContext(ChatContext);
  const themeMode = useThemeClass(isDarkMode);
  const navLocation = location.pathname === "/login";
  const chatLocation = location.pathname === "/chat";
  return (
    <div className={`parent ${themeMode}`}>
      {navLocation || chatLocation ? null : <Navbar />}
      <Routers />
    </div>
  );
};

export default Parent;
