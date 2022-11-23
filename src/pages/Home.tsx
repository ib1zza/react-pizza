import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";
import { IPizza } from "../App";

const Home = () => {
  const [pizzas, setPizzas] = useState<IPizza[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://637b3dc210a6f23f7fa31124.mockapi.io/items?category=" + categoryId
    )
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
        <Sort value={sortType} onChange={(id: number) => setSortType(id)} />
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
