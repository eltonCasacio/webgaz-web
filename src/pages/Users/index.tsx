import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import View, { ViewPropsFunctions } from "./View";
import { UserType } from "../../domain/types/user";
import { Users as UsersMock } from "../../mocks/User";

const Users: React.FC = () => {
  let navigate = useNavigate();
  const [users, setUsers] = useState<UserType[]>([]);
  const [filter, setFilter] = useState("");
  const [pages, setPages] = useState<number[]>([]);
  const [limitPage, setLimitPage] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const functions = {} as ViewPropsFunctions;
  functions.Update = (value) => navigate("/users/update", { state: value });
  functions.Details = (value) => navigate("/users/details", { state: value });
  functions.Create = () => navigate("/users/create");

  useEffect(() => {
    const totalPage = Math.ceil(users.length / limitPage);
    const arrayPages = [];
    for (let i = 1; i <= totalPage; i++) {
      arrayPages.push(i);
    }

    setPages(arrayPages);
  }, [users, limitPage]);

  useEffect(() => {
    async function handleFilter() {
      let auxFilter = filter.toUpperCase();

      const filtered = UsersMock.filter((item) => {
        return (
          item.name.toUpperCase().includes(auxFilter) ||
          item.email.toUpperCase().includes(auxFilter) ||
          item.phoneNumber.toUpperCase().includes(auxFilter)
        );
      });
      setUsers(filtered);
    }
    handleFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  useEffect(() => {
    async function run() {
      // await api.get(`/clients?page=${pageNumber}&limit=${limitPage}`);
      setUsers(UsersMock);
      setLimitPage(10);
    }

    run();
  }, [currentPage]);

  return (
    <View
      title="Usuários"
      subtitle="Lista de Usuários"
      functions={functions}
      InputSearchChange={setFilter}
      filter={filter}
      users={users}
      totalUsers={users.length}
      pages={pages}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );
};

export default Users;
