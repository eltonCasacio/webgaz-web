import React, { useEffect, useState } from "react";
import { toast } from "../../components/Toast";
import { useListConfig } from "./hooks/config.hook";
import { useNavigate } from "react-router-dom";
import View, { ViewPropsFunctions } from "./View";
import { ConfigType } from "../../domain/types";

const Config: React.FC = () => {
  let navigate = useNavigate();
  const [config, setConfig] = useState<ConfigType[]>([]);
  const [configToShow, setConfigToShow] = useState<ConfigType[]>([]);
  const [filter, setFilter] = useState("");
  const listconfig = useListConfig();

  const functions = {} as ViewPropsFunctions;
  functions.Update = (value) => navigate("/settings/update", { state: value });
  functions.Details = (value) => navigate("/settings/details", { state: value });

  useEffect(() => {
    handleLoadconfig();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function handleFilter() {
      let auxFilter = filter.toUpperCase();

      if (auxFilter === "") {
        setConfigToShow(config);
        return;
      }
      const filtered = config.filter((item) => {
        return (
          item.timeLimitPurchase.toUpperCase().includes(auxFilter) ||
          item.blockOrders.toUpperCase().includes(auxFilter)
        );
      });
      setConfigToShow(filtered);
    }
    handleFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const handleLoadconfig = () => {
    listconfig()
      .then((config) => {
        setConfig(config)
        setConfigToShow(config);
        if (!config.length) {
          toast.warn("Não há configurações cadastradas");
        }
      })
      .catch(() => toast.error("Erro ao carregar as configurações"));
  }


  return (
    <View
      title="Dashboard - Usuário"
      subtitle="Usuários Cadastrados"
      functions={functions}
      InputSearchChange={setFilter}
      filter={filter}
      config={configToShow}
      totalConfig={config.length}
    />
  );
};

export default Config;
