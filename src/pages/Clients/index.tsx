import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import View from "./View";

const Clients: React.FC = () => {
  let navigate = useNavigate();
  const [filter, setFilter] = useState("");

  useEffect(() => {
    async function run() {
      console.log("FILTRAR::", filter);
    }

    run();
  }, [filter]);

  return (
    <View
      title="Clientes"
      subtitle="Lista de Clientes Cadastrados"
      handleDetails={() => navigate("/clients/details/1")}
      handleUpdate={() => navigate("/clients/update/1")}
      InputSearchChange={setFilter}
      filter={filter}
    />
  );
};

export default Clients;
