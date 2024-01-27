import {} from "react";
import { FaPlus } from "react-icons/fa6";

import "./CreateRoom.scss";
import { useNavigate } from "react-router-dom";
const Create_Room = () => {
  const navigate = useNavigate();
  const navigateToRoom = () => {
    navigate("/room");
  };
  return (
    <>
      <div onClick={navigateToRoom} className="create_room">
        <FaPlus className="create_room_icon" />
        <span className="tooltip">Create Room</span>
      </div>
    </>
  );
};

export default Create_Room;
