import "./App.css";
import { useRoutes } from "react-router";
import PageA from "./pages/A";
import PageB from "./pages/B";
import { BrowserRouter } from "react-router-dom";

function App() {
  const routes = useRoutes([
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
  return <BrowserRouter>{routes}</BrowserRouter>;
}

export default App;
