import {} from "react";
import { FaPlus } from "react-icons/fa6";

import "./CreateRoom.scss";
const Create_Room = () => {
  return (
    <>
      <div className="create_room">
        <FaPlus className="create_room_icon" />
        <span className="tooltip">Create Room</span>
      </div>
    </>
  );
};

export default Create_Room;
