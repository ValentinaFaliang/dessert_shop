import React, { ChangeEvent, useEffect, useState } from 'react';
import './ItemPage.css';
import { useLocation } from 'react-router-dom';
import { getProduct } from '../../services/products';
import { ProductInfo } from '../../types/products';

export const ItemPage = () => {
  const { state } = useLocation();
  const [value, setValue] = useState('1');
  const [productInfo, setProductInfo] = useState<ProductInfo>({} as ProductInfo);

  console.log(productInfo);

  useEffect(() => {
    getProduct(state.id).then((product) => {
      setProductInfo(product);
    });
  }, []);
  const minus = () => {
    const intValue = Number(value);
    if (intValue > 1) {
      setValue((intValue - 1).toString());
    }
    return value;
  };
  const plus = () => {
    const intValue = Number(value);
    if (intValue < 10) {
      setValue((intValue + 1).toString());
    }
    return value;
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const intValue = Number(e.target.value);
    if (!intValue) {
      return setValue('');
    }
    if (intValue > 0 && intValue < 11) {
      setValue(e.target.value);
    }
  };

  return (
    <section className="itemPage">
      <div className="itemPage__container">
        <div className="itemPage__img-section">
          <img src={state.img} alt="marsh-img" />
        </div>
        <div className="itemPage__desc-section">
          <h2>{state.title}</h2>
          <div className="itemPage__product-info">
            <p className="product-price">10$</p>
            <div className="itemPage__buttons">
              <div className="item-quantity">
                <input min="1" max="10" pattern="[0-9]" type="number" value={value.toString()} onChange={onChange} />
                <button onClick={() => minus()} className="btn-quantity btn-minus" type="button">
                  -
                </button>
                <button onClick={() => plus()} className="btn-quantity btn-plus" type="button">
                  +
                </button>
              </div>
              <button className="btn_white itemPage__btn-add">Add to cart</button>
            </div>
            <div className="itemPage__marsh-desc">
              <h3>Ingredients</h3>
              <div className="itemPage__ingredients">
                <ul>
                  {productInfo?.ingredients?.map((ingrd, index) => (
                    <li key={index}>{`${ingrd}: ${productInfo.measures[index]}`}</li>
                  ))}
                </ul>
              </div>
              <h3>How to cook</h3>
              <p>{productInfo.strInstructions}</p>
              <iframe width="700" height="400" src={productInfo.strYoutube}></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
