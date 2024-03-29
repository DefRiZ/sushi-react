import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//Redux
import { store } from "./store/index";
import { Provider } from "react-redux";
//Router
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />;
    </Provider>
  </BrowserRouter>
);
