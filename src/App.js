import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import LoginIn from "./pages/LoginIn";
import Profil from "./pages/Profil";
import SignIn from "./pages/SignIn";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/login" element={<LoginIn />} />
        <Route path="/sign_in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
