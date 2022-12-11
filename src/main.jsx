import "./index.css";

import App from "./App";

import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { Window } from "./util/ui/window";

if (import.meta.env.SSR && Window.exists()) {
  ReactDOM.hydrateRoot(
    window.document.getElementById("root"),
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}

if (!import.meta.env.SSR) {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}
