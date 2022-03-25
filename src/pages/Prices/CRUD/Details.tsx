import View from "./View";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { SupplierPricesType } from "../../../domain/types";

const Details: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as any;

  const [prices, setPrices] = useState({} as SupplierPricesType);

  function cancel() {
    navigate("/supplier-prices");
  }

  function confirm() {}

  useEffect(() => {
    setPrices(location.state);
  }, [location]);

  function updateFields(name: string, value: string) {
    setPrices({ ...prices, [name]: value });
  }

  return (
    <View
      type="details"
      prices={prices}
      title="Dashboard - Fornecedor"
      subtitle="Detalhes do Fornecedor"
      cancel={cancel}
      confirm={confirm}
      updateFields={updateFields}
    />
  );
};

export default Details;
