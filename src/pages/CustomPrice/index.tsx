import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import View, { ViewPropsFunctions } from "./View";
import { CustomPriceType } from "../../domain/types";
import { useListCustomPrices } from "./hooks/customPrice.hook";

const CustomPrice: React.FC = () => {
  let navigate = useNavigate();
  const [customPrice, setCustomPrice] = useState<CustomPriceType[]>([]);
  const [customPriceToShow, setCustomPriceToShow] = useState<CustomPriceType[]>(
    []
  );
  const [filter, setFilter] = useState("");
  const listCustomprice = useListCustomPrices();

  const functions = {} as ViewPropsFunctions;
  functions.Update = (value) =>
    navigate("/customprice/update", { state: value });
  functions.Details = (value) =>
    navigate("/customprice/details", { state: value });
  functions.Create = () => navigate("/customprice/create");

  useEffect(() => {
    listCustomprice().then((customprice) => {
      setCustomPrice(customprice);
      setCustomPriceToShow(customprice);
    });
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
