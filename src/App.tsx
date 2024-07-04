import "./App.css";
import { useRoutes } from "react-router";
import PageA from "./pages/A";
import PageB from "./pages/B";

function App() {
  return useRoutes([
    {
      path: "/",
      element: <div>Hello</div>,
      children: [
        {
          path: "a",
          element: <PageA />,
        },
        {
          path: "b",
          element: <PageB />,
        },
      ],
    },
  ]);
}

export default App;
