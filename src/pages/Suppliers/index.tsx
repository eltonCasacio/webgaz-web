import React, { useEffect, useState } from "react";
import { toast } from "../../components/Toast";
import { useNavigate } from "react-router-dom";
import View, { ViewPropsFunctions } from "./View";
import { SuppliersType } from "../../domain/types/suppliers";
import { useListSuppliers, useDeleteSupplier } from "./hooks/supplier.hook";

const Suppliers: React.FC = () => {
  let navigate = useNavigate();
  const [suppliers, setSuppliers] = useState<SuppliersType[]>([]);
  const [suppliersToShow, setSuppliersToShow] = useState<SuppliersType[]>([]);
  const [filter, setFilter] = useState("");
  const listSuppliers = useListSuppliers();
  const deleteSupplier = useDeleteSupplier();

  const functions = {} as ViewPropsFunctions;
  functions.Update = (value) => navigate("/suppliers/update", { state: value });
  functions.Details = (value) =>
    navigate("/suppliers/details", { state: value });
  functions.Create = () => navigate("/suppliers/create");
  functions.Delete = (supplierId: number) => handleDeleteSupplier(supplierId);

  useEffect(() => {
    handleLoadSuppliers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function handleFilter() {
      let auxFilter = filter.toUpperCase();

      if (auxFilter === "") {
        console.log("filter is empty");
        setSuppliersToShow(suppliers);
        return;
      }

      const filtered = suppliers.filter((item) => {
        return (
          item.address.toUpperCase().includes(auxFilter) ||
          item.cep.toUpperCase().includes(auxFilter) ||
          item.city.toUpperCase().includes(auxFilter) ||
          item.cnpj.toUpperCase().includes(auxFilter) ||
          item.email.toUpperCase().includes(auxFilter) ||
          item.name.toUpperCase().includes(auxFilter) ||
          item.phoneNumber.toUpperCase().includes(auxFilter) ||
          item.uf.toUpperCase().includes(auxFilter)
        );
      });

      setSuppliersToShow(filtered);
    }
    handleFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const handleDeleteSupplier = (supplierId: number) => {
    deleteSupplier(supplierId)
      .then(() => {
        handleLoadSuppliers();
        toast.success("Fornecedor excluído com sucesso.");
      })
      .catch(() => {
        toast.error("Erro ao excluir o fornecedor.");
      });
  };

  const handleLoadSuppliers = () => {
    listSuppliers().then((suppliers) => {
      setSuppliers(suppliers);
      setSuppliersToShow(suppliers);
    });
  }

  return (
    <View
      title="Dashboard - Fornecedor"
      subtitle="Fornecedores Cadastrados"
      functions={functions}
      InputSearchChange={setFilter}
      filter={filter}
      suppliers={suppliersToShow}
      totalSuppliers={suppliers.length}
    />
  );
};

export default Suppliers;
