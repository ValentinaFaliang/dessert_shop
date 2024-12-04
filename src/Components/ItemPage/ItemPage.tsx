import React, { useEffect, useMemo, useState } from 'react';
import './ItemPage.css';
import { useLocation } from 'react-router-dom';
import { getProduct } from '../../services/products';
import { ProductInfo } from '../../types/products';
import { AddToCartBtn, PlusMinusBtn } from '../Buttons';
import { useAppDispatch } from '../../store/hooks';
import { addEmptyItem } from '../../store/productSlice';

const watchURL = 'watch?v=';

export const ItemPage = () => {
  const { state } = useLocation();
  const dispatch = useAppDispatch();

  const [productInfo, setProductInfo] = useState<ProductInfo>({} as ProductInfo);

  const youtubeURL = useMemo(() => productInfo?.strYoutube?.replace(watchURL, 'embed/'), [productInfo.strYoutube]);

  useEffect(() => {
    getProduct(state.id).then((product) => {
      setProductInfo(product);
      dispatch(addEmptyItem(product));
    });
  }, []);

  return (
    <section className="itemPage">
      <div className="itemPage__container">
        <div className="itemPage__img-section">
          <img src={state.img} alt="marsh-img" />
        </div>
        <div className="itemPage__desc-section">
          <h2>{state.title}</h2>
          <div className="itemPage__product-info">
            <p className="product-price">{state.price}$</p>
            <div className="itemPage__buttons">
              <PlusMinusBtn id={state.id} />
              <AddToCartBtn long itemId={state.id} />
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
              <div className="youtube-iframe">
                <iframe src={youtubeURL}></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
