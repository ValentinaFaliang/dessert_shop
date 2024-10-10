import React from 'react';
import './PlusMinusBtn.css';
import { useAppDispatch, useAppSelector } from '../../store/productSlice/hooks';
import { decremented, incremented, updateAmount } from '../../store/productSlice';

export const PlusMinusBtn = () => {
  const count = useAppSelector((state) => state.value);
  const dispatch = useAppDispatch();
  return (
    <div className="plus-minus-btn">
      <input
        min="1"
        max="10"
        type="number"
        value={count || ''}
        onChange={(e) => dispatch(updateAmount(e.target.value))}
      />
      <button onClick={() => dispatch(decremented())} className="btn-quantity btn-minus" type="button">
        -
      </button>
      <button onClick={() => dispatch(incremented())} className="btn-quantity btn-plus" type="button">
        +
      </button>
    </div>
  );
};
