import View from "./View";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "../../../components/Toast";
import { getMessageError } from "../../../domain/clientError";
import { useEffect, useState } from "react";
import { SuppliersType } from "../../../domain/types/suppliers";
import { useUpdateSupplier } from "../hooks/supplier.hook";

const Update: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as any;
  const [suppliers, setSuppliers] = useState({} as SuppliersType);
  const updateSupplier = useUpdateSupplier();

  function cancel() {
    navigate("/suppliers");
  }

  function confirm(): void {
    updateSupplier(suppliers).then(() => {
      toast.success("Fornecedor atualizado com sucesso.");
      navigate("/suppliers");
    }).catch((error) => {
      toast.error(getMessageError(error));
    })
  }

  function updateFields(name: string, value: string) {
    setSuppliers({ ...suppliers, [name]: value });
  }

  useEffect(() => {
    setSuppliers(location.state);
  }, [location]);
  
  return (
    <View
      type="update"
      suppliers={suppliers}
      title="Atualizar"
      subtitle={suppliers?.name}
      cancel={cancel}
      confirm={confirm}
      updateFields={updateFields}
    />
  );
};

export default Update;
