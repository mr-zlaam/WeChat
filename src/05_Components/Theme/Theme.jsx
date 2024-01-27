import { useContext, useEffect } from "react";
import "./Theme.scss";
import { ChatContext } from "../../00_Export";

const Theme = () => {
  const { isDarkMode, setIsDarkMode, setIsSettingModalOpen } =
    useContext(ChatContext);
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("isDarkMode");
    setIsDarkMode(storedDarkMode === "true");
  }, [setIsDarkMode]);

  const handleThemeChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "light") {
      setIsDarkMode(false);
      setIsSettingModalOpen(false);
      localStorage.setItem("isDarkMode", false);
    } else if (selectedValue === "dark") {
      setIsDarkMode(true);
      setIsSettingModalOpen(false);
      localStorage.setItem("isDarkMode", true);
    }
  };
  let select_class = isDarkMode
    ? "bg_light black_color"
    : "bg_dark white_color";
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
