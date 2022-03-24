import View from "./View";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { SupplierPricesType, SuppliersType } from "../../../types";
import { useListSuppliers } from "../../Suppliers/hooks/supplier.hook";
import { toast } from "../../../components/Toast";

const Update: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as any;
  const [suppliers, setSuppliers] = useState<SuppliersType[]>([]);
  const listSuppliers = useListSuppliers();

  const [prices, setPrices] = useState({} as SupplierPricesType);

  useEffect(() => {
    setPrices(location.state);
  }, [location]);

  useEffect(() => {
    listSuppliers().then((suppliers) => {
      setSuppliers(suppliers);
    }).catch(() => toast.error("Não foi possível carregar os fornecedores"));
  }, []);

  function cancel() {
    navigate("/products");
  }

  function confirm() {}

  function updateFields(name: string, value: string) {
    setPrices({ ...prices, [name]: value });
  }

  return (
    <View
      type="update"
      prices={prices}
      suppliers={suppliers}
      title="Atualizar"
      subtitle={prices?.fuelType}
      cancel={cancel}
      confirm={confirm}
      updateFields={updateFields}
    />
  );
};

export default Update;
