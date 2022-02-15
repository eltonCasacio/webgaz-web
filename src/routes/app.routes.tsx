import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Clients from "../pages/Clients";
import {
  ClientDetail,
  ClientUpdate,
  ClientCreate,
} from "../pages/Clients/CRUD";

import Products from "../pages/Products";
import {
  ProductDetails,
  ProductUpdate,
  ProductCreate,
} from "../pages/Products/CRUD";

import Users from "../pages/Users";
import { UserDetails, UserUpdate } from "../pages/Users/CRUD";

import Suppliers from "../pages/Suppliers";
import {
  SuppliersDetails,
  SuppliersUpdate,
  SuppliersCreate,
} from "../pages/Suppliers/CRUD";

import Shippings from "../pages/Shippings";
import { ShippingDetails, ShippingUpdate } from "../pages/Shippings/CRUD";

import Settings from "../pages/Settings";
import Reports from "../pages/Reports";

const authRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/clients/details" element={<ClientDetail />} />
      <Route path="/clients/update" element={<ClientUpdate />} />
      <Route path="/clients/create" element={<ClientCreate />} />

      <Route path="/products" element={<Products />} />
      <Route path="/products/details" element={<ProductDetails />} />
      <Route path="/products/update" element={<ProductUpdate />} />
      <Route path="/products/create" element={<ProductCreate />} />

      <Route path="/users" element={<Users />} />
      <Route path="/users/details" element={<UserDetails />} />
      <Route path="/users/update" element={<UserUpdate />} />

      <Route path="/suppliers" element={<Suppliers />} />
      <Route path="/suppliers/details" element={<SuppliersDetails />} />
      <Route path="/suppliers/update" element={<SuppliersUpdate />} />
      <Route path="/suppliers/create" element={<SuppliersCreate />} />

      <Route path="/shippings" element={<Shippings />} />
      <Route path="/shippings/details" element={<ShippingDetails />} />
      <Route path="/shippings/update" element={<ShippingUpdate />} />

      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default authRoutes;
