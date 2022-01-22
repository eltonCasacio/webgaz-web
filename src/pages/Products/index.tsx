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
      title="Produtos"
      subtitle="Lista de Produtos"
      handleDetails={() => navigate("/products/details/1")}
      handleUpdate={() => navigate("/products/update/1")}
      InputSearchChange={setFilter}
      filter={filter}
    />
  );
};

export default Products;
