import React from "react";
import "./App.css";
import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              <PizzaBlock
                title={"Чизбургер-пицца"}
                price={500}
                src={
                  "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                }
              />
              <PizzaBlock
                title={"Чизбургер-пицца"}
                price={500}
                src={
                  "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                }
              />
              <PizzaBlock
                title={"Чизбургер-пицца"}
                price={500}
                src={
                  "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                }
              />
              <PizzaBlock
                title={"Чизбургер-пицца"}
                price={500}
                src={
                  "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                }
              />
              <PizzaBlock
                title={"Чизбургер-пицца"}
                price={500}
                src={
                  "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                }
              />
              <PizzaBlock
                title={"Чизбургер-пицца"}
                price={500}
                src={
                  "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                }
              />
              <PizzaBlock
                title={"Чизбургер-пицца"}
                price={500}
                src={
                  "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                }
              />
              <PizzaBlock
                title={"Чизбургер-пицца"}
                price={500}
                src={
                  "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
