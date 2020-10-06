import React from "react";
import logo from "./logo.svg";
import { Provider } from 'react-redux';
import store from './store';
import axios from 'axios';
import {SERVER_BASE_URL} from './config/app.config';
import "./App.css";
import "./index.css";
import MainLayout from "./Containers/MainLayout";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MainLayout />
      </Provider>
    </div>
  );
}

export default App;
