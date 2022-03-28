import React, { useEffect, useState } from "react";
import { toast } from "../../components/Toast";
import { useListUsers, useDeleteUser } from "./hooks/user.hook";
import { useNavigate } from "react-router-dom";
import View, { ViewPropsFunctions } from "./View";
import { UserType } from "../../domain/types/user";

const Users: React.FC = () => {
  let navigate = useNavigate();
  const [users, setUsers] = useState<UserType[]>([]);
  const [usersToShow, setUsersToShow] = useState<UserType[]>([]);
  const [filter, setFilter] = useState("");
  const listUsers = useListUsers();
  const deleteUser = useDeleteUser();

  const functions = {} as ViewPropsFunctions;
  functions.Update = (value) => navigate("/users/update", { state: value });
  functions.Details = (value) => navigate("/users/details", { state: value });
  functions.Create = () => navigate("/users/create");
  functions.Delete = (userId: number) => handleDeleteUser(userId);

  useEffect(() => {
    handleLoadUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function handleFilter() {
      let auxFilter = filter.toUpperCase();

      if (auxFilter === "") {
        setUsersToShow(users);
        return;
      }
      const filtered = users.filter((item) => {
        return (
          item.email.toUpperCase().includes(auxFilter) ||
          item.name.toUpperCase().includes(auxFilter)
        );
      });
      setUsersToShow(filtered);
    }
    handleFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const handleLoadUsers = () => {
    listUsers()
      .then((users) => {
        setUsers(users)
        setUsersToShow(users);
        if (!users.length) {
          toast.warn("Não há usuários cadastrados");
        }
      })
      .catch(() => toast.error("Erro ao carregar os usuários"));
  }

  const handleDeleteUser = (userId: number) => {
    deleteUser(userId)
      .then(() => {
        handleLoadUsers();
        toast.success("Usuário excluído com sucesso.");
      })
      .catch(() => {
        toast.error("Erro ao excluír o usuário.");
      });
  };

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
