import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import View, { ViewPropsFunctions } from "./View";
import { SuppliersType } from "../../domain/types/suppliers";
import { useListSuppliers } from "./hooks/supplier.hook";

const Suppliers: React.FC = () => {
  let navigate = useNavigate();
  const [suppliers, setSuppliers] = useState<SuppliersType[]>([]);
  const [filter, setFilter] = useState("");
  const listSuppliers = useListSuppliers();

  const functions = {} as ViewPropsFunctions;
  functions.Update = (value) => navigate("/suppliers/update", { state: value });
  functions.Details = (value) => navigate("/suppliers/details", { state: value });
  functions.Create = () => navigate("/suppliers/create");

  useEffect(() => {
    listSuppliers().then((suppliers) => {
      setSuppliers(suppliers)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    async function handleFilter() {
      let auxFilter = filter.toUpperCase();

      const filtered = suppliers.filter((item) => {
        return (
          item.name.toUpperCase().includes(auxFilter) ||
          item.cnpj.toUpperCase().includes(auxFilter) ||
          item.email.toUpperCase().includes(auxFilter) ||
          item.site.toUpperCase().includes(auxFilter)
        );
      });
      setSuppliers(filtered);
    }
    handleFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);


  return (
    <View
    title="Dashboard - Fornecedor"
    subtitle="Fornecedores Cadastrados"
      functions={functions}
      InputSearchChange={setFilter}
      filter={filter}
      suppliers={suppliers}
      totalSuppliers={suppliers.length}
    />
  );
};

export default Suppliers;
