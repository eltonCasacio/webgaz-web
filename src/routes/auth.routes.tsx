import React from "react";
import { Routes, Route } from "react-router-dom";

import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import ForgotPWD from "../pages/ForgotPWD";

const authRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forgot-pwd" element={<ForgotPWD />} />
    </Routes>
  );
};

export default authRoutes;
