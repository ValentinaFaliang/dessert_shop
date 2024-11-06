import React, { MouseEvent } from 'react';
import deleteBtn from '././../../assets/buttons/delete-btn.png';
import './DeleteFromCartBtn.css';

type DeleteFromCartBtnProps = {
  onDelete: (e: MouseEvent<HTMLButtonElement>) => void;
};

export const DeleteFromCartBtn = ({ onDelete }: DeleteFromCartBtnProps) => {
  return (
    <button onClick={onDelete}>
      <img src={deleteBtn} alt="delete-btn" />
    </button>
  );
};
