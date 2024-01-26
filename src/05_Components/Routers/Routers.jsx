import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Auth_Register, Home, Intro, Protected, Room } from "../../00_Export";

const Routers = () => {
  const [isIntro, setIsIntro] = useState(true);
  useEffect(() => {
    const IntroEnder = () => {
      setTimeout(() => {
        setIsIntro(false);
      }, 5100);
    };
    IntroEnder();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Auth_Register />} />
        <Route path="/" element={<Protected Component={Home} />} />
        <Route path="/room" element={<Protected Component={Room} />} />
      </Routes>
    </>
  );
};

export default Routers;
