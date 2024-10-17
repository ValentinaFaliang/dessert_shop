import React, { useRef, useState } from 'react';
import './AddToCartBtn.css';
import Cart from '../Cart';
import useOutsideClick from '../../utils/useOutsideClick';
import { useAppDispatch } from '../../store/productSlice/hooks';
import { fetchCartData } from '../../store/productSlice';

interface AddToCartBtnProps {
  long?: boolean;
  itemId?: string;
}

export const AddToCartBtn = ({ long, itemId }: AddToCartBtnProps) => {
  const [addToCart, setAddtoCart] = useState(false);
  const CartRef = useRef<HTMLDivElement>(null);
  useOutsideClick(CartRef, () => setAddtoCart(false));
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    setAddtoCart(true);
    dispatch(fetchCartData(itemId!));
  };

  return (
    <>
      <button className={`button ${long ? 'addToCart_long-btn' : ''}`} onClick={handleAddToCart}>
        Add to cart
      </button>

      {addToCart && <Cart ref={CartRef} itemId={itemId} />}
    </>
  );
};
