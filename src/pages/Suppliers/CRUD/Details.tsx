import View from "./View";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { SuppliersType } from "../../../types/suppliers";

const Details: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as any;

  const [suppliers, setSuppliers] = useState({} as SuppliersType);

  function cancel() {
    navigate("/suppliers");
  }

  function confirm() {}

  useEffect(() => {
    setSuppliers(location.state);
  }, [location]);

  function updateFields(name: string, value: string) {
    setSuppliers({ ...suppliers, [name]: value });
  }

  return (
    <View
      type="details"
      suppliers={suppliers}
      title="Dashboard - Fornecedor"
      subtitle="Detalhes do Fornecedor"
      cancel={cancel}
      confirm={confirm}
      updateFields={updateFields}
    />
  );
};

export default Details;
