import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";
import { IPizza } from "../App";
import { setCategoryId, setFilters } from "../redux/slices/filterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import axios from "axios";
import qs from "qs";

const Home = () => {
  const dispatch = useAppDispatch();
  const categoryId = useAppSelector((state) => state.filter.categoryId);
  const [pizzas, setPizzas] = useState<IPizza[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const searchQuery = useAppSelector((state) => state.filter.searchQuery);
  const sortType = useAppSelector((state) => state.filter.sort.sortProperty);

  useEffect(() => {
    setLoading(true);
    const baseQuery = "https://637b3dc210a6f23f7fa31124.mockapi.io/items";
    const sorting = sortType.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}&` : "";
    const order = sortType.includes("-") ? "desc" : "asc";

    axios
      .get<IPizza[]>(
        `${baseQuery}?${category}search=${searchQuery}&sortBy=${sorting}&order=${order}`
      )
      .then((res) => setPizzas(res.data))
      .then(() => setLoading(false));
  }, [categoryId, sortType, searchQuery]);

  return (
    <div>
      <div className="content__top">
        <Categories
          value={categoryId}
          onChange={(id: number) => dispatch(setCategoryId(id))}
        />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {loading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : pizzas.map((pizza) => <PizzaBlock {...pizza} key={pizza.id} />)}
        {/*<SaleCard price={590} title={`Маска для мафии “Чикаго”`} img={"https://basket-02.wb.ru/vol272/part27271/27271546/images/big/2.jpg"}/>*/}
      </div>
    </div>
  );
};

export default Home;
