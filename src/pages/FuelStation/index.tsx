import React, { useEffect, useState } from "react";
import { toast } from "../../components/Toast";
import { useNavigate } from "react-router-dom";
import View, { ViewPropsFunctions } from "./View";
import { FuelStationType } from "../../domain/types/fuelStation";
import {
  useListFuelStations,
  useBlockFuelStation,
} from "./hooks/fuelstation.hook";

const FuelStation: React.FC = () => {
  let navigate = useNavigate();
  const [fuelStation, setfuelStation] = useState<FuelStationType[]>([]);
  const [fuelStationToShow, setfuelStationToShow] = useState<FuelStationType[]>(
    []
  );
  const [filter, setFilter] = useState("");
  const listfuelStation = useListFuelStations();
  const blockFuelStation = useBlockFuelStation();

  const functions = {} as ViewPropsFunctions;
  functions.Update = (value) =>
    navigate("/fuelstation/update", { state: value });
  functions.Details = (value) =>
    navigate("/fuelstation/details", { state: value });
  functions.Create = () => navigate("/fuelstation/create");
  functions.Cancel = (fuelStationId: number) =>
    handleBlockFuelStation(fuelStationId);

  useEffect(() => {
    hadleLoadFuelStations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function handleFilter() {
      let auxFilter = filter.toUpperCase();

      if (auxFilter === "") {
        setfuelStationToShow(fuelStation);
        return;
      }

      const filtered = fuelStation.filter((item) => {
        return (
          item.name.toUpperCase().includes(auxFilter) ||
          item.cnpj.toUpperCase().includes(auxFilter) ||
          item.email.toUpperCase().includes(auxFilter) ||
          String(item.status).toUpperCase().includes(auxFilter) ||
          item.telephone.toUpperCase().includes(auxFilter)
        );
      });
      setfuelStationToShow(filtered);
    }
    handleFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const hadleLoadFuelStations = () => {
    listfuelStation().then((fuelStation) => {
      setfuelStation(fuelStation);
      setfuelStationToShow(fuelStation);
    });
  };

  const handleBlockFuelStation = (fuelStationId: number) => {
    blockFuelStation(fuelStationId)
      .then(() => {
        hadleLoadFuelStations();
        toast.success("Posto bloqueado com sucesso.");
      })
      .catch(() => {
        toast.error("Erro ao bloquear o posto.");
      });
  };

  return (
    <View
      title="Dashboard - Posto"
      subtitle="Posto Cadastrados"
      functions={functions}
      InputSearchChange={setFilter}
      filter={filter}
      fuelStation={fuelStationToShow}
      totalFuelStations={fuelStation.length}
    />
  );
};

export default FuelStation;
