import React, { useEffect } from 'react';
import { DeleteFromCartBtn, PlusMinusBtn } from '../Buttons';
import './CartItem.css';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { countPrice, deleteCartItem } from '../../store/productSlice';

type CartItem = {
  img: string;
  title: string;
  id: string;
  price: number;
};

export const CartItem = ({ img, title, id, price }: CartItem) => {
  const countPriceInfo = useAppSelector((state) => state.product.countPriceInfo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(countPrice(id));
  }, [countPriceInfo[id].count]);

  const deleteItem = () => {
    dispatch(deleteCartItem(id));
  };

  return (
    <div className="cartItem">
      <div className="cartItem__first-section">
        <Link to="/item_page" state={{ id, title, img, price }}>
          <img src={img} alt="item-picture" />
        </Link>
      </div>
      <div className="cartItem__second-section">
        <div className="cartItem__title-btn">
          {title}
          <DeleteFromCartBtn onDelete={deleteItem} />
        </div>
        <div className="cartItem__quantity-price">
          <PlusMinusBtn id={id} />
          <div className="cartItem__price">{countPriceInfo[id].countedPrice || price}$</div>
        </div>
      </div>
    </div>
  );
};
