import { useState } from "react";
import { ChatContext } from "./ChatContext";

export const ChatContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [room, setRoom] = useState(null);
  const [inputVal, setInputVal] = useState("");
  const [isSettingModalOpen, setIsSettingModalOpen] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  return (
    <ChatContext.Provider
      value={{
        messages,
        setMessages,
        isSettingModalOpen,
        setIsSettingModalOpen,
        isDarkMode,
        setIsDarkMode,
        room,
        setRoom,
        inputVal,
        setInputVal,
        newMessage,
        setNewMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
