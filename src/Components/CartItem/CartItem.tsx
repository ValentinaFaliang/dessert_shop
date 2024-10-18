import React, { useEffect } from 'react';
import { PlusMinusBtn } from '../Buttons';
import './CartItem.css';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/productSlice/hooks';
import { countPrice } from '../../store/productSlice';

type CartItem = {
  img: string;
  title: string;
  id: string;
  price: number;
};

export const CartItem = ({ img, title, id, price }: CartItem) => {
  const countPriceInfo = useAppSelector((state) => state.countPriceInfo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(countPrice(id));
  }, [countPriceInfo[id].count]);

  return (
    <div className="cartItem">
      <Link to="/item_page" state={{ id, title, img, price }}>
        <img src={img} alt="item-picture" />
      </Link>
      {title}
      <div className="cartItem__quantity">
        <PlusMinusBtn id={id} />
      </div>
      <div className="cartItem__price">{countPriceInfo[id].countedPrice || price}$</div>
    </div>
  );
};
