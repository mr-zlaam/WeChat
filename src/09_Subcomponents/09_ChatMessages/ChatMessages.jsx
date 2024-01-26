import {} from "react";
import "./ChatMessages.scss";
import MessageTimestamp from "../05_messagesTimeStamp/MessageTimeStamp";
const ChatMessages = ({
  scrollableDivRef,
  messages,
  currentUser,
  Timestamp,
  timeString,
  comp_Theme,
}) => {
  return (
    <>
      <div className="messages_container" ref={scrollableDivRef}>
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
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ChatMessages;
