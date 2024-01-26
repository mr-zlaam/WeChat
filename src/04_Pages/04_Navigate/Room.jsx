import { useContext, useRef, useState } from "react";
import "./Room.scss";
import { Chat, ChatContext, useBtn_Class } from "../../00_Export";
import { useNavigate } from "react-router-dom";
const Room = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useContext(ChatContext);
  const btn_class = useBtn_Class(isDarkMode);
  const [room, setRoom] = useState(null);
  const roomInputRef = useRef(null);
  const handleEnterRoom = () => {
    setRoom(roomInputRef.current.value);
  };
  return (
    <>
      {room ? (
        <Chat room={room} />
      ) : (
        <div className="room_card">
          <div className="room_input_controller">
            <label htmlFor="myroom">Enter the Room Name</label>
            <input type="text" id="myroom" ref={roomInputRef} />
            <button
              onClick={handleEnterRoom}
              className={`${btn_class} room_btn`}
            >
              Enter the Room
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Room;
