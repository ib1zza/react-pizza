import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";
import { setCategoryId, setPageCount } from "../redux/slices/filterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
//! import qs from "qs";
import { fetchPizzas } from "../redux/slices/pizzaSlice";
import { Pagination } from "../components/Pagination";

const Home = () => {
  const dispatch = useAppDispatch();
  const { categoryId, searchQuery, pageCount } = useAppSelector(
    (state) => state.filter
  );
  const [categories] = useState<string[]>([
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ]);

  const sortType = useAppSelector((state) => state.filter.sort.sortProperty);
  const { list, loading } = useAppSelector((state) => state.pizzaSlice);

  useEffect(() => {
    const sorting = `&sortBy=${sortType.replace("-", "")}`;
    const category = categoryId > 0 ? `&category=${categoryId}` : "";
    const order = `&order=${sortType.includes("-") ? "desc" : "asc"}`;
    const page = `&page=${pageCount}&limit=4`;
    const search = searchQuery ? `&search=${searchQuery}` : "";
    dispatch(fetchPizzas(`?${page}${category}${search}${sorting}${order}`));
  }, [categoryId, sortType, searchQuery, pageCount]);

  const onChangePage = (n: number) => dispatch(setPageCount(n));

  return (
    <div>
      <div className="content__top">
        <Categories
          value={categoryId}
          onChange={(id: number) => dispatch(setCategoryId(id))}
        />
      </div>
      <div className="content__title">
        <h2>{categories[categoryId] + " пиццы"}</h2>
        <Sort />
      </div>
      <div className="content__items">
        {loading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : list.map((pizza) => <PizzaBlock {...pizza} key={pizza._id} />)}
      </div>
      <Pagination currentPage={pageCount} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
