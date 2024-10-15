import React from 'react';
import { PlusMinusBtn } from '../Buttons';
import './CartItem.css';

type CartItem = {
  img: string;
  title: string;
  id: string;
};

export const CartItem = ({ img, title, id }: CartItem) => {
  return (
    <div className="cartItem">
      <img src={img} alt="item-picture" />
      {title}
      <div className="cartItem__quantity">
        <PlusMinusBtn id={id} />
      </div>
    </div>
  );
};
