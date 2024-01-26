import { useContext, useEffect, useState } from "react";
import "./Chat.scss";
import {
  Timestamp,
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { authUser, db } from "../../02_Firebase/firebase.config";
import {
  ChatContext,
  Checkbox,
  Loader,
  MessageTimestamp,
  useCompTheme,
  useLoading,
  useThemeClass,
} from "../../00_Export";
import { IoMdSend } from "react-icons/io";

const Chat = ({ room }) => {
  const currentUser = authUser.currentUser?.displayName;
  const { isLoading, startLoading, stopLoading } = useLoading();

  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const { isDarkMode } = useContext(ChatContext);
  const theme_class = useThemeClass(!isDarkMode);
  const comp_Theme = useCompTheme(isDarkMode);
  //? Reference to add doc
  const messageRef = collection(db, "messages");

  useEffect(() => {
    const queryMessages = query(
      messageRef,
      where("room", "==", room),
      orderBy("createdAt")
    );
    startLoading();
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      let Mymessages = [];
      snapshot.forEach((doc) => {
        Mymessages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(Mymessages);
      stopLoading();
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newMessage) return alert("Empty message can't be sent ");
    startLoading();
    try {
      await addDoc(messageRef, {
        text: newMessage,
        createdAt: Timestamp.now(),
        user: authUser.currentUser?.displayName,
        room,
      });
      setNewMessage("");
      stopLoading();
    } catch (error) {
      console.log(error);
    }
  };
  const timeNow = new Date();
  const timeString = timeNow.toLocaleTimeString();
  return (
    <>
      <div className="chat_container">
        <h1>Welcome to the {room.toUpperCase()}</h1>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="messages_container">
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
                      <span className="you">You</span>
                      <span className="date">
                        &nbsp;
                        <MessageTimestamp timestamp={Timestamp} />
                        &nbsp;{timeString}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="username">{allmessages.user}</span>
                      <span className="date">
                        &nbsp;
                        <MessageTimestamp timestamp={Timestamp} />
                        &nbsp;{timeString}
                      </span>
                    </>
                  )}
                  <span className={`mymessages ${comp_Theme}`}>
                    {allmessages.text}
                    <span className="tick">
                      {" "}
                      {allmessages.user === currentUser && <Checkbox />}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        )}
        <form action="" onSubmit={handleSubmit}>
          <div className={`input_div ${comp_Theme}`}>
            <input
              type="text"
              value={newMessage}
              autoFocus
              placeholder="Message"
              onChange={(event) => {
                setNewMessage(event.target.value);
              }}
            />
            <button className={`send_btn`} type="submit">
              <span>
                <IoMdSend />
              </span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Chat;
