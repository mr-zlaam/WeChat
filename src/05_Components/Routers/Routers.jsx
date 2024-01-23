import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Auth_Login, Auth_Register, Intro } from "../../00_Export";

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
        <Route path="/" element={<Auth_Register />} />
      </Routes>
    </>
  );
};

export default Routers;
