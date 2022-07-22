import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./Components/Navbar";
import AddResturent from "./Components/AddResturent";
import RestList from "./Components/RestList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Navbar />
      <Routes> 
      <Route
          exact
          path="/"
          element={<RestList/>}
        ></Route>
        <Route
          exact
          path="/addresturent"
          element={<AddResturent/>}
        ></Route> 
        </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
