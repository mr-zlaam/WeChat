import { useContext, useEffect, useState } from "react";
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
import "./Chat.scss";
import { ChatContext, MessageTimestamp, useThemeClass } from "../../00_Export";
import { IoMdSend } from "react-icons/io";

const Chat = ({ room }) => {
  const currentUser = authUser.currentUser?.displayName;

  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const { isDarkMode } = useContext(ChatContext);
  const theme_class = useThemeClass(!isDarkMode);
  //? Reference to add doc
  const messageRef = collection(db, "messages");

  useEffect(() => {
    const queryMessages = query(
      messageRef,
      where("room", "==", room),
      orderBy("createdAt")
    );
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      let Mymessages = [];
      snapshot.forEach((doc) => {
        Mymessages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(Mymessages);
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newMessage) return alert("Empty message can't be sent ");
    try {
      await addDoc(messageRef, {
        text: newMessage,
        createdAt: Timestamp.now(),
        user: authUser.currentUser?.displayName,
        room,
      });
      setNewMessage("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="chat_container">
        <h1>Welcome to the {room.toUpperCase()}</h1>
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
                      sent:
                      <MessageTimestamp timestamp={Timestamp} />
                    </span>
                  </>
                ) : (
                  <>
                    <span className="username">{allmessages.user}</span>
                    <span className="date">
                      recieved:
                      <MessageTimestamp timestamp={Timestamp} />
                    </span>
                  </>
                )}
                <span className="mymessages">{allmessages.text}</span>
              </div>
            );
          })}
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className={`input_div ${theme_class}`}>
            <input
              type="text"
              value={newMessage}
              placeholder="type your message here ..."
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
