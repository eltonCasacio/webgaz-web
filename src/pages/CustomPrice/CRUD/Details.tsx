import View from "./View";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { CustomPriceType } from "../../../domain/types";

const Details: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as any;

  const [customPrice, setCustomPrice] = useState({} as CustomPriceType);

  function cancel() {
    navigate("/customprice");
  }

  function confirm() {}

  useEffect(() => {
    setCustomPrice(location.state);
  }, [location]);

  function updateFields(name: string, value: string) {
    setCustomPrice({ ...customPrice, [name]: value });
  }

  return (
    <View
      type="details"
      customPrice={customPrice}
      title="Dashboard - Fornecedor"
      subtitle="Detalhes do Fornecedor"
      cancel={cancel}
      confirm={confirm}
      updateFields={updateFields}
    />
  );
};

export default Details;
