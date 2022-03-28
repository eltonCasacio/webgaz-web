import React, { useEffect, useState } from "react";
import { toast } from "../../components/Toast";
import { useNavigate } from "react-router-dom";
import View, { ViewPropsFunctions } from "./View";
import { SupplierPricesType } from "../../domain/types";
import { useListPrices, useDeletePrice } from "./hooks/prices.hook";

const Prices: React.FC = () => {
  let navigate = useNavigate();
  const [prices, setPrice] = useState<SupplierPricesType[]>([]);
  const [pricesToShow, setPriceToShow] = useState<SupplierPricesType[]>([]);
  const [filter, setFilter] = useState("");
  const listPrices = useListPrices();
  const deletePrice = useDeletePrice();

  const functions = {} as ViewPropsFunctions;
  functions.Update = (value) => navigate("/products/update", { state: value });
  functions.Details = (value) =>
    navigate("/products/details", { state: value });
  functions.Create = () => navigate("/products/create");
  functions.Delete = (priceId) => handleDeletePrice(priceId);

  useEffect(() => {
    handleLoadPrices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function handleFilter() {
      let auxFilter = filter.toUpperCase();

      if (auxFilter === "") {
        setPriceToShow(prices);
        return;
      }
      const filtered = prices.filter((item) => {
        return (
          item.fuelType.toUpperCase().includes(auxFilter) ||
          item.deliveryType.toUpperCase().includes(auxFilter) ||
          item.paymentType.toUpperCase().includes(auxFilter) ||
          String(item.purchasePrice).toUpperCase().includes(auxFilter) ||
          String(item.salesPrice).toUpperCase().includes(auxFilter) ||
          String(item.supplierId).toUpperCase().includes(auxFilter)
        );
      });
      setPriceToShow(filtered);
    }
    handleFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const handleLoadPrices = () => {
    listPrices()
      .then((prices) => {
        setPrice(prices);
        setPriceToShow(prices);
        if (!prices.length) {
          toast.warn("Não há preços cadastrados");
        }
      })
      .catch(() => toast.error("Erro ao carregar os preços"));
  };

  const handleDeletePrice = (priceId: number) => {
    deletePrice(priceId)
      .then(() => {
        handleLoadPrices();
        toast.success("Preço excluído com sucesso.");
      })
      .catch(() => {
        toast.error("Erro ao excluír o preço.");
      });
  };

  return (
    <View
      title="Dashboard - Tabela de Preços"
      subtitle="Preços Cadastrados"
      functions={functions}
      InputSearchChange={setFilter}
      filter={filter}
      prices={pricesToShow}
    />
  );
};

export default Prices;
