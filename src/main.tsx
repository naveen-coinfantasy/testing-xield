import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import MetaMaskProvider from "./providers/MetamaskProvider.tsx";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter basename="/">
      <MetaMaskProvider>
        <App />
      </MetaMaskProvider>
    </HashRouter>
  </React.StrictMode>
);
