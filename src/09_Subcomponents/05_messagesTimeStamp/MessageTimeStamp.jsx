import "./MessageTimestamp.scss";
const MessageTimestamp = ({ timestamp }) => {
  const getMessageTimestamp = (messageDate) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const twoDaysAgo = new Date(today);
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

    // Check if the message was sent today
    if (
      messageDate.getDate() === today.getDate() &&
      messageDate.getMonth() === today.getMonth() &&
      messageDate.getFullYear() === today.getFullYear()
    ) {
      return "Today";
    }
    // Check if the message was sent yesterday
    else if (
      messageDate.getDate() === yesterday.getDate() &&
      messageDate.getMonth() === yesterday.getMonth() &&
      messageDate.getFullYear() === yesterday.getFullYear()
    ) {
      return "Yesterday";
    }
    // Otherwise, return the date
    else {
      return `${messageDate.getDate()}/${
        messageDate.getMonth() + 1
      }/${messageDate.getFullYear()}`;
    }
  };

  const messageDate = timestamp.now().toDate(); // Convert Firestore Timestamp to JavaScript Date object
  const formattedTimestamp = getMessageTimestamp(messageDate);

  return <span className="mytime">{formattedTimestamp}</span>;
};

export default MessageTimestamp;
