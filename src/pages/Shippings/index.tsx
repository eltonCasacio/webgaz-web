import React, { useEffect, useState } from "react";
import { toast } from "../../components/Toast";
import { useNavigate } from "react-router-dom";
import View, { ViewPropsFunctions } from "./View";
import { ShippingType } from "../../domain/types/shipping";
import { useListShipping, useDeleteShipping } from "./hooks/shipping.hook";

const Shippings: React.FC = () => {
  let navigate = useNavigate();
  const [Shippings, setShippings] = useState<ShippingType[]>([]);
  const [ShippingsToShow, setShippingsToShow] = useState<ShippingType[]>([]);
  const [filter, setFilter] = useState("");
  const listShippings = useListShipping();
  const deleteShipping = useDeleteShipping();

  const functions = {} as ViewPropsFunctions;
  functions.Update = (value) => navigate("/shippings/update", { state: value });
  functions.Details = (value) =>
    navigate("/shippings/details", { state: value });
  functions.Create = () => navigate("/shippings/create");
  functions.Delete = (shippingId: number) => handleDeleteShipping(shippingId);

  useEffect(() => {
    handleLoadShippings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function handleFilter() {
      let auxFilter = filter.toUpperCase();

      if (auxFilter === "") {
        console.log("filter is empty");
        setShippingsToShow(Shippings);
        return;
      }

      const filtered = Shippings.filter((item) => {
        return (
          item.address.toUpperCase().includes(auxFilter) ||
          item.city.toUpperCase().includes(auxFilter) ||
          item.cnpj.toUpperCase().includes(auxFilter) ||
          item.email.toUpperCase().includes(auxFilter) ||
          item.name.toUpperCase().includes(auxFilter) ||
          item.phoneNumber.toUpperCase().includes(auxFilter) ||
          item.uf.toUpperCase().includes(auxFilter)
        );
      });

      setShippingsToShow(filtered);
    }
    handleFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const handleDeleteShipping = (shippingId: number) => {
    deleteShipping(shippingId)
      .then(() => {
        handleLoadShippings();
        toast.success("Fornecedor excluído com sucesso.");
      })
      .catch(() => {
        toast.error("Erro ao excluir o fornecedor.");
      });
  };

  const handleLoadShippings = () => {
    listShippings().then((Shippings) => {
      setShippings(Shippings);
      setShippingsToShow(Shippings);
    });
  }

  return (
    <View
      title="Dashboard - Transportadora"
      subtitle="Transportadora Cadastrados"
      functions={functions}
      InputSearchChange={setFilter}
      filter={filter}
      shipping={ShippingsToShow}
      totalShipping={Shippings.length}
    />
  );
};

export default Shippings;
// Shippings