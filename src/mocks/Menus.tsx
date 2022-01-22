import { Home, Settings } from "styled-icons/fluentui-system-filled";
import { UserGroup, Users, DocumentReport } from "styled-icons/heroicons-solid";
import {
  LocalShipping,
  LocalGasStation,
  TransferWithinAStation,
} from "styled-icons/material-rounded";

export const Menus = [
  { name: "Inicio", url: "home", icon: <Home /> },
  { name: "Clientes", url: "clients", icon: <UserGroup /> },
  { name: "Produtos", url: "products", icon: <LocalGasStation /> },
  { name: "Fornecedores", url: "suppliers", icon: <TransferWithinAStation /> },
  { name: "Usuários", url: "users", icon: <Users /> },
  { name: "Transportadoras", url: "shippings", icon: <LocalShipping /> },
  { name: "Relatórios", url: "reports", icon: <DocumentReport /> },
  { name: "Configurações", url: "settings", icon: <Settings /> },
];
