import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import View, { ViewPropsFunctions } from "./View";
import { FuelStationType } from "../../types/fuelStation";
import { useListFuelStations } from "./hooks/fuelstation.hook";

const CustomPrice: React.FC = () => {
  let navigate = useNavigate();
  const [fuelStation, setfuelStation] = useState<FuelStationType[]>([]);
  const [filter, setFilter] = useState("");
  const listfuelStation = useListFuelStations();

  const functions = {} as ViewPropsFunctions;
  functions.Update = (value) => navigate("/fuelStation/update", { state: value });
  functions.Details = (value) => navigate("/fuelStation/details", { state: value });
  functions.Create = () => navigate("/fuelStation/create");

  useEffect(() => {
    listfuelStation().then((fuelStation) => {
      setfuelStation(fuelStation)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    async function handleFilter() {
      let auxFilter = filter.toUpperCase();

      const filtered = fuelStation.filter((item) => {
        return (
          item.name.toUpperCase().includes(auxFilter) ||
          item.cnpj.toUpperCase().includes(auxFilter) ||
          item.email.toUpperCase().includes(auxFilter)
        );
      });
      setfuelStation(filtered);
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
      fuelStation={fuelStation}
      totalFuelStations={fuelStation.length}
    />
  );
};

export default CustomPrice;
