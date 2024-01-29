import { CgTrash } from "react-icons/cg";

import "./ChatMessages.scss";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../02_Firebase/firebase.config";
import { useContext } from "react";
import { ChatContext, useThemeClass } from "../../00_Export";
const ChatMessages = ({ scrollableDivRef, currentUser, comp_Theme }) => {
  const { messages, setMessages, isDarkMode } = useContext(ChatContext);
  const useTheme = useThemeClass(isDarkMode);
  const handleDelete = async (id) => {
    try {
      const deleteDocs = doc(db, "messages", id);
      const deleteMessages = messages.filter((item) => item.id !== id);
      setMessages(deleteMessages);
      await deleteDoc(deleteDocs);
    } catch (error) {
      console.log(error);
    }
  };
  const handleFilteredOut = (id) => {
    const deleteMessages = messages.filter((item) => item.id !== id);
    setMessages(deleteMessages);
  };
  return (
    <>
      <div className={`messages_container ${useTheme}`} ref={scrollableDivRef}>
        {messages.map((allmessages) => {
          return (
            <div
              className={`messages ${
                allmessages.user === currentUser ? "sent" : "received"
              }`}
              key={allmessages.id}
            >
              {allmessages.user === currentUser ? (
                <>
                  <span
                    className="deleteContainer"
                    onClick={() => handleDelete(allmessages.id)}
                  >
                    <span className="you">You</span>
                    <CgTrash className="messageDeleter" />
                  </span>
                </>
              ) : (
                <>
                  <span className="username">{allmessages.user}</span>

                  <span
                    onClick={() => handleFilteredOut(allmessages.id)}
                    className="deleteContainer"
                  >
                    <CgTrash className="messageDeleter" />
                  </span>
                </>
              )}
              <span className={`mymessages ${comp_Theme}`}>
                {allmessages.text}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ChatMessages;
