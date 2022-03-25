import View from "./View";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { SupplierPricesType, SuppliersType } from "../../../domain/types";
import { useListSuppliers } from "../../Suppliers/hooks/supplier.hook";
import { useUpdatePrice } from "../hooks/prices.hook";
import { toast } from "../../../components/Toast";
import { getMessageError } from "../../../domain/clientError";

const Update: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as any;
  const [suppliers, setSuppliers] = useState<SuppliersType[]>([]);
  const listSuppliers = useListSuppliers();
  const updatePriceService = useUpdatePrice();

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

  function confirm(): void {
    updatePriceService(prices).then(() => {
      toast.success("Preço atualizado com sucesso.");
      navigate("/products");
    }).catch((error) => {
      toast.error(getMessageError(error));
    })
  }

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
