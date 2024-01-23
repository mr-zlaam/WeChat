import { useState } from "react";
import { ChatContext } from "./ChatContext";

export const ChatContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [userDetails, setUserDetails] = useState(null);
  return (
    <ChatContext.Provider
      value={{ isDarkMode, setIsDarkMode, userDetails, setUserDetails }}
    >
      {children}
    </ChatContext.Provider>
  );
};
