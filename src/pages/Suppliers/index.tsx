import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import View, { ViewPropsFunctions } from "./View";
import { Suppliers as SuppliersMock } from "../../mocks/Suppliers";
import { PaginationProps } from "../../types/pagination";

const Suppliers: React.FC = () => {
  let navigate = useNavigate();
  const [Suppliers, setSuppliers] = useState<typeof SuppliersMock>([]);
  const [totalSuppliers, setTotalSuppliers] = useState<number>(0);
  const [pages, setPages] = useState<number[]>([]);
  const [limitPage, setLimitPage] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filter, setFilter] = useState("");

  const functions = {} as ViewPropsFunctions;
  functions.handleUpdate = () => navigate("/Suppliers/update/1");
  functions.handleDetails = () => navigate("/Suppliers/details/1");

  const pagination = {} as PaginationProps;
  pagination.next = () => setCurrentPage(currentPage + 1);
  pagination.preview = () => setCurrentPage(currentPage - 1);
  pagination.goto = (pageNumber) => setCurrentPage(pageNumber);

  const getSuppliers = async () => {
    // await api.get(`/Suppliers?page=${currentPage}&limit=${limitPage}`);
    setSuppliers(SuppliersMock);
    setTotalSuppliers(SuppliersMock?.length);
    setLimitPage(10);
  };

  useEffect(() => {
    const totalPage = Math.ceil(totalSuppliers / limitPage);
    const arrayPages = [];
    for (let i = 1; i <= totalPage; i++) {
      arrayPages.push(i);
    }

    setPages(arrayPages);
  }, [totalSuppliers, limitPage]);

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
      await getSuppliers();
    }

    run();
  }, []);

  return (
    <View
      title="Fornecedores"
      subtitle="Lista de Fornecedores"
      functions={functions}
      InputSearchChange={setFilter}
      filter={filter}
      suppliers={Suppliers}
      pagination={pagination}
      totalSuppliers={totalSuppliers}
      pages={pages}
      currentPage={currentPage}
    />
  );
};

export default Suppliers;
