import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import View, { ViewPropsFunctions } from "./View";
import { SuppliersType } from "../../types/suppliers";
import { Suppliers as SuppliersMock } from "../../mocks/Suppliers";

const Suppliers: React.FC = () => {
  let navigate = useNavigate();
  const [suppliers, setSuppliers] = useState<SuppliersType[]>([]);
  const [filter, setFilter] = useState("");
  const [pages, setPages] = useState<number[]>([]);
  const [limitPage, setLimitPage] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const functions = {} as ViewPropsFunctions;
  functions.Update = (value) => navigate("/suppliers/update", { state: value });
  functions.Details = (value) => navigate("/suppliers/details", { state: value });
  functions.Create = () => navigate("/suppliers/create");

  useEffect(() => {
    const totalPage = Math.ceil(suppliers.length / limitPage);
    const arrayPages = [];
    for (let i = 1; i <= totalPage; i++) {
      arrayPages.push(i);
    }

    setPages(arrayPages);
  }, [suppliers, limitPage]);

  useEffect(() => {
    async function handleFilter() {
      let auxFilter = filter.toUpperCase();

      const filtered = SuppliersMock.filter((item) => {
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

  useEffect(() => {
    async function run() {
      // await api.get(`/Suppliers?page=${currentPage}&limit=${limitPage}`);
    setSuppliers(SuppliersMock);
    setLimitPage(10);
    }

    run();
  }, []);

  return (
    <View
    title="Dashboard - Fornecedor"
    subtitle="Fornecedores Cadastrados"
      functions={functions}
      InputSearchChange={setFilter}
      filter={filter}
      suppliers={suppliers}
      totalSuppliers={suppliers.length}
      pages={pages}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );
};

export default Suppliers;
