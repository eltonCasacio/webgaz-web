import View from "./View";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { SuppliersType } from "../../../types/suppliers";

const Details: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as any;

  const [suppliers, setSuppliers] = useState<SuppliersType>();

  function cancel() {
    navigate("/suppliers");
  }

  function confirm() {}

  useEffect(() => {
    setSuppliers(location.state);
  }, [location]);

  return (
    <View
      type="details"
      suppliers={suppliers}
      title="Detalhes"
      subtitle={suppliers?.name}
      cancel={cancel}
      confirm={confirm}
    />
  );
};

export default Details;
