import { useContext } from "react";
import { ChatContext, Routers } from "../00_Export";
import "./Parent.scss";
import useThemeClass from "../08_Hooks/useTheme_Class";
const Parent = () => {
  const { isDarkMode } = useContext(ChatContext);
  const themeMode = useThemeClass(isDarkMode);

  return (
    <div className={`parent ${themeMode}`}>
      {/* Navbar will Appear Here */}
      <Routers />
    </div>
  );
};

export default Parent;
