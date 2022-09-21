import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import FirstComp from "./showprice";
import store from "./redux/store";
import SecondComp from "./secondComp";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <SecondComp></SecondComp>
    <FirstComp></FirstComp>
  </Provider>
);
