import React, { ChangeEvent, forwardRef, useEffect, useState } from 'react';
import marsh from './../../assets/menu-items/marshmellow_bag.jpg';
import './Basket.css';
import { createPortal } from 'react-dom';

export const Basket = forwardRef<any, any>((_, ref) => {
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

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, []);
  return createPortal(
    <section className="basket">
      <div ref={ref} className="basket-container">
        <div className="card-item">
          <img src={marsh} alt="marsh-img" />
          <div className="card-item__quantity">
            <div className="item-quantity">
              <input min="1" max="10" pattern="[0-9]" type="number" value={value.toString()} onChange={onChange} />
              <button onClick={() => minus()} className="btn-quantity btn-minus" type="button">
                -
              </button>
              <button onClick={() => plus()} className="btn-quantity btn-plus" type="button">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="card-item">
          <img src={marsh} alt="marsh-img" />
          <div className="card-item__quantity">
            <div className="item-quantity">
              <input min="1" max="10" pattern="[0-9]" type="number" value={value.toString()} onChange={onChange} />
              <button onClick={() => minus()} className="btn-quantity btn-minus" type="button">
                -
              </button>
              <button onClick={() => plus()} className="btn-quantity btn-plus" type="button">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="card-item">
          <img src={marsh} alt="marsh-img" />
          <div className="card-item__quantity">
            <div className="item-quantity">
              <input min="1" max="10" pattern="[0-9]" type="number" value={value.toString()} onChange={onChange} />
              <button onClick={() => minus()} className="btn-quantity btn-minus" type="button">
                -
              </button>
              <button onClick={() => plus()} className="btn-quantity btn-plus" type="button">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>,
    document.body
  );
});

Basket.displayName = '';
