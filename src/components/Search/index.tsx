import React, { useCallback, useRef, useState } from "react";
import s from "./Search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import debounce from "lodash.debounce";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setSearchQuery } from "../../redux/slices/filterSlice";

const Search: React.FC<{ className?: string }> = ({ className }) => {
  const dispatch = useAppDispatch();
  const searchGlobalVal = useAppSelector((state) => state.filter.searchQuery);
  const [searchVal, setSearchVal] = useState<string>(searchGlobalVal);
  const inputRef = useRef<HTMLInputElement>(null);

  const clearInputHandler = () => {
    setSearchVal("");
    dispatch(setSearchQuery(""));
    if (inputRef.current) inputRef.current.focus();
  };

  const testDebounce = useCallback(
    debounce((str) => dispatch(setSearchQuery(str)), 400),
    []
  );
  const onChangeF = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(event.target.value);
    testDebounce(event.target.value);
  };
  return (
    <div className={s.root + " " + className || ""}>
      <FontAwesomeIcon icon={faMagnifyingGlass} className={s.icon} />
      <input
        type="text"
        placeholder={"Search"}
        value={searchVal}
        onChange={onChangeF}
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
