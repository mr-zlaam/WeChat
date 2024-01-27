import { useState } from "react";
import { ChatContext } from "./ChatContext";

export const ChatContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [room, setRoom] = useState(null);
  const [inputVal, setInputVal] = useState("");
  return (
    <ChatContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        room,
        setRoom,
        inputVal,
        setInputVal,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
