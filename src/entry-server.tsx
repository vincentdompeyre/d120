import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

// Utilisé uniquement au build, par le plugin de pré-rendu de vite.config.ts.
export function render() {
  return renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
