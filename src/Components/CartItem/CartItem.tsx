import React from 'react';
import { PlusMinusBtn } from '../Buttons';
import './CartItem.css';
import { Link } from 'react-router-dom';

type CartItem = {
  img: string;
  title: string;
  id: string;
  price: number;
};

export const CartItem = ({ img, title, id, price }: CartItem) => {
  console.log('cartItem', price);
  return (
    <div className="cartItem">
      <Link to="/item_page" state={{ id, title, img, price }}>
        <img src={img} alt="item-picture" />
      </Link>
      {title}
      <div className="cartItem__quantity">
        <PlusMinusBtn id={id} />
      </div>
      <div className="cartItem__price">{price}$</div>
    </div>
  );
};
