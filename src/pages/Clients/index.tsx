import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import View, { ViewPropsFunctions } from "./View";
import { Clients as ClientsMock } from "../../mocks/Client";
import { PaginationProps } from "../../types/pagination";

const Clients: React.FC = () => {
  let navigate = useNavigate();
  const [clients, setClients] = useState<typeof ClientsMock>([]);
  const [totalClients, setTotalClients] = useState<number>(0);
  const [pages, setPages] = useState<number[]>([]);
  const [limitPage, setLimitPage] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filter, setFilter] = useState("");

  const functions = {} as ViewPropsFunctions;
  functions.handleUpdate = () => navigate("/clients/update/1");
  functions.handleDetails = () => navigate("/clients/details/1");

  const pagination = {} as PaginationProps;
  pagination.next = () => setCurrentPage(currentPage + 1);
  pagination.preview = () => setCurrentPage(currentPage - 1);
  pagination.goto = (pageNumber) => setCurrentPage(pageNumber);

  const getClients = async () => {
    // await api.get(`/clients?page=${currentPage}&limit=${limitPage}`);
    setClients(ClientsMock);
    setTotalClients(ClientsMock?.length);
    setLimitPage(10);
  };

  useEffect(() => {
    const totalPage = Math.ceil(totalClients / limitPage);
    const arrayPages = [];
    for (let i = 1; i <= totalPage; i++) {
      arrayPages.push(i);
    }

    setPages(arrayPages);
  }, [totalClients, limitPage]);

  useEffect(() => {
    async function handleFilter() {
      let auxFilter = filter.toUpperCase();

      const filtered = ClientsMock.filter((item) => {
        return (
          item.name.toUpperCase().includes(auxFilter) ||
          item.cnpj.toUpperCase().includes(auxFilter) ||
          item.email.toUpperCase().includes(auxFilter) ||
          item.site.toUpperCase().includes(auxFilter)
        );
      });
      setClients(filtered);
    }
    handleFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  useEffect(() => {
    async function run() {
      await getClients();
    }

    run();
  }, []);

  return (
    <View
      title="Clientes"
      subtitle="Lista de Clientes Cadastrados"
      functions={functions}
      InputSearchChange={setFilter}
      filter={filter}
      clients={clients}
      pagination={pagination}
      totalClients={totalClients}
      pages={pages}
      currentPage={currentPage}
    />
  );
};

export default Clients;
