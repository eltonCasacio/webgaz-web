import { useState } from "react";
import View from "./View";
import { useNavigate } from "react-router-dom";
import { FuelStationType } from "../../../domain/types";
import { useCreateFuelStation } from "../hooks/fuelstation.hook";

const Create: React.FC = () => {
  const navigate = useNavigate();
  const [supplier, setSupplier] = useState({} as FuelStationType);
  const createFuelStation = useCreateFuelStation();

  function cancel() {
    navigate("/fuelstation");
  }

  function confirm() {
    createFuelStation(supplier)
    .then(() => {
      navigate("/fuelstation");
    })
    .catch((error) => {
      console.log('error', error)
    })
  }  

  function updateFields(name: string, value: string) {
    setSupplier({ ...supplier, [name]: value });
  }

  return (
    <View
      type="create"
      title="Dashboard - Posto"
      subtitle="Cadastro de Posto"
      cancel={cancel}
      confirm={confirm}
      updateFields={updateFields}
    />
  );
};

export default Create;
