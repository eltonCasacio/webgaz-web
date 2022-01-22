import React from "react";
import View from "./View";
import { useNavigate } from "react-router-dom";

const Clients: React.FC = () => {
  let navigate = useNavigate();
  return (
    <View
      title="Clientes"
      subtitle="Lista de Clientes Cadastrados"
      handleDetails={() => navigate("/clients/details/1")}
      handleUpdate={() => navigate("/clients/update/1")}
    />
  );
};

export default Clients;
