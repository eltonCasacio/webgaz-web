import { useState } from "react";
import View from "./View";
import { useNavigate } from "react-router-dom";
import { SuppliersType } from "../../../types/suppliers";

const Create: React.FC = () => {
  const navigate = useNavigate();
  const [supplier, setSupplier] = useState({} as SuppliersType);

  function cancel() {
    navigate("/suppliers");
  }

  function confirm() {
    console.log("CONFIRMAR NOVO");
  }

  function updateFields(name: string, value: string) {
    setSupplier({ ...supplier, [name]: value });
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
