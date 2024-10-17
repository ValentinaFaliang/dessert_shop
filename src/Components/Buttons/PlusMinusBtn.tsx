import React from 'react';
import './PlusMinusBtn.css';
import { useAppDispatch, useAppSelector } from '../../store/productSlice/hooks';
import { decremented, incremented, updateAmount } from '../../store/productSlice';

type PlusMinusBtn = {
  id: string;
};

export const PlusMinusBtn = ({ id }: PlusMinusBtn) => {
  const count = useAppSelector((state) => state.countPriceInfo);
  const dispatch = useAppDispatch();

  return (
    <div className="plus-minus-btn">
      <input
        min="1"
        max="11"
        type="number"
        value={count[id]?.count || ''}
        onChange={(e) => dispatch(updateAmount(e.target.value))}
      />
      <button onClick={() => dispatch(decremented({ id }))} className="btn-quantity btn-minus" type="button">
        -
      </button>
      <button onClick={() => dispatch(incremented({ id }))} className="btn-quantity btn-plus" type="button">
        +
      </button>
    </div>
  );
};
