import React, { useEffect, useState } from "react";
import View from "./View";
import { useNavigate } from "react-router-dom";

const Suppliers: React.FC = () => {
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
      title="Fornecedores"
      subtitle="Lista de Fornecedores"
      handleDetails={() => navigate("/suppliers/details/1")}
      handleUpdate={() => navigate("/suppliers/update/1")}
      InputSearchChange={setFilter}
      filter={filter}
    />
  );
};

export default Suppliers;
