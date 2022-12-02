import React, { useRef, useState } from "react";
import s from "./Search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
const Search = () => {
  const [searchVal, setSearchVal] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const clearInputHandler = () => {
    setSearchVal("");
    if (inputRef.current) inputRef.current.focus();
  };
  return (
    <div className={s.root}>
      <FontAwesomeIcon icon={faMagnifyingGlass} className={s.icon} />
      <input
        type="text"
        placeholder={"Search"}
        value={searchVal}
        onChange={(event) => setSearchVal(event.target.value)}
        ref={inputRef}
      />
      {searchVal && (
        <FontAwesomeIcon
          icon={faXmark}
          className={s.iconClear}
          onClick={clearInputHandler}
        />
      )}
    </div>
  );
};

export default Search;
