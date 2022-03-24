import { useState } from "react";
import { toast, ToastContainerCustom } from "../../../components/Toast";
import View from "./View";
import { useNavigate } from "react-router-dom";
import { SupplierPricesType } from "../../../types";
import { useCreatePrice } from "../hooks/prices.hook";

const Create: React.FC = () => {
  const navigate = useNavigate();
  const [prices, setPrice] = useState({} as SupplierPricesType);
  const createPrice = useCreatePrice();

  function cancel() {
    navigate("/products");
  }

  function confirm() {
    createPrice(prices)
    .then(() => {
      toast.success("Preço cadastrado com sucesso.")
      navigate("/products");
    })
    .catch((error) => {
      toast.error("Erro a cadastrar o preço.");
    })
  }  

  function updateFields(name: string, value: string) {
    setPrice({ ...prices, [name]: value });
  }

  return (
    <View
      type="create"
      title="Dashboard - Tabela de Preço"
      subtitle="Cadastro de Preço"
      cancel={cancel}
      confirm={confirm}
      updateFields={updateFields}
    /> 
  );
};

export default Create;
