import { useContext, useEffect } from "react";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import "./Theme.scss";
import { ChatContext } from "../../00_Export";
import useThemeClass from "../../08_Hooks/useTheme_Class";

const Theme = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ChatContext);
  const mode = useThemeClass(isDarkMode);
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("isDarkMode");
    setIsDarkMode(storedDarkMode === "true");
  }, [setIsDarkMode]);

  const handleThemeChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "light") {
      setIsDarkMode(false);
      localStorage.setItem("isDarkMode", false);
    } else if (selectedValue === "dark") {
      setIsDarkMode(true);
      localStorage.setItem("isDarkMode", true);
    }
  };
  let select_class = isDarkMode
    ? "bg_light black_color"
    : "bg_dark white_color";
  let opt_class = isDarkMode ? "black_bg " : "white_bg ";
  return (
    <>
      <select
        className={`select_container ${select_class}`}
        name="theme"
        onChange={handleThemeChange}
        value={isDarkMode ? "dark" : "light"}
      >
        <option className={`options`} value="light">
          Light Mode
        </option>
        <option className={`options `} value="dark">
          Dark Mode
        </option>
      </select>
    </>
  );
};

export default Theme;
