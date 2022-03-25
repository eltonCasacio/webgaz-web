import View from "./View";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FuelStationType } from "../../../domain/types";

const Details: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as any;

  const [fuelStation, setFuelStation] = useState({} as FuelStationType);

  function cancel() {
    navigate("/fuelstation");
  }

  function confirm() {}

  useEffect(() => {
    setFuelStation(location.state);
  }, [location]);

  function updateFields(name: string, value: string) {
    setFuelStation({ ...fuelStation, [name]: value });
  }

  return (
    <View
      type="details"
      fuelStation={fuelStation}
      title="Dashboard - Fornecedor"
      subtitle="Detalhes do Fornecedor"
      cancel={cancel}
      confirm={confirm}
      updateFields={updateFields}
    />
  );
};

export default Details;
