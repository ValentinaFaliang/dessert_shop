import React, { forwardRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import CartItem from '../CartItem';
import './Cart.css';
import { useAppDispatch, useAppSelector } from '../../store/productSlice/hooks';
import { countTotalAmount } from '../../store/productSlice';

export const Cart = forwardRef<any, any>(({ itemId }, ref) => {
  const items = useAppSelector((state) => state.cartItems);
  const priceCount = useAppSelector((state) => state.countPriceInfo);
  const countedPrice = useAppSelector((state) => state.totalAmount);
  const dispatch = useAppDispatch();

  console.log('cart', countedPrice, itemId);

  useEffect(() => {
    dispatch(countTotalAmount());
  }, [priceCount]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, []);

  return createPortal(
    <section className="cart">
      <div ref={ref} className="cart-container">
        {Object.values(items).map((item) => (
          <CartItem
            key={item.idMeal}
            title={item.strMeal}
            img={item.strMealThumb}
            id={item.idMeal}
            price={priceCount[item.idMeal].price}
          />
        ))}
        <div className="cart__price-section">
          <p>total amount {countedPrice}</p>
        </div>
      </div>
    </section>,
    document.body
  );
});

Cart.displayName = '';
