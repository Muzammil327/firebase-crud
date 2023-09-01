import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import Home from "./pages/Home";

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

import Dashboard from "./pages/notes/Dashboard";
import {
  DashboardProtectedRoute,
  LoginProtectedRoute,
} from "./pages/private/Dashboard";
import AddPage from "./pages/notes/AddPage";
import UpdatePage from "./pages/notes/UpdatePage";

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <LoginProtectedRoute>
          <Home />
        </LoginProtectedRoute>
      </>
    ),
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },

  {
    path: "/notes/add",
    element: <AddPage />,
  },
  {
    path: "/notes/update/:id",
    element: <UpdatePage />,
  },
  {
    path: "/notes/dashboard",
    element: (
      <>
        <DashboardProtectedRoute>
          <Dashboard />
        </DashboardProtectedRoute>
      </>
    ),
  },
]);

export default App;
