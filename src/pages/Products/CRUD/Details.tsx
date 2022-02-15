import View from "./View";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import {ProductType} from '../../../types/product'


const Details: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as any;

  const [product, setProduct] = useState<ProductType>();

  function cancel() {
    navigate("/products");
  }

  function confirm() {}

  useEffect(() => {
    setProduct(location.state);
  }, [location]);

  return (
    <View
      type="details"
      product={product}
      subtitle={product?.suppliers}
      title="Produtos"
      cancel={cancel}
      confirm={confirm}
    />
  );
};

export default Details;
