import React, { useContext } from "react";
import { AuthContext } from "../context/auth";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { Base } from "../components";

const Index: React.FC = () => {
  const { isAuthenticate } = useContext(AuthContext);
  return isAuthenticate ? (
    <Base>
      <AppRoutes />
    </Base>
  ) : (
    <AuthRoutes />
  );
};

export default Index;
