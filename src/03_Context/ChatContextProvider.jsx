import { useState } from "react";
import { ChatContext } from "./ChatContext";

export const ChatContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <ChatContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ChatContext.Provider>
  );
};
