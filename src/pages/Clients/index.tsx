import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import View, { ViewPropsFunctions } from "./View";
import { ClientType } from "../../types/client";
import { useListClients } from "./hooks/clients.hook"

const Clients: React.FC = () => {
  let navigate = useNavigate();
  const [clients, setClients] = useState<ClientType[]>([]);
  const [filter, setFilter] = useState("");
  const listClients = useListClients()

  const functions = {} as ViewPropsFunctions;
  functions.Update = (value) => navigate("/clients/update", { state: value });
  functions.Details = (value) => navigate("/clients/details", { state: value });
  functions.Create = () => navigate("/clients/create");

  useEffect(() => {
    listClients().then((listClients) => {
      setClients(listClients)
    })
  }, [])

  useEffect(() => {
    async function handleFilter() {
      let auxFilter = filter.toUpperCase();

      const filtered = clients.filter((item) => {
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


  return (
    <View
      title="Dashboard - Cliente"
      subtitle="Clientes Cadastrados"
      functions={functions}
      InputSearchChange={setFilter}
      filter={filter}
      clients={clients}
      totalClients={clients.length}
    />
  );
};

export default Clients;
