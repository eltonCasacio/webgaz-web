import View from "./View";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FuelStationType } from "../../../domain/types";

const Update: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as any;

  const [fuelStation, setFuelStation] = useState({} as FuelStationType);

  function cancel() {
    navigate("/fuelstation");
  }

  function confirm() {}

  function updateFields(name: string, value: string) {
    setFuelStation({ ...fuelStation, [name]: value });
  }

  useEffect(() => {
    setFuelStation(location.state);
  }, [location]);

  return (
    <View
      type="update"
      fuelStation={fuelStation}
      title="Atualizar"
      subtitle={fuelStation?.name}
      cancel={cancel}
      confirm={confirm}
      updateFields={updateFields}
    />
  );
};

export default Update;
