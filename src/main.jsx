import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { store } from "./Redux/store.js";
import { Provider } from "react-redux";
import RouteProvider from "./Router/RouteProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouteProvider />
    </Provider>
  </React.StrictMode>
);
