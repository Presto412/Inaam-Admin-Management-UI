import React from "react";
import logo from "./logo.svg";
import { Provider } from "react-redux";
import store from "./store";
import axios from "axios";
import { SERVER_BASE_URL } from "./config/app.config";
import "./App.css";
import "./index.css";
import MainLayout from "./Containers/MainLayout";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "antd";
import LoginPage from "./Containers/Login/LoginPage";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <LoginPage></LoginPage>
      </Provider>
    </div>
  );
}

export default App;
