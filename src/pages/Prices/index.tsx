import React, { useEffect, useState } from "react";
import { toast } from "../../components/Toast";
import { useNavigate } from "react-router-dom";
import View, { ViewPropsFunctions } from "./View";
import { SupplierPricesType } from "../../domain/types";
import { useListPrices } from "./hooks/prices.hook";

const Prices: React.FC = () => {
  let navigate = useNavigate();
  const [prices, setPrice] = useState<SupplierPricesType[]>([]);
  const [filter, setFilter] = useState("");
  const listPrices = useListPrices();

  const functions = {} as ViewPropsFunctions;
  functions.Update = (value) => navigate("/products/update", { state: value });
  functions.Details = (value) => navigate("/products/details", { state: value });
  functions.Create = () => navigate("/products/create");

  useEffect(() => {
    listPrices().then((prices) => {
      setPrice(prices)
      if(!prices.length) {
        toast.warn("Não há preços cadastrados");
      }
    }).catch(() => toast.error("Erro ao carregar os preços"))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    async function handleFilter() {
      let auxFilter = filter.toUpperCase();

      const filtered = prices.filter((item) => {
        return (
          item.fuelType.toUpperCase().includes(auxFilter) ||
          item.deliveryType.toUpperCase().includes(auxFilter)
        );
      });
      setPrice(filtered);
    }
    handleFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);


  return (
    <View
    title="Dashboard - Tabela de Preço"
    subtitle="Preços Cadastrados"
      functions={functions}
      InputSearchChange={setFilter}
      filter={filter}
      prices={prices}
    />
  );
};

export default Prices;
