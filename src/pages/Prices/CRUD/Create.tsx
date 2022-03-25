import { useEffect, useState } from "react";
import { toast } from "../../../components/Toast";
import View from "./View";
import { useNavigate } from "react-router-dom";
import { SupplierPricesType, SuppliersType } from "../../../domain/types";
import { useCreatePrice } from "../hooks/prices.hook";
import { useListSuppliers } from "../../Suppliers/hooks/supplier.hook";
import { getMessageError } from "../../../domain/clientError";

const Create: React.FC = () => {
  const navigate = useNavigate();
  const [prices, setPrice] = useState({} as SupplierPricesType);
  const createPrice = useCreatePrice();
  const [suppliers, setSuppliers] = useState<SuppliersType[]>([]);
  const listSuppliers = useListSuppliers();

  useEffect(() => {
    listSuppliers().then((suppliers) => {
      setSuppliers(suppliers);
    }).catch(() => toast.error("Não foi possível carregar os fornecedores"));
  }, []);

  function cancel() {
    navigate("/products");
  }

  function confirm() {
    createPrice(prices)
    .then(() => {
      toast.success("Preço cadastrado com sucesso.")
      navigate("/products");
    })
    .catch((error) => {
      toast.error(getMessageError(error));
    })
  }  

  function updateFields(name: string, value: string) {
    setPrice({ ...prices, [name]: value });
  }

  return (
    <View
      type="create"
      title="Dashboard - Tabela de Preço"
      subtitle="Cadastro de Preço"
      cancel={cancel}
      confirm={confirm}
      updateFields={updateFields}
      suppliers={suppliers}
    /> 
  );
};

export default Create;
