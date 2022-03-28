import View from "./View";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ShippingType } from "../../../domain/types/shipping";

const Update: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as any;

  const [shipping, setShipping] = useState({} as ShippingType);

  function cancel() {
    navigate("/shippings");
  }

  function confirm() {}

  function updateFields(name: string, value: string) {
    setShipping({ ...shipping, [name]: value });
  }

  useEffect(() => {
    setShipping(location.state);
  }, [location]);

  return (
    <View
      type="update"
      shipping={shipping}
      title="Atualizar"
      subtitle={shipping?.name}
      cancel={cancel}
      confirm={confirm}
      updateFields={updateFields}
    />
  );
};

export default Update;
