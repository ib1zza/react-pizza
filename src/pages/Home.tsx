import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";
import { IPizza } from "../App";

const Home = () => {
  const [pizzas, setPizzas] = useState<IPizza[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [categoryId, setCategoryId] = useState<number>(0);
  const [sortType, setSortType] = useState({
    name: "популярности",
    sort: "rating",
  });

  useEffect(() => {
    setLoading(true);
    const baseQuery = "https://637b3dc210a6f23f7fa31124.mockapi.io/items";
    const sorting = sortType.sort.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const order = sortType.sort.includes("-") ? "desc" : "asc";

    fetch(`${baseQuery}?${category}&sortBy=${sorting}&order=${order}`)
      .then((res) => res.json())
      .then((res) => setPizzas(res))
      .then(() => setLoading(false));
  }, [categoryId, sortType]);

  return (
    <div>
      <div className="content__top">
        <Categories
          value={categoryId}
          onChange={(id: number) => setCategoryId(id)}
        />
        <Sort value={sortType} onChange={(id) => setSortType(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {loading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : pizzas.map((pizza) => <PizzaBlock {...pizza} key={pizza.id} />)}
      </div>
    </div>
  );
};

export default Home;
