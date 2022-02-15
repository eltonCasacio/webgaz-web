import View from "./View";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductType } from "../../../types/product";

const Update: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as any;

  const [product, setProduct] = useState({} as ProductType);

  function cancel() {
    navigate("/products");
  }

  function confirm() {}

  function updateFields(name: string, value: string) {
    console.log("UPDATE FIELDS", name, value);
    setProduct({ ...product, [name]: value });
  }

  useEffect(() => {
    setProduct(location.state);
  }, [location]);

  return (
    <View
      type="update"
      product={product}
      title="Atualizar"
      subtitle={product?.suppliers}
      cancel={cancel}
      confirm={confirm}
      updateFields={updateFields}
    />
  );
};

export default Update;
