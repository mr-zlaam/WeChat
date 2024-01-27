import { useContext, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import {
  Auth_Register,
  Chat,
  ChatContext,
  Protected,
  Room,
  useData,
} from "../../00_Export";

const Routers = () => {
  const { room } = useContext(ChatContext);
  const navigate = useNavigate();
  const location = useLocation();
  const homeLocation = location.pathname === "/";
  const chatLocation = location.pathname === "/chat";

  const data = useData();
  // Redirect to home if user is already logged in.
  useEffect(() => {
    if (!data?.user_details) navigate("/login");

    if (data?.user_details || data?.email_signin) {
      if (homeLocation) return navigate("/");
      if (chatLocation) {
        if (!room) return navigate("/");
        if (room) return navigate("/chat");
      }
    }
  }, []);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Auth_Register />} />
        <Route path="/" element={<Protected Component={Room} />} />
        <Route path="/chat" element={<Protected Component={Chat} />} />
      </Routes>
    </>
  );
};

export default Routers;
