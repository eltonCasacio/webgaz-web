import View from "./View";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ShippingType } from "../../../domain/types/shipping";

const Details: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as any;

  const [shipping, setShipping] = useState({} as ShippingType);

  function cancel() {
    navigate("/shippings");
  }

  function confirm() {}

  useEffect(() => {
    setShipping(location.state);
  }, [location]);

  function updateFields(name: string, value: string) {
    setShipping({ ...shipping, [name]: value });
  }

  return (
    <View
      type="details"
      shipping={shipping}
      title="Dashboard - Transportadora"
      subtitle="Detalhes do Transportadora"
      cancel={cancel}
      confirm={confirm}
      updateFields={updateFields}
    />
  );
};

export default Details;
