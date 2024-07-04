import { Navigate } from "react-router";
import { PublicRoute } from "./PublicRoute";
import { Login } from "@/pages/login";
import ErrorPage from "./ErrorPage";
import { PrivateRoute } from "./PrivateRoute";
import { useRoutes } from "react-router-dom";

import { lazy } from "react";
const Home = lazy(() => import("@/pages/home"));
export const MainRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
    {
      path: "/",
      element: <PrivateRoute />,
      children: [
        {
          index: true,
          element: <Navigate to={"/home"} />,
        },
        {
          path: "home",
          element: <Home />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
  return routes;
  // return (
  //   <Routes>
  //     {/* PUBLIC ROUTES */}
  //     <Route path="/" element={<PublicRoute />}>
  //       <Route path="login" element={<Login />} />
  //     </Route>

  //     {/* PRIVATE ROUTES */}
  //     <Route path="/" element={<PrivateRoute />}>
  //       <Route path="home" element={<Home />} />
  //       <Route index element={<Navigate to={"/home"} />} />
  //     </Route>

  //     {/* DEFAULT ROUTE */}
  //     <Route path="*" element={<ErrorPage />} />
  //   </Routes>
  // );
};
