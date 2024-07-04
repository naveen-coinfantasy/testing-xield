import { Navigate, Route, Routes } from "react-router";
import { PublicRoute } from "./PublicRoute";
import { Login } from "@/pages/login";
import ErrorPage from "./ErrorPage";
import { PrivateRoute } from "./PrivateRoute";
import { lazy } from "react";
const Home = lazy(() => import("@/pages/home"));
export const MainRoutes = () => {
  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route path="/" element={<PublicRoute />}>
        <Route path="login" element={<Login />} />
      </Route>

      {/* PRIVATE ROUTES */}
      <Route path="/" element={<PrivateRoute />}>
        <Route path="home" element={<Home />} />
        <Route index element={<Navigate to={"/home"} />} />
      </Route>

      {/* DEFAULT ROUTE */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
