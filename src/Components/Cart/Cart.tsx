import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import CartItem from '../CartItem';
import './Cart.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { countTotalAmount, countTotalCount } from '../../store/productSlice';
import { CloseModalBtn } from '../Buttons';
import { closeModal } from '../../store/modalSlice';
import useOutsideClick from '../../utils/useOutsideClick';

export const Cart = () => {
  const items = useAppSelector((state) => state.product.cartItems);
  const priceCount = useAppSelector((state) => state.product.countPriceInfo);
  const countedPrice = useAppSelector((state) => state.product.totalAmount);
  const countedCount = useAppSelector((state) => state.product.totalCount);
  const isModalOpen = useAppSelector((state) => state.modal.isOpenCart);
  const dispatch = useAppDispatch();
  const innerRef = useRef(null);

  useOutsideClick(innerRef, () => dispatch(closeModal('cart')));

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        dispatch(closeModal('cart'));
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, [isModalOpen]);

  useEffect(() => {
    dispatch(countTotalAmount());
  }, [priceCount]);

  useEffect(() => {
    dispatch(countTotalCount());
  }, [priceCount]);

  if (!isModalOpen) {
    return null;
  }

  return createPortal(
    <div className="cart__bg">
      <aside className="cart" ref={innerRef}>
        <div className="cart__close-btn">
          <CloseModalBtn onClick={() => dispatch(closeModal('cart'))} />
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
};

Cart.displayName = '';
