import React, { ChangeEvent, useState } from 'react';
import marsh from './../../assets/menu-items/marshmellow_bag.jpg';
import './ItemPage.css';

export const ItemPage = () => {
  const [value, setValue] = useState('1');
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
          <img src={marsh} alt="marsh-img" />
        </div>
        <div className="itemPage__desc-section">
          <h2>Classic Vanilla Sugar-Free Marshmallow</h2>
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
              <h3>Description</h3>
              <p>
                {`Pack our Mallows with good stuff like collagen, fiber, and MCT oil, yet they remain sugar-free! Toss
                  them into your coffee, hot cocoa, snack on them quickly, or add them to your baking mix. Indulge in
                  our marshmallows guilt-free! They boast healthy ingredients and zero sugar. Max shines as a snack or a
                  delicious boost to your favorite drink, standing out as the first sugar-free marshmallows infused with
                  these nutritious elements. `}
              </p>
              <p>{`Max Mallows Classic Vanilla Sugar-Free Marshmallow is the go-to treat for
                  anyone reducing sugar intake. Experience their softness, fluffiness, and rich vanilla flavor. Ideal
                  for the health-conscious, they are free from sugar and gluten, appealing to a broad range of tastes.
                  Savor their vanilla flavor with various foods or enjoy them solo. `}</p>
              <p>{`Crafted naturally, without
                  artificial flavors or colors, they offer reliable quality and taste. Choose these marshmallows when
                  you crave something sweet yet beneficial. They're perfect for baking, topping, or eating straight
                  from the bag. Opt for Max Mallows for a delightful sweet experience without the sugar hit, and still
                  enjoy their excellent taste.`}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
