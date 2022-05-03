import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/tailwind.css";
import "./styles/globals.css";
import App from "./App";
// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
