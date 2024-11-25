import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import CartItem from '../CartItem';
import './Cart.css';
import { useAppDispatch, useAppSelector } from '../../store/productSlice/hooks';
import { countTotalAmount, countTotalCount } from '../../store/productSlice';
import { CloseModalBtn } from '../Buttons';
import useOutsideClick from '../../utils/useOutsideClick';

export const Cart = forwardRef<any, any>((_, ref) => {
  const items = useAppSelector((state) => state.cartItems);
  const priceCount = useAppSelector((state) => state.countPriceInfo);
  const countedPrice = useAppSelector((state) => state.totalAmount);
  const countedCount = useAppSelector((state) => state.totalCount);
  const [isOpen, setIsOpen] = useState(false);
  const innerRef = useRef(null);

  useOutsideClick(innerRef, () => setIsOpen(false));

  useImperativeHandle(ref, () => {
    return {
      open: () => setIsOpen(true),
      close: () => setIsOpen(false)
    };
  });

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, [isOpen]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(countTotalAmount());
  }, [priceCount]);

  useEffect(() => {
    dispatch(countTotalCount());
  }, [priceCount]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, []);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className="cart__bg">
      <aside className="cart" ref={innerRef}>
        <div className="cart__close-btn">
          <CloseModalBtn onClick={() => setIsOpen(false)} />
        </div>
        <header className="cart__header">
          <h2>Your Cart</h2>
        </header>
        <main className="cart-container">
          <div className="cart-container-wrapper">
            {Object.values(items).map((item) => (
              <CartItem
                key={item.idMeal}
                title={item.strMeal}
                img={item.strMealThumb}
                id={item.idMeal}
                price={priceCount[item.idMeal].price}
              />
            ))}
          </div>
        </main>
        <footer className="cart__price-section">
          <p>
            total amount: <span>{countedPrice}$</span>
          </p>
          <p>
            total quantity: <span>{countedCount}</span>
          </p>
        </footer>
      </aside>
    </div>,
    document.body
  );
});

Cart.displayName = '';
