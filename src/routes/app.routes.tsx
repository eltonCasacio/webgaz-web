import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Clients from "../pages/Clients";
import { Details, Update } from "../pages/Clients/CRUD";
import Products from "../pages/Products";
import Suppliers from "../pages/Suppliers";
import Users from "../pages/Users";
import Shippings from "../pages/Shippings";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";

const authRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/clients/details/:id" element={<Details />} />
      <Route path="/clients/update/:id" element={<Update />} />
      <Route path="/products" element={<Products />} />
      <Route path="/suppliers" element={<Suppliers />} />
      <Route path="/users" element={<Users />} />
      <Route path="/shippings" element={<Shippings />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default authRoutes;
