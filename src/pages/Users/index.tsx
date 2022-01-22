import React, { useEffect, useState } from "react";
import View from "./View"; 
import { useNavigate } from "react-router-dom";

const Users: React.FC = () => {
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
      title="Usuários"
      subtitle="Lista de Usuários"
      handleDetails={() => navigate("/users/details/1")}
      handleUpdate={() => navigate("/users/update/1")}
      InputSearchChange={setFilter}
      filter={filter}
    />
  );
};

export default Users;
