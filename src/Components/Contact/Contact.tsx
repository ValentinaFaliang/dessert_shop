import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./Contact.css";
import useOutsideClick from "../../utils/useOutsideClick";

export const Contact = forwardRef<any, any>((_, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const innerRef = useRef(null);

    useOutsideClick(innerRef, () => setIsOpen(false));

    useImperativeHandle(ref, () => {
        return {
            open: () => setIsOpen(true),
            close: () => setIsOpen(false),
        }
    });

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

    if (!document.body) {
        throw new Error("document.body is null or undefined");
    }
    return createPortal(
        <div className="contact">
            <aside ref={innerRef} className="contact-container">
                <span className="contact-container-close" onClick={() => setIsOpen(false)}>x</span>
                <form className="contact-form">
                <label htmlFor="fname"> First name:</label>
                <input type="text" id="fname" name="fname" />
                </form>
            </aside>
        </div >,
        document.body
    );
});

Contact.displayName = '';
