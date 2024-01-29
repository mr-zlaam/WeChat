/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useRef } from "react";
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
  useNotification,
} from "../../00_Export";

const Chat = () => {
  const currentUser = authUser.currentUser?.displayName;
  const { isLoading, startLoading, stopLoading } = useLoading();
  const scrollableDivRef = useRef(null);

  const { isDarkMode, room, newMessage, messages, setMessages, setNewMessage } =
    useContext(ChatContext);
  const comp_Theme = useCompTheme(isDarkMode);
  const errorMessage = useNotification();
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
    if (!newMessage)
      return errorMessage.errorMessage("Wanna Send Empty message huh!");
    startLoading();
    setNewMessage("");
    try {
      await addDoc(messageRef, {
        text: newMessage,
        createdAt: Timestamp.now(),
        user: authUser.currentUser?.displayName,
        room,
      });
      stopLoading();
    } catch (error) {
      errorMessage.errorMessage(
        "Our Servers are facing heavy traffic please wait.."
      );
    }
  };
  useEffect(() => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollTop =
        scrollableDivRef.current.scrollHeight;
    }
  }, [messages]);
  // Time

  return (
    <>
      <h1 className="chat_heading">Its {room?.toUpperCase()}'s Room</h1>
      <div className="chat_container">
        {isLoading ? (
          <Loader />
        ) : (
          <ChatMessages
            scrollableDivRef={scrollableDivRef}
            currentUser={currentUser}
            Timestamp={Timestamp}
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
