import React, { MouseEvent } from 'react';
import './CloseModalBtn.css';
interface CloseModalBtnProps {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const CloseModalBtn = ({ onClick }: CloseModalBtnProps) => {
  return (
    <span className="contact-container-close" onClick={onClick}>
      x
    </span>
  );
};
