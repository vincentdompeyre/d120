import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

const root = document.getElementById("root")!;
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// En production, le HTML est pré-rendu : on le reprend en main. En développement, #root est vide.
if (root.hasChildNodes()) {
  ReactDOM.hydrateRoot(root, app);
} else {
  ReactDOM.createRoot(root).render(app);
}
