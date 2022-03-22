import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import View, { ViewPropsFunctions } from "./View";
import { CustomPriceType } from "../../types";
import { useListCustomPrices } from "./hooks/customPrice.hook";

const CustomPrice: React.FC = () => {
  let navigate = useNavigate();
  const [customPrice, setCustomPrice] = useState<CustomPriceType[]>([]);
  const [filter, setFilter] = useState("");
  const listfuelStation = useListCustomPrices();

  const functions = {} as ViewPropsFunctions;
  functions.Update = (value) => navigate("/fuelStation/update", { state: value });
  functions.Details = (value) => navigate("/fuelStation/details", { state: value });
  functions.Create = () => navigate("/fuelStation/create");

  useEffect(() => {
    listfuelStation().then((fuelStation) => {
      setCustomPrice(fuelStation)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    async function handleFilter() {
      let auxFilter = filter.toUpperCase();

      const filtered = customPrice.filter((item) => {
        return (
          item.fuelType.toUpperCase().includes(auxFilter) ||
          item.deliveryType.toUpperCase().includes(auxFilter)
        );
      });
      setCustomPrice(filtered);
    }
    handleFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);


  return (
    <View
    title="Dashboard - Posto"
    subtitle="Posto Cadastrados"
      functions={functions}
      InputSearchChange={setFilter}
      filter={filter}
      customPrice={customPrice}
    />
  );
};

export default CustomPrice;
