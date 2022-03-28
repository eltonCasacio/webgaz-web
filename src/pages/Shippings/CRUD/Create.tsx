import { useState } from "react";
import View from "./View";
import { useNavigate } from "react-router-dom";
import { ShippingType } from "../../../domain/types/shipping";
import { useCreateShipping } from "../hooks/shipping.hook";

const Create: React.FC = () => {
  const navigate = useNavigate();
  const [shipping, setShipping] = useState({} as ShippingType);
  const createShipping = useCreateShipping();

  function cancel() {
    navigate("/shippings");
  }

  function confirm() {
    createShipping(shipping)
      .then(() => {
        navigate("/shippings");
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  function updateFields(name: string, value: string) {
    setShipping({ ...shipping, [name]: value });
  }

  return (
    <View
      type="create"
      title="Dashboard - Transportadora"
      subtitle="Cadastro de Transportadora"
      cancel={cancel}
      confirm={confirm}
      updateFields={updateFields}
    />
  );
};

export default Create;
