import { useState } from "react";
import { ChatContext } from "./ChatContext";

export const ChatContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [room, setRoom] = useState(null);
  const [inputVal, setInputVal] = useState("");
  const [isSettingModalOpen, setIsSettingModalOpen] = useState(false);
  return (
    <ChatContext.Provider
      value={{
        isSettingModalOpen,
        setIsSettingModalOpen,
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
