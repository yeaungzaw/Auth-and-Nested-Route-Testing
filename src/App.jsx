import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  AdminPage,
  BlogPage,
  DashboardPage,
  InventoryPage,
  LoginPage,
  RegisterPage,
  UserPage,
} from "./page";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminPage />}>
          <Route index element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route index element={<InventoryPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="user" element={<UserPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
