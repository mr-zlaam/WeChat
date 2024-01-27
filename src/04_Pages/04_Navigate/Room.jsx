import { useContext, useRef } from "react";
import "./Room.scss";
import {
  ChatContext,
  SettingModal,
  useBtn_Class,
  useNotification,
} from "../../00_Export";
import { useNavigate } from "react-router-dom";

const Room = () => {
  const navigate = useNavigate();
  const notification = useNotification();
  const { isDarkMode, setRoom, inputVal, setInputVal } =
    useContext(ChatContext);
  const btn_class = useBtn_Class(isDarkMode);
  const roomInputRef = useRef(null);
  const handleEnterRoom = () => {
    if (inputVal.length === 0)
      return notification.errorMessage("Pleaser enter the room name first!");
    setRoom(roomInputRef.current.value);
    navigate(`/chat`);
  };

  return (
    <>
      <SettingModal />
      <div className="room_card">
        <div className="room_input_controller">
          <label htmlFor="myroom">Enter the Room Name</label>
          <input
            type="text"
            id="myroom"
            ref={roomInputRef}
            value={inputVal}
            onChange={(event) => {
              setInputVal(event.target.value);
            }}
          />
          <button onClick={handleEnterRoom} className={`${btn_class} room_btn`}>
            Enter the Room
          </button>
        </div>
      </div>
    </>
  );
};

export default Room;
