import React from "react";
import s from "./NotFoundBlock.module.scss";
const NotFoundBlock = () => {
  return (
    <div className={s.root}>
      <h1>
        <span> :( </span>
        <br />
        Ничего не найдено
      </h1>
    </div>
  );
};

export default NotFoundBlock;
