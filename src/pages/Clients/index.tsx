import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import View, { ViewPropsFunctions } from "./View";
import { Clients as ClientsMock } from "../../mocks/Client";

const Clients: React.FC = () => {
  let navigate = useNavigate();
  const [clients, setClients] = useState<typeof ClientsMock>([]);
  const [filter, setFilter] = useState("");
  const [pages, setPages] = useState<number[]>([]);
  const [limitPage, setLimitPage] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const functions = {} as ViewPropsFunctions;
  functions.Update = (value) => navigate("/clients/update", { state: value });
  functions.Details = (value) => navigate("/clients/details", { state: value });
  functions.Create = () => navigate("/clients/create");

  useEffect(() => {
    const totalPage = Math.ceil(clients.length / limitPage);
    const arrayPages = [];
    for (let i = 1; i <= totalPage; i++) {
      arrayPages.push(i);
    }

    setPages(arrayPages);
  }, [clients, limitPage]);

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
      // await api.get(`/clients?page=${pageNumber}&limit=${limitPage}`);
      setClients(ClientsMock);
      setLimitPage(10);
    }

    run();
  }, [currentPage]);

  return (
    <View
      title="Clientes"
      subtitle="Lista de Clientes Cadastrados"
      functions={functions}
      InputSearchChange={setFilter}
      filter={filter}
      clients={clients}
      totalClients={clients.length}
      pages={pages}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );
};

export default Clients;
