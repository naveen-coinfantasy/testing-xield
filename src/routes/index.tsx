import { Navigate } from "react-router";
import { Login } from "@/pages/login";
import ErrorPage from "./ErrorPage";
import { useRoutes } from "react-router-dom";

import { lazy } from "react";
const Home = lazy(() => import("@/pages/home"));
export const MainRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      children: [
        {
          path: "login",
          element: <Login />,
        },
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
