import React, { useEffect, useState } from 'react';
import MenuItem from '../MenuItem';
import './Menu.css';
import { getAllProducts } from '../../services/products';
import { Product } from '../../types/products';

export const Menu = () => {
  const [productsList, setProductsList] = useState<Product[]>([]);
  useEffect(() => {
    getAllProducts().then((products) => {
      setProductsList(products);
    });
  }, []);
  return (
    <section className="menu-container">
      <p className="menu-paragraph">Make all your sweet wishes become true 😋</p>
      <div className="menu-items-container">
        {productsList.map((product: any) => {
          return (
            <MenuItem key={product.idMeal} id={product.idMeal} title={product.strMeal} img={product.strMealThumb} />
          );
        })}
      </div>
      <div className="menu-smth"></div>
    </section>
  );
};
