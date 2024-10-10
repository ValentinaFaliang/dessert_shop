import React, { forwardRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import CartItem from '../CartItem';
import './Cart.css';
import { useAppSelector } from '../../store/productSlice/hooks';

export const Cart = forwardRef<any, any>((_, ref) => {
  const items = useAppSelector((state) => state.items);
  console.log('cart', items);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, []);

  return createPortal(
    <section className="cart">
      <div ref={ref} className="cart-container">
        {items.map((item) => (
          <CartItem key={item.idMeal} title={item.strMeal} img={item.strMealThumb} />
        ))}
      </div>
    </section>,
    document.body
  );
});

Cart.displayName = '';
