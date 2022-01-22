import React, { useEffect, useState } from "react";
import View from "./View";
import { useNavigate } from "react-router-dom";

const Products: React.FC = () => {
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
      title="Transportadora"
      subtitle="Lista de Transportadora"
      handleDetails={() => navigate("/shippings/details/1")}
      handleUpdate={() => navigate("/shippings/update/1")}
      InputSearchChange={setFilter}
      filter={filter}
    />
  );
};

export default Products;
