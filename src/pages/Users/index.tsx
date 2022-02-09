import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import View, { ViewPropsFunctions } from "./View";
import { User, Users as UsersMock } from "../../mocks/User";

const Users: React.FC = () => {
  let navigate = useNavigate();
  const [users, setUsers] = useState<typeof User[]>([]);
  const [filter, setFilter] = useState("");
  const [pages, setPages] = useState<number[]>([]);
  const [limitPage, setLimitPage] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const functions = {} as ViewPropsFunctions;
  functions.Update = () => navigate("/users/update/1");
  functions.Details = () => navigate("/users/details/1");

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
          item.phone.toUpperCase().includes(auxFilter)
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
