import React, { useEffect } from 'react';
import MenuItem from '../MenuItem';
import './Menu.css';
import { fetchItemsData } from '../../store/productSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

export const Menu = () => {
  const items = useAppSelector((state) => state.product.items);
  const countPrice = useAppSelector((state) => state.product.countPriceInfo);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchItemsData());
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="menu-container">
      <p className="menu-paragraph">Make all your sweet wishes become true 😋</p>
      <div className="menu-items-container">
        {Object.values(items).map((product: any) => {
          return (
            <MenuItem
              key={product.idMeal}
              id={product.idMeal}
              title={product.strMeal}
              img={product.strMealThumb}
              price={countPrice[product.idMeal].price}
            />
          );
        })}
      </div>
      <div className="menu-smth"></div>
    </section>
  );
};
