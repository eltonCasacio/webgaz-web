import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import View, { ViewPropsFunctions } from "./View";
import { Products as ProductsMock } from "../../mocks/Product";
import { PaginationProps } from "../../types/pagination";

const Products: React.FC = () => {
  let navigate = useNavigate();
  const [products, setProducts] = useState<typeof ProductsMock>([]);
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [pages, setPages] = useState<number[]>([]);
  const [limitPage, setLimitPage] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filter, setFilter] = useState("");

  const functions = {} as ViewPropsFunctions;
  functions.handleUpdate = () => navigate("/products/update/1");
  functions.handleDetails = () => navigate("/products/details/1");

  const pagination = {} as PaginationProps;
  pagination.next = () => setCurrentPage(currentPage + 1);
  pagination.preview = () => setCurrentPage(currentPage - 1);
  pagination.goto = (pageNumber) => setCurrentPage(pageNumber);

  const getProducts = async () => {
    // await api.get(`/Products?page=${currentPage}&limit=${limitPage}`);
    setProducts(ProductsMock);
    setTotalProducts(ProductsMock?.length);
    setLimitPage(10);
  };

  useEffect(() => {
    const totalPage = Math.ceil(totalProducts / limitPage);
    const arrayPages = [];
    for (let i = 1; i <= totalPage; i++) {
      arrayPages.push(i);
    }

    setPages(arrayPages);
  }, [totalProducts, limitPage]);

  useEffect(() => {
    async function handleFilter() {
      let auxFilter = filter.toUpperCase();

      const filtered = ProductsMock.filter((item) => {
        return (
          item.tipo.toUpperCase().includes(auxFilter) ||
          item.fornecedor.toUpperCase().includes(auxFilter) ||
          item.litros.includes(auxFilter) ||
          item.preco.includes(auxFilter)
        );
      });
      setProducts(filtered);
    }
    handleFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  useEffect(() => {
    async function run() {
      await getProducts();
    }

    run();
  }, []);

  return (
    <View
      title="Clientes"
      subtitle="Lista de Clientes Cadastrados"
      functions={functions}
      InputSearchChange={setFilter}
      filter={filter}
      products={products}
      pagination={pagination}
      totalProducts={totalProducts}
      pages={pages}
      currentPage={currentPage}
    />
  );
};

export default Products;
