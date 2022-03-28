import React, { useEffect, useState } from "react";
import { toast } from "../../components/Toast";
import { useNavigate } from "react-router-dom";
import View, { ViewPropsFunctions } from "./View";
import { CustomPriceType } from "../../domain/types";
import { useListCustomPrices, useCancelCustomPrice } from "./hooks/customPrice.hook";

const CustomPrice: React.FC = () => {
  let navigate = useNavigate();
  const [customPrice, setCustomPrice] = useState<CustomPriceType[]>([]);
  const [customPriceToShow, setCustomPriceToShow] = useState<CustomPriceType[]>(
    []
  );
  const [filter, setFilter] = useState("");
  const listCustomPrice = useListCustomPrices();
  const cancelCustomPrice = useCancelCustomPrice();

  const functions = {} as ViewPropsFunctions;
  functions.Update = (value) =>
    navigate("/customprice/update", { state: value });
  functions.Details = (value) =>
    navigate("/customprice/details", { state: value });
  functions.Create = () => navigate("/customprice/create");
  functions.Cancel = (customPriceId: number) => handleCancelCustomPrice(customPriceId);

  useEffect(() => {
    handleLoadPrices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function handleFilter() {
      let auxFilter = filter.toUpperCase();

      if (auxFilter === "") {
        setCustomPriceToShow(customPrice);
        return;
      }

      const filtered = customPrice.filter((item) => {
        return (
          item.fuelType.toUpperCase().includes(auxFilter) ||
          item.deliveryType.toUpperCase().includes(auxFilter)
        );
      });
      setCustomPriceToShow(filtered);
    }
    handleFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const handleLoadPrices = () => {
    listCustomPrice().then((customprice) => {
      setCustomPrice(customprice);
      setCustomPriceToShow(customprice);
      if(!customprice.length) {
        toast.warn("Não há preços cadastrados.");  
      }
    }).catch(() => {
      toast.error("Erro ao carregar os preços.");
    })    
  }

  const handleCancelCustomPrice = (customPriceId: number) => {
    cancelCustomPrice(customPriceId)
      .then(() => {
        handleLoadPrices();
        toast.success("Preço cancelado com sucesso.");
      })
      .catch(() => {
        toast.error("Erro ao cancelar o preço.");
      });
  };

  return (
    <View
      title="Dashboard - Preço Promocional"
      subtitle="Preços Cadastrados"
      functions={functions}
      InputSearchChange={setFilter}
      filter={filter}
      customPrice={customPriceToShow}
    />
  );
};

export default CustomPrice;
