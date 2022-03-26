import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import View, { ViewPropsFunctions } from "./View";
import { UserType } from "../../domain/types/user";
import { Users as UsersMock } from "../../mocks/User";

const Users: React.FC = () => {
  let navigate = useNavigate();
  const [users, setUsers] = useState<UserType[]>([]);
  const [usersToShow, setUsersToShow] = useState<UserType[]>([]);
  const [filter, setFilter] = useState("");

  const functions = {} as ViewPropsFunctions;
  functions.Update = (value) => navigate("/users/update", { state: value });
  functions.Details = (value) => navigate("/users/details", { state: value });
  functions.Create = () => navigate("/users/create");

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
      setUsersToShow(filtered);
    }
    handleFilter();
  }, [filter]);

  useEffect(() => {
    async function run() {
      setUsers(UsersMock);
      setUsersToShow(UsersMock);
    }
    run();
  }, []);

  return (
    <View
      title="Dashboard - Usuário"
      subtitle="Usuários Cadastrados"
      functions={functions}
      InputSearchChange={setFilter}
      filter={filter}
      users={usersToShow}
      totalUsers={users.length}
    />
  );
};

export default Users;
