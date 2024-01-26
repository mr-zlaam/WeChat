import {} from "react";
import { IoMdSend } from "react-icons/io";
import "./ChatForm.scss";
const ChatForm = ({ handleSubmit, setNewMessage, newMessage, comp_Theme }) => {
  return (
    <>
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
    </>
  );
};

export default ChatForm;
