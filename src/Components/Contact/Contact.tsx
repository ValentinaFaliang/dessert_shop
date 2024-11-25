import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import './Contact.css';
import { CloseModalBtn } from '../Buttons';
import useOutsideClick from '../../utils/useOutsideClick';

export const Contact = forwardRef<any, any>((_, ref) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const innerRef = useRef(null);
  useOutsideClick(innerRef, () => setIsOpen(false));

  useImperativeHandle(ref, () => {
    return {
      open: () => setIsOpen(true),
      close: () => setIsOpen(false)
    };
  });

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsFormVisible(false);
    setIsOpen(false);
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
          <CloseModalBtn onClick={() => setIsOpen(false)} />
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
});

Contact.displayName = '';
