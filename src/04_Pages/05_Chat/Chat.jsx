import { useContext, useEffect, useRef, useState } from "react";
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
  ChatForm,
  ChatMessages,
  Loader,
  useCompTheme,
  useLoading,
} from "../../00_Export";

const Chat = ({ room }) => {
  const currentUser = authUser.currentUser?.displayName;
  const { isLoading, startLoading, stopLoading } = useLoading();
  const scrollableDivRef = useRef(null);

  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const { isDarkMode } = useContext(ChatContext);
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
      console.log("Our Servers are facing heavy traffic please wait..", error);
    }
  };
  useEffect(() => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollTop =
        scrollableDivRef.current.scrollHeight;
    }
  }, [messages]);
  // Time
  const timeNow = new Date();
  const options = { hour12: true, hour: "numeric", minute: "2-digit" };
  const timeString = timeNow.toLocaleTimeString("default", options);

  return (
    <>
      <div className="chat_container">
        <h1>Welcome to the {room.toUpperCase()}</h1>
        {isLoading ? (
          <Loader />
        ) : (
          <ChatMessages
            scrollableDivRef={scrollableDivRef}
            messages={messages}
            currentUser={currentUser}
            Timestamp={Timestamp}
            timeString={timeString}
            comp_Theme={comp_Theme}
          />
        )}
        <ChatForm
          handleSubmit={handleSubmit}
          setNewMessage={setNewMessage}
          newMessage={newMessage}
          comp_Theme={comp_Theme}
        />
      </div>
    </>
  );
};

export default Chat;
