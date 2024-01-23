import { useState } from "react";
import { ChatContext } from "./ChatContext";

export const ChatContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <ChatContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ChatContext.Provider>
  );
};
