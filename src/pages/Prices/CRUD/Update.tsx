import View from "./View";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { SupplierPricesType } from "../../../types";

const Update: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as any;

  const [prices, setPrices] = useState({} as SupplierPricesType);

  function cancel() {
    navigate("/products");
  }

  function confirm() {}

  function updateFields(name: string, value: string) {
    setPrices({ ...prices, [name]: value });
  }

  useEffect(() => {
    setPrices(location.state);
  }, [location]);

  return (
    <View
      type="update"
      prices={prices}
      title="Atualizar"
      subtitle={prices?.fuelType}
      cancel={cancel}
      confirm={confirm}
      updateFields={updateFields}
    />
  );
};

export default Update;
