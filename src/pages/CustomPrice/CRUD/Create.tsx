import { useState } from "react";
import View from "./View";
import { useNavigate } from "react-router-dom";
import { CustomPriceType } from "../../../domain/types";
import { useCreateCustomPrice } from "../hooks/customPrice.hook";

const Create: React.FC = () => {
  const navigate = useNavigate();
  const [customPrice, setCustomPrice] = useState({} as CustomPriceType);
  const createFuelStation = useCreateCustomPrice();

  function cancel() {
    navigate("/fuelstation");
  }

  function confirm() {
    createFuelStation(customPrice)
    .then(() => {
      navigate("/fuelstation");
    })
    .catch((error) => {
      console.log('error', error)
    })
  }  

  function updateFields(name: string, value: string) {
    setCustomPrice({ ...customPrice, [name]: value });
  }

  return (
    <View
      type="create"
      title="Dashboard - Fornecedor"
      subtitle="Cadastro de Fornecedor"
      cancel={cancel}
      confirm={confirm}
      updateFields={updateFields}
    />
  );
};

export default Create;
