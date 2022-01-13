import React, { useContext } from "react";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { Base } from "../components";
import { authContext } from "../context/auth";

const Index: React.FC = () => {
  const { isAuthenticate } = useContext(authContext);

  return isAuthenticate ? (
    <Base>
      <AppRoutes />
    </Base>
  ) : (
    <AuthRoutes />
  );
};

export default Index;
