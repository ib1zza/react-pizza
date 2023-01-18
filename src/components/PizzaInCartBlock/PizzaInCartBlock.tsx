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
      </div>
    </div>
  );
};

export default PizzaInCartBlock;
