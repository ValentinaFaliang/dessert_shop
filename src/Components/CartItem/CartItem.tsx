import React from 'react';
import { PlusMinusBtn } from '../Buttons';
import './CartItem.css';

type CartItem = {
  img: string;
  title: string;
};

export const CartItem = ({ img, title }: CartItem) => {
  return (
    <div className="cartItem">
      <img src={img} alt="item-picture" />
      {title}
      <div className="cartItem__quantity">
        <PlusMinusBtn />
      </div>
    </div>
  );
};
