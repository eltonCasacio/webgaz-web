import { Home, Settings } from "styled-icons/fluentui-system-filled";
import { UserGroup, Users, DocumentReport, Document, CurrencyDollar } from "styled-icons/heroicons-solid";
import {
  LocalGasStation,
  TransferWithinAStation,
} from "styled-icons/material-rounded";

export const Menus = [
  { name: "Inicio", url: "home", icon: <Home /> },
  { name: "Pedidos", url: "purchaseorder", icon: <Document /> },
  { name: "Tabela de Preço", url: "products", icon: <LocalGasStation /> },
  { name: "Preços Promoção", url: "customprice", icon: <CurrencyDollar /> },  
  { name: "Postos", url: "fuelstation", icon: <UserGroup /> },  
  { name: "Fornecedores", url: "suppliers", icon: <TransferWithinAStation /> },
  { name: "Usuários", url: "users", icon: <Users /> },
  //{ name: "Clientes", url: "clients", icon: <UserGroup /> },  
  //{ name: "Transportadoras", url: "shippings", icon: <LocalShipping /> },
  { name: "Relatórios", url: "reports", icon: <DocumentReport /> },
  { name: "Configurações", url: "settings", icon: <Settings /> },
];
