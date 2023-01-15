import React, { useState } from "react";
import { IPizza } from "../../types";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";
import { useAppSelector } from "../../redux/hooks";

interface Props extends IPizza {
  count?: number;
}
const PizzaBlock: React.FC<Props> = (props) => {
  const { title, price, imageUrl, sizes, types } = props;
  const [selectedType, setSelectedType] = useState(types[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const cartArray = useAppSelector((state) => state.cartSlice.items);
  const count =
    cartArray.find(
      (el) =>
        el._id === props._id &&
        el.types === selectedType &&
        el.sizes === selectedSize
    )?.count || 0;

  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(
      addItem({
        ...props,
        types: selectedType,
        sizes: selectedSize,
        price: price[sizes.findIndex((el) => el === selectedSize)],
      })
    );
  };
  const typesNames = ["тонкое", "традиционное"];
  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((ind, i) => (
            <li
              className={selectedType === ind ? "active" : ""}
              onClick={() => setSelectedType(ind)}
              key={i}
            >
              {/*// @ts-ignore*/}
              {typesNames[ind]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, i) => (
            <li
              key={i}
              className={selectedSize === size ? "active" : ""}
              onClick={() => setSelectedSize(size)}
            >
              {size + " см."}
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">
          {price[sizes.findIndex((el) => el === selectedSize)]} ₽
        </div>
        <div
          onClick={handleOnClick}
          className="button button--outline button--add"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>{count || 0}</i>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
