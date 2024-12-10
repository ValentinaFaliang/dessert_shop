import React from 'react';
import './AddToCartBtn.css';
// import Cart from '../Cart';
import { openModal } from '../../store/modalSlice';
import { useAppDispatch } from '../../store/hooks';
import { fetchCartData } from '../../store/productSlice';

interface AddToCartBtnProps {
  long?: boolean;
  itemId?: string;
}

export const AddToCartBtn = ({ long, itemId }: AddToCartBtnProps) => {
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    dispatch(openModal(''));
    dispatch(fetchCartData(itemId!));
  };

  return (
    <>
      <button className={`button ${long ? 'addToCart_long-btn' : ''}`} onClick={handleAddToCart}>
        Add to cart
      </button>
    </>
  );
};
