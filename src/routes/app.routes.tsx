import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Clients from "../pages/Clients";
import { ClientDetail, ClientUpdate } from "../pages/Clients/CRUD";

import Products from "../pages/Products";
import { ProductDetails, ProductUpdate } from "../pages/Products/CRUD";

import Users from "../pages/Users";
import { UserDetails, UserUpdate } from "../pages/Users/CRUD";

import Suppliers from "../pages/Suppliers";
import { SuppliersDetails, SuppliersUpdate } from "../pages/Suppliers/CRUD";

import Shippings from "../pages/Shippings";
import { ShippingDetails, ShippingUpdate } from "../pages/Shippings/CRUD";

import Settings from "../pages/Settings";
import Reports from "../pages/Reports";

const authRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/clients/details/:id" element={<ClientDetail />} />
      <Route path="/clients/update/:id" element={<ClientUpdate />} />

      <Route path="/products" element={<Products />} />
      <Route path="/products/details/:id" element={<ProductDetails />} />
      <Route path="/products/update/:id" element={<ProductUpdate />} />

      <Route path="/users" element={<Users />} />
      <Route path="/users/details/:id" element={<UserDetails />} />
      <Route path="/users/update/:id" element={<UserUpdate />} />

      <Route path="/suppliers" element={<Suppliers />} />
      <Route path="/suppliers/details/:id" element={<SuppliersDetails />} />
      <Route path="/suppliers/update/:id" element={<SuppliersUpdate />} />

      <Route path="/shippings" element={<Shippings />} />
      <Route path="/shippings/details/:id" element={<ShippingDetails />} />
      <Route path="/shippings/update/:id" element={<ShippingUpdate />} />

      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default authRoutes;
