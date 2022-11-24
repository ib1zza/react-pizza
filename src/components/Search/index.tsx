import React from "react";
import s from "./Search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Search = () => {
  return (
    <div className={s.root}>
      <FontAwesomeIcon icon={faMagnifyingGlass} className={s.icon} />
      <input type="text" placeholder={"Search"} />
    </div>
  );
};

export default Search;
