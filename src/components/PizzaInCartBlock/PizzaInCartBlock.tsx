import React from "react";
import {
  addItem,
  IPizzaInCart,
  removeItem,
} from "../../redux/slices/cartSlice";
import { useAppDispatch } from "../../redux/hooks";
import s from "./PizzaInCartBlock.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
interface Props extends IPizzaInCart {}

const PizzaInCartBlock: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const { title, price, imageUrl, sizes, types, count } = props;
  const typesNames = ["тонкое", "традиционное"];
  const handleOnClick = () => {
    dispatch(addItem({ ...props }));
  };
  return (
    <div className={s.block}>
      <div className={s.info}>
        <img className={s.image} src={imageUrl} alt="Pizza" />
        <div className={s.description}>
          <h4 className={s.title}>{title}</h4>
          <div className={s.description__options}>
            <div className={s.dought}>{typesNames[types] + " тесто"}</div>
            <div className={s.size}>{sizes + " см."}</div>
          </div>
        </div>
      </div>
      <div className={s.priceBlock}>
        <div className={s.priceBlock__price}>{price} ₽</div>
        <div className={s.priceBlock__controls}>
          <button onClick={() => dispatch(removeItem(props))}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <div>{count}</div>
          <button onClick={() => dispatch(addItem(props))}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        {/*<div className="button button--outline button--add">*/}
        {/*  <svg*/}
        {/*    width="12"*/}
        {/*    height="12"*/}
        {/*    viewBox="0 0 12 12"*/}
        {/*    fill="none"*/}
        {/*    xmlns="http://www.w3.org/2000/svg"*/}
        {/*  >*/}
        {/*    <path*/}
        {/*      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"*/}
        {/*      fill="white"*/}
        {/*    />*/}
        {/*  </svg>*/}
        {/*  <span onClick={handleOnClick}>Добавить</span>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default PizzaInCartBlock;
