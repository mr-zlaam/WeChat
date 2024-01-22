import {} from "react";
import { Route, Routes } from "react-router-dom";
import { Intro } from "../../00_Export";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />} />
      </Routes>
    </>
  );
};

export default Routers;
