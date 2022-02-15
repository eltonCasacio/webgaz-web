import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import View, { ViewPropsFunctions } from "./View";
import { ProductType } from "../../types/product";
import { Products as ProductsMock } from "../../mocks/Product";

const Products: React.FC = () => {
  let navigate = useNavigate();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [filter, setFilter] = useState("");
  const [pages, setPages] = useState<number[]>([]);
  const [limitPage, setLimitPage] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const functions = {} as ViewPropsFunctions;
  functions.Update = (value) => navigate("/products/update", { state: value });
  functions.Details = (value) => navigate("/products/details", { state: value });
  functions.Create = () => navigate("/products/create");

  useEffect(() => {
    const totalPage = Math.ceil(products.length / limitPage);
    const arrayPages = [];
    for (let i = 1; i <= totalPage; i++) {
      arrayPages.push(i);
    }

    setPages(arrayPages);
  }, [products, limitPage]);

  useEffect(() => {
    async function handleFilter() {
      let auxFilter = filter.toUpperCase();

      const filtered = products.filter((item) => {
        return (
          item.type.toUpperCase().includes(auxFilter) ||
          item.suppliers.toUpperCase().includes(auxFilter) ||
          item.liters.includes(auxFilter) ||
          item.price.includes(auxFilter)
        );
      });
      setProducts(filtered);
    }
    handleFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  useEffect(() => {
    async function run() {
      // await api.get(`/Products?page=${currentPage}&limit=${limitPage}`);
      setProducts(ProductsMock);
      setLimitPage(10);
    }

    run();
  }, [currentPage]);

  return (
    <View
      title="Produtos"
      subtitle="Produtos Cadastrados"
      functions={functions}
      InputSearchChange={setFilter}
      filter={filter}
      products={products}
      totalProducts={products.length}
      pages={pages}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );
};

export default Products;
