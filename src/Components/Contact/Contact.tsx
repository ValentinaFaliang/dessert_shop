import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import './Contact.css';
import { CloseModalBtn } from '../Buttons';
import useOutsideClick from '../../utils/useOutsideClick';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { closeModal } from '../../store/modalSlice';

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const isModalOpen = useAppSelector((state) => state.modal.isOpenContact);
  const dispatch = useAppDispatch();
  const innerRef = useRef(null);
  useOutsideClick(innerRef, () => dispatch(closeModal('contact')));

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        dispatch(closeModal('contact'));
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, [isModalOpen]);

  if (!isModalOpen) {
    return null;
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsFormVisible(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsFormVisible(true);
      setIsSubmitted(false);
    }, 3000);
  };

  return createPortal(
    <div className="contact">
      {isFormVisible && (
        <aside ref={innerRef} className="contact-container">
          <CloseModalBtn onClick={() => dispatch(closeModal('contact'))} />
          <h3>Do you want something special?</h3>
          <h4>Contact us!</h4>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="fname"> First name:</label>
            <input placeholder="Michael" type="text" id="fname" name="fname" />
            <label htmlFor="lname"> Last name:</label>
            <input placeholder="Jackson" type="text" id="lname" name="lname" />
            <label htmlFor="email"> Email:</label>
            <input
              placeholder="example@email.com"
              type="email"
              id="email"
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              size={30}
              required
            />
            <label htmlFor="tel"> Mobile number:</label>
            <input
              type="tel"
              id="tel"
              name="tel"
              placeholder="+71234567890"
              pattern="^((\+7|\+8|7|8)*(9)+([0-9]){9})$"
              size={20}
              minLength={9}
              maxLength={14}
              required
            />
            <label htmlFor="message"> Your message:</label>
            <textarea id="message" name="message" placeholder="Type your message here" required />
            <button className="button form-btn" type="submit" value="Submit">
              Send
            </button>
          </form>
        </aside>
      )}
      {isSubmitted && (
        <div className="notification">
          <p>Your message was sent!</p>
        </div>
      )}
    </div>,
    document.body
  );
};

Contact.displayName = '';
