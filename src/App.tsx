import React, { useEffect, useLayoutEffect, useState } from "react";
import "./App.css";
import "./scss/app.scss";
import Header from "./components/Header";
import data from "./assets/pizzas.json";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { AppRoutes } from "./TypesForRouting";
import Cart from "./pages/Cart";

export type IPizza = typeof data[0];

function App() {
  // const
  console.log(AppRoutes.cart);
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path={AppRoutes.home} element={<Home />} />
              <Route path={AppRoutes.cart} element={<Cart />} />
              <Route path={"*"} element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
