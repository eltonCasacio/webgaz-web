import { Home, Settings } from "styled-icons/fluentui-system-filled";
import { UserGroup, Users, DocumentReport } from "styled-icons/heroicons-solid";
import {
  LocalShipping,
  LocalGasStation,
  TransferWithinAStation,
} from "styled-icons/material-rounded";

export const Menus = [
  { name: "Inicio", url: "home", icon: <Home /> },
  { name: "Clientes", url: "client", icon: <UserGroup /> },
  { name: "Produtos", url: "product", icon: <LocalGasStation /> },
  { name: "Fornecedores", url: "provider", icon: <TransferWithinAStation /> },
  { name: "Usuários", url: "user", icon: <Users /> },
  { name: "Transportadoras", url: "shipping", icon: <LocalShipping /> },
  { name: "Relatórios", url: "report", icon: <DocumentReport /> },
  { name: "Configurações", url: "setting", icon: <Settings /> },
];
