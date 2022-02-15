import { useState } from "react";
import View from "./View";
import { useNavigate } from "react-router-dom";
import { ProductType } from "../../../types/product";

const Create: React.FC = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({} as ProductType);

  function cancel() {
    navigate("/products");
  }

  function confirm() {
    //validar
    //persistir
    //mostar mensagem Erro/Sucesso
    //navegar para /clients
    console.log("CONFIRMAR NOVO", product);
  }

  function updateFields(name: string, value: string) {
    setProduct({ ...product, [name]: value });
  }

  return (
    <View
      type="create"
      title="Produto"
      subtitle={`Novo`}
      cancel={cancel}
      confirm={confirm}
      updateFields={updateFields}
    />
  );
};

export default Create;
